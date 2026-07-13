# Настройка оплаты через Robokassa

## Что нужно

1. Зарегистрироваться на **https://partner.robokassa.ru**
2. Получить **Merchant Login** и **Password #1**
3. Вставить их в `assets/js/payment.js`

---

## Шаг 1. Регистрация в Robokassa

1. Откройте **https://partner.robokassa.ru** → «Регистрация»
2. Выберите тип: **Физическое лицо**, **Самозанятый** или **ИП/ООО**
3. Заполните данные (email, телефон, паспорт/ИНН)
4. Подтвердите email и телефон
5. Дождитесь активации аккаунта (обычно 1-2 рабочих дня)

---

## Шаг 2. Создание магазина

1. В личном кабинете нажмите **«Мои магазины»** → **«Создать магазин»**
2. Заполните:
   - **Название магазина:** Lingua
   - **Адрес сайта:** ваш домен (или `http://localhost:8000` для тестов)
   - **Категория:** Образование / Обучение
   - **Описание:** Онлайн-школа английского языка
3. Нажмите **«Создать»**
4. После создания магазина вы получите:
   - **Merchant Login** (идентификатор магазина) — например `lingua_school`
   - **Password #1** — для формирования ссылки на оплату
   - **Password #2** — для проверки результата (на сервере)

---

## Шаг 3. Включение тестового режима

1. В настройках магазина включите **«Тестовый режим»**
2. В тестовом режиме можно проводить платежи без реального списания
3. Также включите **«Не проверять подпись в тестовом режиме»** — это позволит работать без бэкенда

---

## Шаг 4. Вставка ключей в код

1. Откройте файл **`assets/js/payment.js`**
2. Найдите строки:
```js
const ROBOKASSA_MERCHANT = 'your-merchant-login';
const ROBOKASSA_PASS1 = 'your-password-1';
```
3. Замените на ваши значения:
```js
const ROBOKASSA_MERCHANT = 'lingua_school';
const ROBOKASSA_PASS1 = 'AbCdEf123456';
```
4. Сохраните

---

## Шаг 5. Тестирование

1. Откройте **http://localhost:8000/courses.html**
2. Нажмите **«Купить курс»**
3. В корзине нажмите **«Перейти к оплате»**
4. Заполните имя и email
5. Нажмите **«Оплатить»**
6. Откроется страница Robokassa с указанной суммой
7. В тестовом режиме используйте тестовую карту:
   - Номер: **5555 5555 5555 5599**
   - Срок: **12/34**
   - CVV: **123**
8. После оплаты вы вернётесь на сайт

---

## Шаг 6. Переход в продакшен

Когда готовы принимать реальные платежи:

1. В настройках магазина в Robokassa **отключите «Тестовый режим»**
2. **Включите проверку подписи** (обязательно!)
3. Для проверки подписи нужен бэкенд — небольшой сервер, который генерирует MD5-подпись:

```
Signature = MD5(MerchantLogin:OutSum:InvId:Password1)
```

### Минимальный бэкенд (Node.js)

Создайте файл `server.js`:

```js
const crypto = require('crypto');
const http = require('http');

const MERCHANT = 'lingua_school';
const PASS1 = 'your-password-1';

http.createServer((req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const url = new URL(req.url, 'http://localhost:3001');
  if (url.pathname === '/get-signature') {
    const outSum = url.searchParams.get('OutSum') || '0';
    const invId = url.searchParams.get('InvId') || '0';
    const sig = crypto.createHash('md5')
      .update(`${MERCHANT}:${outSum}:${invId}:${PASS1}`)
      .digest('hex').toUpperCase();
    res.end(JSON.stringify({ signature: sig }));
  }
}).listen(3001);
```

Затем обновите `payment.js` — добавьте запрос подписи:

```js
async function getSignature(amount, orderId) {
  const r = await fetch(`http://localhost:3001/get-signature?OutSum=${amount}&InvId=${orderId}`);
  const data = await r.json();
  return data.signature;
}
```

---

## Комиссия

- Банковская карта: **~2%**
- СБП: **~1.5%**
- Минимальная сумма платежа: 10 ₽

## Безопасность

- **Password #1** не должен быть виден в коде фронтенда в продакшене
- В продакшене подпись генерируется на сервере (бэкенде)
- Карта плательщика обрабатывается на стороне Robokassa (PCI DSS)
- Ваш сайт не хранит данные карт

## Преимущества Robokassa

- Приём всех российских карт (МИР, Visa, Mastercard)
- СБП (Система быстрых платежей)
- Не нужен ИП/ООО — можно как самозанятый
- Простая интеграция для старта
