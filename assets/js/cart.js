/* ============================================================
   AES Cart Engine
   - State: items[{id,title,price,level,art,accent,qty}], view, isOpen
   - Persistence: localStorage 'aes_cart_v1'  (survives page nav)
   - Renders: header badge + sliding panel (cart / checkout / success)
   ============================================================ */
(function (global) {
  'use strict';

  const STORE_KEY = 'aes_cart_v1';
  const data = (global.AESData || {});
  const COURSES = data.COURSES || [];
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const money = (n) => n.toLocaleString('ru-RU') + ' ₽';

  /* ---------- State ---------- */
  const state = {
    items: [],
    isOpen: false,
    view: 'cart', // 'cart' | 'checkout' | 'success'
    pendingCheckout: false
  };

  /* ---------- Persistence ---------- */
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) state.items = JSON.parse(raw).items || [];
    } catch (e) { state.items = []; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify({ items: state.items })); } catch (e) {}
  }

  /* ---------- Derived ---------- */
  function count() { return state.items.reduce((s, i) => s + i.qty, 0); }
  function subtotal() { return state.items.reduce((s, i) => s + i.price * i.qty, 0); }
  const total = subtotal;

  /* ---------- Mutations ---------- */
  function find(id) { return state.items.find((i) => i.id === id); }

  function add(id) {
    const course = COURSES.find((c) => c.id === id);
    if (!course) return;
    const existing = find(id);
    if (existing) {
      existing.qty += 1;
    } else {
      state.items.push({
        id: course.id, title: course.title, price: course.price,
        level: course.level, art: course.art, accent: course.accent, qty: 1
      });
    }
    state.view = 'cart';
    save(); render();
    open();
    pulse(id);
  }

  function inc(id) { const it = find(id); if (it) { it.qty += 1; save(); render(); } }
  function dec(id) {
    const it = find(id);
    if (!it) return;
    it.qty -= 1;
    if (it.qty <= 0) state.items = state.items.filter((i) => i.id !== id);
    save(); render();
  }
  function removeItem(id) {
    state.items = state.items.filter((i) => i.id !== id);
    save(); render();
  }
  function clear() { state.items = []; state.view = 'cart'; save(); render(); }

  /* ---------- Open / close ---------- */
  function open() {
    // if reopening after a completed order, return to the cart view
    if (state.view === 'success') state.view = 'cart';
    state.isOpen = true; syncShell(); render();
  }
  function close() { state.isOpen = false; syncShell(); }
  function toggle() { state.isOpen = !state.isOpen; syncShell(); }

  /* ---------- View transitions ---------- */
  function showCheckout() {
    if (!state.items.length) return;
    if (global.AESAuth && !global.AESAuth.getUser()) {
      state.pendingCheckout = true;
      global.AESAuth.open('Войдите, чтобы завершить покупку');
      return;
    }
    state.view = 'checkout'; render();
  }
  function showCart() { state.view = 'cart'; render(); }
  function placeOrder(form) {
    const name = (form.name || '').trim();
    const email = (form.email || '').trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk) {
      const err = $('#aes-checkout-error');
      if (err) {
        err.textContent = 'Введите имя и корректный email.';
        err.classList.remove('opacity-0');
      }
      return;
    }
    const amount = total();
    const orderId = 'AES-' + Math.random().toString(36).slice(2, 7).toUpperCase();
    const courses = state.items.map((i) => i.title + ' ×' + i.qty).join(', ');
    const comment = 'Lingua: ' + courses + ' (' + name + ', ' + email + ')';

    state.lastOrderId = orderId;
    state.lastTotal = amount;
    state.lastEmail = email;
    state.lastName = name;

    var courseIds = state.items.map(function(i) { return i.id; });

    if (global.AESPayment && global.AESPayment.isConfigured) {
      global.AESPayment.savePending(email, courseIds, orderId);
      global.AESPayment.redirectToPayment(amount, orderId, comment);
      state.view = 'processing';
      render();
      return;
    }

    // Оплата не настроена — сохраняем покупку и показываем успех
    if (global.AESPayment) {
      global.AESPayment.addPurchase(email, courseIds, orderId);
    }
    state.items = [];
    state.view = 'success';
    save();
    render();
  }

  /* ---------- Panel markup ---------- */
  function artwork(art) {
    const [a, b] = art || ['#E5DAF0', '#CDBCE6'];
    return `<span class="aes-thumb" style="background:linear-gradient(135deg, ${a}, ${b});"></span>`;
  }

  function panelHTML() {
    return `
      <div id="aes-cart-overlay" class="aes-overlay" aria-hidden="true"></div>
      <aside id="aes-cart-panel" class="aes-panel" role="dialog" aria-modal="true" aria-label="Корзина">
        <header class="aes-panel-head">
          <div>
            <h2 class="font-display text-2xl text-ink" id="aes-panel-title">Ваша корзина</h2>
            <p class="text-sm text-ink/55" id="aes-panel-sub">Просмотрите выбранные курсы.</p>
          </div>
          <button class="aes-icon-btn" data-cart-close aria-label="Закрыть корзину">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </header>
        <div class="aes-panel-body" id="aes-panel-body"></div>
        <footer class="aes-panel-foot" id="aes-panel-foot"></footer>
      </aside>`;
  }

  function bodyHTML() {
    if (state.view === 'success') return successHTML();
    if (state.view === 'processing') return processingHTML();
    if (state.view === 'checkout') return checkoutHTML();
    return cartListHTML();
  }

  function processingHTML() {
    return `
      <div class="aes-empty">
        <div class="aes-success-blob" style="animation:spin 1.5s linear infinite;">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
        </div>
        <p class="font-display text-xl text-ink mt-6">Переход к оплате...</p>
        <p class="text-sm text-ink/55 mt-1">Откроется страница Robokassa в новой вкладке.</p>
        <button class="aes-btn aes-btn-ghost mt-6" data-view="cart">← Назад в корзину</button>
      </div>`;
  }

  function cartListHTML() {
    if (!state.items.length) {
      return `
        <div class="aes-empty">
          <div class="aes-empty-blob"></div>
          <p class="font-display text-xl text-ink mt-6">Ваша корзина пуста</p>
          <p class="text-sm text-ink/55 mt-1">Добавьте курс, и разговор начнётся.</p>
          <a href="courses.html" class="aes-btn aes-btn-primary mt-6" data-cart-close>Смотреть курсы</a>
        </div>`;
    }
    const rows = state.items.map((it) => `
      <article class="aes-line" data-id="${it.id}">
        ${artwork(it.art)}
        <div class="aes-line-main">
          <h3 class="font-medium text-ink leading-snug">${it.title}</h3>
          <p class="text-xs text-ink/50">${it.level}</p>
          <div class="aes-qty">
            <button class="aes-qty-btn" data-dec data-id="${it.id}" aria-label="Уменьшить">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>
            </button>
            <span class="aes-qty-val">${it.qty}</span>
            <button class="aes-qty-btn" data-inc data-id="${it.id}" aria-label="Увеличить">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </div>
        </div>
        <div class="aes-line-right">
          <button class="aes-remove" data-remove data-id="${it.id}" aria-label="Убрать">Убрать</button>
          <span class="aes-line-price">${money(it.price * it.qty)}</span>
        </div>
      </article>`).join('');

    return `<div class="aes-lines">${rows}</div>`;
  }

  function footHTML() {
    if (state.view === 'success') {
      return `<button class="aes-btn aes-btn-primary w-full" data-cart-close>Вернуться к обучению</button>`;
    }
    if (state.view === 'checkout') {
      const isPay = global.AESPayment && global.AESPayment.isConfigured;
      return `
        <div class="aes-total-row">
          <span class="text-ink/60">Итого</span>
          <span class="font-display text-2xl text-ink">${money(total())}</span>
        </div>
        <div class="aes-foot-actions">
          <button class="aes-btn aes-btn-ghost" data-view="cart">Назад</button>
          <button class="aes-btn aes-btn-primary flex-1" data-place-order>${isPay ? 'Оплатить' : 'Оформить заказ'}</button>
        </div>
        ${!isPay ? '<p class="text-xs text-ink/45 mt-2 text-center">Оплата через Robokassa. Откройте payment.js для настройки.</p>' : ''}`;
    }
    if (!state.items.length) return '';
    return `
      <div class="aes-total-row">
        <span class="text-ink/60">Сумма</span>
        <span class="font-display text-2xl text-ink">${money(subtotal())}</span>
      </div>
      <p class="text-xs text-ink/45 mb-3">Налоги рассчитываются при оплате. Безопасная оплата.</p>
      <button class="aes-btn aes-btn-primary w-full" data-view="checkout">Перейти к оплате</button>`;
  }

  function checkoutHTML() {
    const isPayConfigured = global.AESPayment && global.AESPayment.isConfigured;
    return `
      <form class="aes-form" id="aes-checkout-form" novalidate>
        <label class="aes-field">
          <span>Полное имя</span>
          <input type="text" name="name" autocomplete="name" placeholder="Иван Иванов" required>
        </label>
        <label class="aes-field">
          <span>Email</span>
          <input type="email" name="email" autocomplete="email" placeholder="ivan@example.com" required>
        </label>
        <p id="aes-checkout-error" class="aes-error opacity-0" role="alert"></p>
        <div class="aes-order-summary">
          ${state.items.map((it) => `
            <div class="aes-summary-row">
              <span>${it.title} <span class="text-ink/40">\u00d7 ${it.qty}</span></span>
              <span>${money(it.price * it.qty)}</span>
            </div>`).join('')}
        </div>
      </form>`;
  }

  function successHTML() {
    return `
      <div class="aes-success">
        <div class="aes-success-blob">
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h2 class="font-display text-2xl text-ink mt-6">Всё готово!</h2>
        <p class="text-sm text-ink/60 mt-2">Заказ <strong class="text-ink">${state.lastOrderId || 'AES-00000'}</strong> подтверждён.</p>
        <p class="text-sm text-ink/60 mt-1">Чек отправлен на почту. Ваш репетитор разогревается.</p>
        <p class="font-display text-xl text-ink mt-6">Оплачено</p>
        <p class="font-display text-3xl text-ink">${money(state.lastTotal || 0)}</p>
      </div>`;
  }

  /* ---------- Render ---------- */
  function syncShell() {
    const panel = $('#aes-cart-panel');
    const overlay = $('#aes-cart-overlay');
    if (panel) panel.classList.toggle('is-open', state.isOpen);
    if (overlay) overlay.classList.toggle('is-open', state.isOpen);
    document.body.classList.toggle('aes-locked', state.isOpen);
  }

  function render() {
    // badge
    $$('.aes-cart-count').forEach((b) => {
      b.textContent = String(count());
      b.classList.toggle('is-empty', count() === 0);
    });

    // title + sub
    const title = $('#aes-panel-title');
    const sub = $('#aes-panel-sub');
    if (state.view === 'checkout') { if (title) title.textContent = 'Оформление заказа'; if (sub) sub.textContent = 'Почти готово — подтвердите данные.'; }
    else if (state.view === 'processing') { if (title) title.textContent = 'Оплата'; if (sub) sub.textContent = 'Переход к Robokassa...'; }
    else if (state.view === 'success') { if (title) title.textContent = 'Заказ завершён'; if (sub) sub.textContent = 'Спасибо, что учитесь с нами.'; }
    else { if (title) title.textContent = 'Ваша корзина'; if (sub) sub.textContent = 'Просмотрите выбранные курсы.'; }

    const body = $('#aes-panel-body');
    if (body) body.innerHTML = bodyHTML();
    const foot = $('#aes-panel-foot');
    if (foot) foot.innerHTML = footHTML();
  }

  /* ---------- Add-to-cart pulse animation ---------- */
  function pulse(id) {
    const el = document.querySelector(`[data-buy="${id}"]`);
    if (!el) return;
    el.classList.add('is-pulsing');
    setTimeout(() => el.classList.remove('is-pulsing'), 700);
  }

  /* ---------- Card number formatting ---------- */
  function formatCard(value) {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(.{4})/g, '$1 ').trim();
  }

  /* ---------- Event wiring ---------- */
  function wire() {
    const root = $('#cart-root');
    if (!root) return;

    document.addEventListener('click', (e) => {
      // open
      if (e.target.closest('[data-cart-open]')) { e.preventDefault(); open(); return; }
      // close
      if (e.target.closest('[data-cart-close]')) { e.preventDefault(); close(); return; }
      if (e.target.id === 'aes-cart-overlay') { close(); return; }

      // buy
      const buy = e.target.closest('[data-buy]');
      if (buy) { e.preventDefault(); add(buy.getAttribute('data-buy')); return; }

      // qty
      const incBtn = e.target.closest('[data-inc]');
      if (incBtn) { inc(incBtn.getAttribute('data-id')); return; }
      const decBtn = e.target.closest('[data-dec]');
      if (decBtn) { dec(decBtn.getAttribute('data-id')); return; }
      const rm = e.target.closest('[data-remove]');
      if (rm) { removeItem(rm.getAttribute('data-id')); return; }

      // view switches
      const view = e.target.closest('[data-view]');
      if (view) {
        const v = view.getAttribute('data-view');
        if (v === 'checkout') showCheckout();
        else if (v === 'cart') showCart();
        return;
      }

      // place order
      const place = e.target.closest('[data-place-order]');
      if (place) {
        const form = $('#aes-checkout-form');
        if (form) {
          const fd = {};
          new FormData(form).forEach((val, key) => { fd[key] = val; });
          placeOrder(fd);
        }
        return;
      }
    });

    // card formatting
    document.addEventListener('input', (e) => {
      const t = e.target;
      if (t && t.name === 'card') t.value = formatCard(t.value);
      if (t && t.name === 'exp') {
        let v = t.value.replace(/\D/g, '').slice(0, 4);
        if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
        t.value = v;
      }
    });

    // escape to close
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && state.isOpen) close(); });

    // after successful auth, continue to checkout if it was pending
    global.addEventListener('aes:auth-success', () => {
      if (state.pendingCheckout) {
        state.pendingCheckout = false;
        state.view = 'checkout';
        render();
      }
    });
  }

  /* ---------- Init ---------- */
  function init() {
    const root = $('#cart-root');
    if (!root) return;
    root.innerHTML = panelHTML();
    load();
    wire();

    // Handle return from Robokassa
    if (global.AESPayment && global.AESPayment.handlePaymentReturn) {
      var status = global.AESPayment.handlePaymentReturn();
      if (status === 'success') {
        var pending = global.AESPayment.getPending();
        if (pending && pending.email) {
          state.lastEmail = pending.email;
          state.lastOrderId = pending.orderId || '';
        }
        state.items = [];
        state.view = 'success';
        save();
        global.AESPayment.clearPaymentUrl();
        open();
        render();
        return;
      }
      if (status === 'fail') {
        global.AESPayment.clearPaymentUrl();
      }
    }

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.AESCart = { add, removeItem, inc, dec, clear, open, close, toggle, count, total };
})(window);
