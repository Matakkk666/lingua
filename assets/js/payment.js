/* ============================================================
   AES Payment — Реальная оплата через Robokassa
   ============================================================
   ⚠️  НАСТРОЙКА:
   1. Зарегистрируйтесь на https://partner.robokassa.ru
   2. Получите Merchant Login и Password #1
   3. Вставьте их ниже
   4. Подробная инструкция: SETUP-PAYMENT.md
   ============================================================ */
const ROBOKASSA_MERCHANT = 'your-merchant-login'; // ← Замените на ваш Merchant Login
const ROBOKASSA_PASS1 = 'your-password-1';         // ← Замените на Password #1

(function (global) {
  'use strict';

  const PURCHASES_KEY = 'aes_purchases';
  const PENDING_KEY = 'aes_pending_purchase';

  const isConfigured =
    !ROBOKASSA_MERCHANT.startsWith('your-merchant') &&
    !ROBOKASSA_PASS1.startsWith('your-password');

  /* ---------- Purchase storage ---------- */
  function getPurchases() {
    try { return JSON.parse(localStorage.getItem(PURCHASES_KEY) || '[]'); }
    catch (e) { return []; }
  }

  function savePurchases(list) {
    try { localStorage.setItem(PURCHASES_KEY, JSON.stringify(list)); } catch (e) {}
  }

  function addPurchase(email, courseIds, orderId) {
    var purchases = getPurchases();
    var existing = purchases.find(function(p) { return p.email === email; });
    if (existing) {
      courseIds.forEach(function(cid) {
        if (existing.courseIds.indexOf(cid) < 0) existing.courseIds.push(cid);
      });
      existing.orderId = orderId || existing.orderId;
      existing.date = new Date().toISOString();
    } else {
      purchases.push({
        email: email,
        courseIds: courseIds.slice(),
        orderId: orderId || '',
        date: new Date().toISOString()
      });
    }
    savePurchases(purchases);
  }

  function hasAccess(email, courseId) {
    var purchases = getPurchases();
    for (var i = 0; i < purchases.length; i++) {
      if (purchases[i].email === email && purchases[i].courseIds.indexOf(courseId) >= 0) {
        return true;
      }
    }
    return false;
  }

  /* ---------- Pending purchase (stored before redirect to Robokassa) ---------- */
  function savePending(email, courseIds, orderId) {
    try {
      localStorage.setItem(PENDING_KEY, JSON.stringify({
        email: email,
        courseIds: courseIds,
        orderId: orderId
      }));
    } catch (e) {}
  }

  function getPending() {
    try { return JSON.parse(localStorage.getItem(PENDING_KEY) || 'null'); }
    catch (e) { return null; }
  }

  function clearPending() {
    try { localStorage.removeItem(PENDING_KEY); } catch (e) {}
  }

  /**
   * Создаёт URL для оплаты через Robokassa
   */
  function createPaymentUrl(amount, orderId, description) {
    const params = new URLSearchParams({
      MerchantLogin: ROBOKASSA_MERCHANT,
      OutSum: amount.toString(),
      InvId: orderId || '0',
      Description: description || 'Оплата курса Lingua',
      Culture: 'ru',
      Encoding: 'utf-8',
      IncCurrLabel: 'BankCard',
      SuccessURL: global.location.origin + global.location.pathname + '?paid=success',
      FailURL: global.location.origin + global.location.pathname + '?paid=fail'
    });

    return 'https://auth.robokassa.ru/Merchant/Index.aspx?' + params.toString();
  }

  /**
   * Открывает страницу оплаты Robokassa
   */
  function redirectToPayment(amount, orderId, description) {
    if (!isConfigured) {
      alert('Оплата не настроена. Откройте assets/js/payment.js и укажите Merchant Login и Password #1. Подробности в SETUP-PAYMENT.md');
      return false;
    }
    const url = createPaymentUrl(amount, orderId, description);
    global.open(url, '_blank');
    return true;
  }

  /**
   * Проверяет, вернулся ли пользователь с оплаты
   */
  function checkPaymentSuccess() {
    const params = new URLSearchParams(global.location.search);
    if (params.get('paid') === 'success') return 'success';
    if (params.get('paid') === 'fail') return 'fail';
    return null;
  }

  /**
   * Обрабатывает возврат с оплаты: сохраняет покупку, если есть pending
   */
  function handlePaymentReturn() {
    var status = checkPaymentSuccess();
    if (status !== 'success') return status;

    var pending = getPending();
    if (pending && pending.email && pending.courseIds && pending.courseIds.length) {
      addPurchase(pending.email, pending.courseIds, pending.orderId);
      clearPending();
    }
    return 'success';
  }

  /**
   * Очищает URL от параметров оплаты
   */
  function clearPaymentUrl() {
    if (global.location.search.includes('paid=')) {
      const url = global.location.origin + global.location.pathname;
      global.history.replaceState({}, document.title, url);
    }
  }

  global.AESPayment = {
    isConfigured,
    createPaymentUrl,
    redirectToPayment,
    checkPaymentSuccess,
    clearPaymentUrl,
    handlePaymentReturn,
    getPurchases,
    addPurchase,
    hasAccess,
    savePending,
    getPending,
    clearPending
  };
})(window);
