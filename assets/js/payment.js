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

  const isConfigured =
    !ROBOKASSA_MERCHANT.startsWith('your-merchant') &&
    !ROBOKASSA_PASS1.startsWith('your-password');

  /**
   * Вычисляет подпись MD5 для Robokassa
   * Signature = MD5(MerchantLogin:OutSum:InvId:Password1:Shp_label)
   * ВАЖНО: MD5 нужен на сервере, но для демонстрации используем
   * упрощённый редирект без подписи (Robokassa примет, если включён
   * "Тестовый режим" и отключена проверка подписи в настройках магазина).
   *
   * Для продакшена — нужен бэкенд для генерации подписи.
   * См. SETUP-PAYMENT.md → раздел "Продакшен".
   */

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
      IncCurrLabel: 'BankCard',       // оплата картой
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
   * Проверяет, вернулся ли пользователь с успешной оплатой
   */
  function checkPaymentSuccess() {
    const params = new URLSearchParams(global.location.search);
    if (params.get('paid') === 'success') return 'success';
    if (params.get('paid') === 'fail') return 'fail';
    return null;
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
    clearPaymentUrl
  };
})(window);
