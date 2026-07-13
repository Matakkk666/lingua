/* ============================================================
   AES Auth — Email OTP authentication via Supabase
   ============================================================
   ⚠️  SETUP REQUIRED:
   Replace the two values below with your Supabase project's
   URL and anon key. Step-by-step guide: SETUP-AUTH.md
   ============================================================ */
const SUPABASE_URL = 'https://qqukzekczmasknsxsynv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxdWt6ZWtjem1hc2tuc3hzeW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4ODgxOTAsImV4cCI6MjA5OTQ2NDE5MH0.cOPtecp32zFI2cAqxLgNALeIg_uApCYdzg4rDJOJFiU';

(function (global) {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const isConfigured =
    typeof global.supabase !== 'undefined' &&
    SUPABASE_URL.startsWith('https://') &&
    !SUPABASE_URL.includes('YOUR-PROJECT') &&
    !SUPABASE_ANON_KEY.includes('YOUR-ANON');

  let client = null;
  if (isConfigured) {
    try { client = global.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); }
    catch (e) { console.warn('[AESAuth] Supabase init failed:', e); }
  }

  const state = {
    isOpen: false,
    step: 'email',     // 'email' | 'code' | 'success' | 'notconfigured'
    email: '',
    loading: false,
    error: '',
    user: null,
    message: ''        // custom heading shown in the email step
  };

  /* ---------- Modal shell ---------- */
  function modalHTML() {
    return `
      <div id="auth-overlay" class="aes-overlay" style="z-index:100"></div>
      <div id="auth-modal" class="aes-auth-modal"       role="dialog" aria-modal="true" aria-label="Вход">
        <button class="aes-auth-close" data-auth-close aria-label="Close">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
        <div id="auth-content"></div>
      </div>`;
  }

  /* ---------- Step renderers ---------- */
  function contentHTML() {
    if (!isConfigured) return notConfiguredHTML();
    if (state.step === 'success') return successHTML();
    if (state.step === 'code') return codeHTML();
    return emailHTML();
  }

  function emailHTML() {
    const heading = state.message || 'Добро пожаловать';
    const sub = state.message
      ? 'Введите email, и мы отправим вам код для входа.'
      : 'Введите email, и мы отправим вам код для входа.';
    return `
      <div class="aes-auth-step">
        <div class="aes-auth-icon aes-auth-icon-mail">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 7.5l9 6 9-6"/></svg>
        </div>
        <h2 class="font-display text-3xl text-ink mt-5">${heading}</h2>
        <p class="text-ink/60 mt-2 text-sm">${sub}</p>
        <form id="auth-email-form" class="aes-auth-form">
          <input type="email" id="auth-email-input" placeholder="you@example.com" class="aes-auth-input" required value="${escapeHTML(state.email)}">
          <button type="submit" class="aes-btn aes-btn-primary w-full" ${state.loading ? 'disabled' : ''}>
            ${state.loading ? '<span class="aes-spinner"></span> Отправка\u2026' : 'Отправить код'}
          </button>
        </form>
        ${state.error ? `<p class="aes-auth-error">${escapeHTML(state.error)}</p>` : ''}
      </div>`;
  }

  function codeHTML() {
    return `
      <div class="aes-auth-step">
        <div class="aes-auth-icon aes-auth-icon-key">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M10.8 12.2L20 3M16 7l3 3M14 9l2 2"/></svg>
        </div>
        <h2 class="font-display text-3xl text-ink mt-5">Check your inbox</h2>
        <p class="text-ink/60 mt-2 text-sm">Мы отправили 8-значный код на<br><strong class="text-ink">${escapeHTML(state.email)}</strong></p>
        <form id="auth-code-form" class="aes-auth-form">
          <input type="text" id="auth-code-input" placeholder="00000000" maxlength="8" inputmode="numeric" class="aes-auth-input aes-auth-code" required autocomplete="one-time-code">
          <button type="submit" class="aes-btn aes-btn-primary w-full" ${state.loading ? 'disabled' : ''}>
            ${state.loading ? '<span class="aes-spinner"></span> Проверка\u2026' : 'Проверить и войти'}
          </button>
        </form>
        <div class="aes-auth-links">
          <button type="button" data-auth-back>Сменить email</button>
          <button type="button" data-auth-resend ${state.loading ? 'disabled' : ''}>Отправить снова</button>
        </div>
        ${state.error ? `<p class="aes-auth-error">${escapeHTML(state.error)}</p>` : ''}
      </div>`;
  }

  function successHTML() {
    return `
      <div class="aes-auth-step aes-auth-success-step">
        <div class="aes-success-blob">
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h2 class="font-display text-3xl text-ink mt-5">Вы вошли!</h2>
        <p class="text-ink/60 mt-2 text-sm">Добро пожаловать в Lingua.</p>
      </div>`;
  }

  function notConfiguredHTML() {
    return `
      <div class="aes-auth-step">
        <div class="aes-auth-icon aes-auth-icon-warn">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 16H3z"/><path d="M12 10v4M12 17h.01"/></svg>
        </div>
        <h2 class="font-display text-2xl text-ink mt-5">Требуется настройка</h2>
        <p class="text-ink/60 mt-3 text-sm leading-relaxed">
          Supabase не настроен. Откройте <code class="aes-code">assets/js/auth.js</code> и замените два значения-заглушки на URL и anon-ключ вашего проекта.<br><br>
          Подробная инструкция в <code class="aes-code">SETUP-AUTH.md</code>.
        </p>
        <button class="aes-btn aes-btn-ghost w-full mt-5" data-auth-close>Понятно</button>
      </div>`;
  }

  /* ---------- Helpers ---------- */
  function escapeHTML(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  function friendlyError(e) {
    const raw = (e && (e.message || e.error || e.msg)) || String(e);
    const msg = (typeof raw === 'string') ? raw : JSON.stringify(raw);
    console.error('[AESAuth] Error details:', e);
    if (/rate.?limit|over.?request|too many/i.test(msg)) return 'Слишком много попыток. Подождите минуту и попробуйте снова.';
    if (/invalid.*otp|token.*expired|invalid.*token/i.test(msg)) return 'Код недействителен или истёк. Попробуйте снова или запросите новый.';
    if (/network|fetch|failed to fetch/i.test(msg)) return 'Ошибка сети. Проверьте подключение.';
    if (/email.*not.*allowed|forbidden/i.test(msg)) return 'Этот домен email не разрешён.';
    if (/redirect|origin|url/i.test(msg)) return 'Проблема с URL. Запустите сайт через локальный сервер (см. консоль).';
    if (/magic.?link.*email|sending.*email/i.test(msg)) return 'Supabase не может отправить письмо. На бесплатном тарифе лимит ~3 письма/час. Подождите час или настройте SMTP (см. SETUP-AUTH.md).';
    if (msg === '{}' || msg === '[object Object]') return 'Supabase вернул пустую ошибку. Откройте сайт через http://localhost — см. SETUP-AUTH.md.';
    return msg;
  }

  /* ---------- API calls ---------- */
  async function sendCode() {
    state.loading = true; state.error = ''; render();
    try {
      const { error } = await client.auth.signInWithOtp({
        email: state.email
      });
      if (error) throw error;
      state.step = 'code'; state.loading = false; render();
      focusInput('#auth-code-input');
    } catch (e) {
      state.loading = false; state.error = friendlyError(e); render();
      focusInput('#auth-email-input');
    }
  }

  async function verifyCode(code) {
    state.loading = true; state.error = ''; render();
    try {
      console.log('[AESAuth] Verifying code:', code, 'for email:', state.email);
      const { data, error } = await client.auth.verifyOtp({
        email: state.email,
        token: code,
        type: 'email'
      });
      console.log('[AESAuth] verifyOtp response:', { data, error });
      if (error) throw error;
      state.step = 'success'; state.loading = false; render();
      setTimeout(close, 1600);
    } catch (e) {
      console.error('[AESAuth] Verify error:', e);
      state.loading = false; state.error = friendlyError(e); render();
      focusInput('#auth-code-input');
    }
  }

  async function signOut() {
    if (client) { try { await client.auth.signOut(); } catch (e) {} }
    state.user = null;
    renderHeader();
  }

  /* ---------- UI control ---------- */
  function open(message) {
    state.isOpen = true;
    state.message = message || '';
    state.step = isConfigured ? 'email' : 'notconfigured';
    state.error = '';
    syncShell();
    render();
    focusInput('#auth-email-input');
  }

  function close() {
    state.isOpen = false;
    state.message = '';
    syncShell();
  }

  function syncShell() {
    const modal = $('#auth-modal');
    const overlay = $('#auth-overlay');
    if (modal) modal.classList.toggle('is-open', state.isOpen);
    if (overlay) overlay.classList.toggle('is-open', state.isOpen);
    document.body.classList.toggle('aes-locked', state.isOpen);
  }

  function render() {
    const content = $('#auth-content');
    if (content) content.innerHTML = contentHTML();
  }

  function focusInput(sel) {
    setTimeout(() => { const el = $(sel); if (el) el.focus(); }, 120);
  }

  function renderHeader() {
    $$('.js-auth-slot').forEach((slot) => {
      if (state.user) {
        const email = state.user.email || '';
        const name = (state.user.user_metadata && state.user.user_metadata.full_name) || email.split('@')[0];
        const initials = name.split(/[ .@]/).filter(Boolean).slice(0, 2).map((w) => (w[0] || '').toUpperCase()).join('') || 'U';
        slot.innerHTML = `
          <div class="aes-user-chip">
            <span class="aes-user-avatar">${escapeHTML(initials)}</span>
            <span class="aes-user-email">${escapeHTML(email)}</span>
          </div>
          <button class="aes-btn aes-btn-ghost aes-btn-sm" data-auth-signout>Sign out</button>`;
      } else {
        slot.innerHTML = `<button class="aes-btn aes-btn-ghost aes-btn-sm" data-auth-open>Войти</button>`;
      }
    });
  }

  /* ---------- Event wiring ---------- */
  function wire() {
    const root = $('#auth-root');
    if (!root) return;

    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-auth-open]')) { e.preventDefault(); open(); return; }
      if (e.target.closest('[data-auth-close]')) { e.preventDefault(); close(); return; }
      if (e.target.closest('[data-auth-signout]')) { e.preventDefault(); signOut(); return; }
      if (e.target.closest('[data-auth-back]')) {
        e.preventDefault();
        state.step = 'email'; state.error = ''; render();
        focusInput('#auth-email-input');
        const i = $('#auth-email-input'); if (i) i.select();
        return;
      }
      if (e.target.closest('[data-auth-resend]')) { e.preventDefault(); sendCode(); return; }
      if (e.target.id === 'auth-overlay') { close(); return; }
    });

    document.addEventListener('submit', (e) => {
      if (e.target.id === 'auth-email-form') {
        e.preventDefault();
        const input = $('#auth-email-input');
        if (input && input.value.trim()) {
          state.email = input.value.trim().toLowerCase();
          sendCode();
        }
      }
      if (e.target.id === 'auth-code-form') {
        e.preventDefault();
        const input = $('#auth-code-input');
        if (input && input.value.trim()) {
          verifyCode(input.value.trim());
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.isOpen) close();
    });

    // auth state listener
    if (client) {
      client.auth.onAuthStateChange((event, session) => {
        if (session && session.user) {
          state.user = session.user;
        } else if (event === 'SIGNED_OUT') {
          state.user = null;
        }
        renderHeader();
        if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
          global.dispatchEvent(new CustomEvent('aes:auth-success'));
        }
      });

      client.auth.getSession().then(({ data: { session } }) => {
        if (session && session.user) {
          state.user = session.user;
          renderHeader();
        }
      }).catch(() => {});
    } else {
      renderHeader();
    }
  }

  /* ---------- Init ---------- */
  function init() {
    const root = $('#auth-root');
    if (root) root.innerHTML = modalHTML();
    wire();
    renderHeader();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.AESAuth = {
    open,
    close,
    signOut,
    getUser: () => state.user,
    isConfigured: () => isConfigured
  };
})(window);
