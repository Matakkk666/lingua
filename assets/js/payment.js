/* ============================================================
   AES Payment — Оплата через Robokassa
   ============================================================
   Магазин (Merchant Login): lingua
   ⚠️  БЕЗОПАСНОСТЬ: сайт статический (GitHub Pages), поэтому
   подпись формируется в браузере, а Password#1 присутствует в коде.
   Это допустимо для запуска и модерации, но для постоянного приёма
   реальных платежей рекомендуется вынести генерацию подписи на
   бэкенд (см. SETUP-PAYMENT.md, раздел «Переход в продакшен»).
   ============================================================ */
const ROBOKASSA_MERCHANT = 'lingua';       // Merchant Login
const ROBOKASSA_PASS1 = 'Kokorev201103';   // Password #1
const ROBOKASSA_TEST = false;              // true — тестовый режим Robokassa

(function (global) {
  'use strict';

  const PURCHASES_KEY = 'aes_purchases';
  const PENDING_KEY = 'aes_pending_purchase';

  const isConfigured =
    !!ROBOKASSA_MERCHANT &&
    !!ROBOKASSA_PASS1 &&
    !ROBOKASSA_MERCHANT.startsWith('your-merchant') &&
    !ROBOKASSA_PASS1.startsWith('your-password');

  /* ---------- MD5 (для подписи Robokassa) ---------- */
  function md5(str) {
    function rl(n, c) { return (n << c) | (n >>> (32 - c)); }
    function au(x, y) {
      var l = (x & 0xFFFF) + (y & 0xFFFF);
      var m = (x >> 16) + (y >> 16) + (l >> 16);
      return (m << 16) | (l & 0xFFFF);
    }
    function cmn(q, a, b, x, s, t) { return au(rl(au(au(a, q), au(x, t)), s), b); }
    function ff(a, b, c, d, x, s, t) { return cmn((b & c) | (~b & d), a, b, x, s, t); }
    function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & ~d), a, b, x, s, t); }
    function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
    function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | ~d), a, b, x, s, t); }
    function sb(s) {
      var n = ((s.length + 8) >> 6) + 1, blks = new Array(n * 16), i;
      for (i = 0; i < n * 16; i++) blks[i] = 0;
      for (i = 0; i < s.length; i++) blks[i >> 2] |= s.charCodeAt(i) << ((i % 4) * 8);
      blks[i >> 2] |= 0x80 << ((i % 4) * 8);
      blks[n * 16 - 2] = s.length * 8;
      return blks;
    }
    function h2(n) {
      var s = '', j;
      for (j = 0; j < 4; j++) s += ((n >> (j * 8 + 4)) & 0x0F).toString(16) + ((n >> (j * 8)) & 0x0F).toString(16);
      return s;
    }
    var utf8 = unescape(encodeURIComponent(str));
    var x = sb(utf8);
    var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var oa = a, ob = b, oc = c, od = d;
      a = ff(a, b, c, d, x[i], 7, -680876936); d = ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = ff(c, d, a, b, x[i + 2], 17, 606105819); b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = ff(a, b, c, d, x[i + 4], 7, -176418897); d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = ff(c, d, a, b, x[i + 6], 17, -1473231341); b = ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = ff(a, b, c, d, x[i + 8], 7, 1770035416); d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = ff(c, d, a, b, x[i + 10], 17, -42063); b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = ff(a, b, c, d, x[i + 12], 7, 1804603682); d = ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = ff(c, d, a, b, x[i + 14], 17, -1502002290); b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = gg(a, b, c, d, x[i + 1], 5, -165796510); d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = gg(c, d, a, b, x[i + 11], 14, 643717713); b = gg(b, c, d, a, x[i], 20, -373897302);
      a = gg(a, b, c, d, x[i + 5], 5, -701558691); d = gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = gg(c, d, a, b, x[i + 15], 14, -660478335); b = gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = gg(a, b, c, d, x[i + 9], 5, 568446438); d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = gg(c, d, a, b, x[i + 3], 14, -187363961); b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = gg(a, b, c, d, x[i + 13], 5, -1444681467); d = gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = gg(c, d, a, b, x[i + 7], 14, 1735328473); b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = hh(a, b, c, d, x[i + 5], 4, -378558); d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = hh(c, d, a, b, x[i + 11], 16, 1839030562); b = hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = hh(a, b, c, d, x[i + 1], 4, -1530992060); d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = hh(c, d, a, b, x[i + 7], 16, -155497632); b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = hh(a, b, c, d, x[i + 13], 4, 681279174); d = hh(d, a, b, c, x[i], 11, -358537222);
      c = hh(c, d, a, b, x[i + 3], 16, -722521979); b = hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = hh(a, b, c, d, x[i + 9], 4, -640364487); d = hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = hh(c, d, a, b, x[i + 15], 16, 530742520); b = hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = ii(a, b, c, d, x[i], 6, -198630844); d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = ii(c, d, a, b, x[i + 14], 15, -1416354905); b = ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = ii(a, b, c, d, x[i + 12], 6, 1700485571); d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = ii(c, d, a, b, x[i + 10], 15, -1051523); b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = ii(a, b, c, d, x[i + 8], 6, 1873313359); d = ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = ii(c, d, a, b, x[i + 6], 15, -1560198380); b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = ii(a, b, c, d, x[i + 4], 6, -145523070); d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = ii(c, d, a, b, x[i + 2], 15, 718787259); b = ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = au(a, oa); b = au(b, ob); c = au(c, oc); d = au(d, od);
    }
    return (h2(a) + h2(b) + h2(c) + h2(d));
  }

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
    var existing = purchases.find(function (p) { return p.email === email; });
    if (existing) {
      courseIds.forEach(function (cid) {
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

  /* ---------- Pending purchase (до редиректа на Robokassa) ---------- */
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

  /* ---------- Robokassa helpers ---------- */
  function formatSum(amount) {
    return (Math.round(Number(amount) * 100) / 100).toFixed(2);
  }

  // Robokassa требует числовой InvId (целое 0..2147483647)
  function makeInvId() {
    return (Math.floor(Date.now() / 1000) % 2000000000).toString();
  }

  /**
   * Создаёт URL для оплаты через Robokassa с корректной подписью.
   * Подпись: MD5(MerchantLogin:OutSum:InvId:Password1)
   */
  function createPaymentUrl(amount, invId, description) {
    const outSum = formatSum(amount);
    const inv = (invId != null ? invId : makeInvId()).toString();
    const signature = md5(ROBOKASSA_MERCHANT + ':' + outSum + ':' + inv + ':' + ROBOKASSA_PASS1).toUpperCase();
    const params = new URLSearchParams({
      MerchantLogin: ROBOKASSA_MERCHANT,
      OutSum: outSum,
      InvId: inv,
      Description: description || 'Оплата курса Lingua',
      SignatureValue: signature,
      Culture: 'ru',
      Encoding: 'utf-8',
      SuccessURL: global.location.origin + global.location.pathname + '?paid=success',
      FailURL: global.location.origin + global.location.pathname + '?paid=fail'
    });
    if (ROBOKASSA_TEST) params.set('IsTest', '1');
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
    const url = createPaymentUrl(amount, makeInvId(), description);
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
