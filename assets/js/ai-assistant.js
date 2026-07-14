(function (global) {
  'use strict';

  var CSS = [
    '.aes-ai-bot {',
    '  position: fixed; bottom: 20px; right: 20px; z-index: 9999;',
    '  width: 60px; height: 60px; border-radius: 50%;',
    '  background: linear-gradient(135deg, #FF6B35, #F7931E);',
    '  cursor: pointer; display: flex; align-items: center; justify-content: center;',
    '  box-shadow: 0 4px 20px rgba(255,107,53,.4); transition: transform .3s;',
    '  animation: aes-bot-float 3s ease-in-out infinite;',
    '}',
    '.aes-ai-bot:hover { transform: scale(1.1); }',
    '@keyframes aes-bot-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }',
    '.aes-ai-bot-eyes { display: flex; gap: 8px; }',
    '.aes-ai-bot-eye { width: 12px; height: 12px; background: white; border-radius: 50%; position: relative; }',
    '.aes-ai-bot-eye::after { content: ""; position: absolute; width: 5px; height: 5px; background: #333; border-radius: 50%; top: 3px; left: 3px; }',
    '.aes-ai-bot-bubble {',
    '  position: fixed; bottom: 90px; right: 20px; z-index: 9999;',
    '  background: white; padding: 10px 16px; border-radius: 12px 12px 0 12px;',
    '  box-shadow: 0 4px 20px rgba(0,0,0,.15); font-size: 13px; color: #333;',
    '  max-width: 200px; opacity: 0; transition: opacity .3s; pointer-events: none;',
    '}',
    '.aes-ai-bot-bubble.is-show { opacity: 1; }',
    '.aes-ai-chat {',
    '  position: fixed; bottom: 90px; right: 20px; z-index: 9999;',
    '  width: 340px; height: 440px; background: white; border-radius: 16px;',
    '  box-shadow: 0 8px 32px rgba(0,0,0,.2); display: none; flex-direction: column;',
    '  overflow: hidden;',
    '}',
    '.aes-ai-chat.is-open { display: flex; }',
    '.aes-ai-chat-header {',
    '  background: linear-gradient(135deg, #FF6B35, #F7931E); color: white;',
    '  padding: 14px 16px; display: flex; justify-content: space-between; align-items: center;',
    '  font-weight: 600;',
    '}',
    '.aes-ai-chat-close { background: none; border: none; color: white; font-size: 20px; cursor: pointer; }',
    '.aes-ai-chat-body { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 8px; }',
    '.aes-ai-msg { max-width: 80%; padding: 8px 12px; border-radius: 12px; font-size: 13px; line-height: 1.4; }',
    '.aes-ai-msg-bot { background: #FFF3E0; color: #333; align-self: flex-start; }',
    '.aes-ai-msg-user { background: #FF6B35; color: white; align-self: flex-end; }',
    '.aes-ai-chat-input-row { display: flex; padding: 10px; gap: 8px; border-top: 1px solid #eee; }',
    '.aes-ai-chat-input { flex: 1; border: 1px solid #ddd; border-radius: 8px; padding: 8px 12px; font-size: 13px; }',
    '.aes-ai-chat-send { background: #FF6B35; color: white; border: none; border-radius: 8px; padding: 8px 14px; cursor: pointer; font-weight: 600; }'
  ].join('\n');

  function injectCSS() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.setAttribute('data-aes-ai-assistant', 'true');
    if (style.styleSheet) {
      style.styleSheet.cssText = CSS;
    } else {
      style.appendChild(document.createTextNode(CSS));
    }
    document.head.appendChild(style);
  }

  function createBot() {
    var bot = document.createElement('div');
    bot.className = 'aes-ai-bot';
    bot.setAttribute('role', 'button');
    bot.setAttribute('aria-label', 'Open AI assistant');

    var eyes = document.createElement('div');
    eyes.className = 'aes-ai-bot-eyes';

    var eyeLeft = document.createElement('div');
    eyeLeft.className = 'aes-ai-bot-eye';
    var eyeRight = document.createElement('div');
    eyeRight.className = 'aes-ai-bot-eye';

    eyes.appendChild(eyeLeft);
    eyes.appendChild(eyeRight);
    bot.appendChild(eyes);

    return bot;
  }

  function createBubble() {
    var bubble = document.createElement('div');
    bubble.className = 'aes-ai-bot-bubble';
    bubble.textContent = 'Нажми, чтобы спросить ИИ';
    return bubble;
  }

  function createChat() {
    var chat = document.createElement('div');
    chat.className = 'aes-ai-chat';

    var header = document.createElement('div');
    header.className = 'aes-ai-chat-header';

    var title = document.createElement('span');
    title.textContent = 'ИИ-ассистент';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'aes-ai-chat-close';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Close chat');
    closeBtn.textContent = 'x';

    header.appendChild(title);
    header.appendChild(closeBtn);

    var body = document.createElement('div');
    body.className = 'aes-ai-chat-body';

    var inputRow = document.createElement('div');
    inputRow.className = 'aes-ai-chat-input-row';

    var input = document.createElement('input');
    input.className = 'aes-ai-chat-input';
    input.type = 'text';
    input.placeholder = 'Введите вопрос...';

    var sendBtn = document.createElement('button');
    sendBtn.className = 'aes-ai-chat-send';
    sendBtn.type = 'button';
    sendBtn.textContent = 'Отправить';

    inputRow.appendChild(input);
    inputRow.appendChild(sendBtn);

    chat.appendChild(header);
    chat.appendChild(body);
    chat.appendChild(inputRow);

    return { chat: chat, body: body, input: input, sendBtn: sendBtn, closeBtn: closeBtn };
  }

  function getBotResponse(text) {
    var lower = text.toLowerCase();
    if (lower.indexOf('привет') !== -1 || lower.indexOf('hi') !== -1 || lower.indexOf('hello') !== -1) {
      return 'Привет! Я ИИ-ассистент Lingua. Чем могу помочь?';
    }
    if (lower.indexOf('курс') !== -1 || lower.indexOf('course') !== -1) {
      return 'У нас есть курсы по 4 языкам: английский, французский, немецкий, испанский. Каждый курс включает 6 уроков с теорией, видео, тестами и домашкой. Загляните на страницу курсов!';
    }
    if (lower.indexOf('цена') !== -1 || lower.indexOf('стоимость') !== -1 || lower.indexOf('price') !== -1) {
      return 'Бесплатный курс — 0 рублей. Платные курсы от 750 до 4000 рублей. После регистрации вам доступен бесплатный курс.';
    }
    if (lower.indexOf('язык') !== -1 || lower.indexOf('language') !== -1) {
      return 'Доступны 4 языка: английский, французский, немецкий и испанский. Выберите нужный на главной странице!';
    }
    if (lower.indexOf('помощь') !== -1 || lower.indexOf('help') !== -1) {
      return 'Я могу ответить на вопросы о курсах, языках, ценах и обучении. Просто спросите!';
    }
    return 'Интересный вопрос! Попробуйте задать его на странице курса или загляните в раздел FAQ на главной странице.';
  }

  function addMessage(body, text, sender) {
    var msg = document.createElement('div');
    msg.className = 'aes-ai-msg ' + (sender === 'user' ? 'aes-ai-msg-user' : 'aes-ai-msg-bot');
    msg.textContent = text;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
  }

  function init() {
    injectCSS();

    var bot = createBot();
    var bubble = createBubble();
    var chatParts = createChat();
    var chat = chatParts.chat;
    var body = chatParts.body;
    var input = chatParts.input;
    var sendBtn = chatParts.sendBtn;
    var closeBtn = chatParts.closeBtn;

    var welcomed = false;
    var bubbleInterval = null;

    function showBubble() {
      bubble.classList.add('is-show');
    }

    function hideBubble() {
      bubble.classList.remove('is-show');
    }

    function startBubbleCycle() {
      setTimeout(function () {
        showBubble();
        setTimeout(hideBubble, 5000);
      }, 3000);

      bubbleInterval = setInterval(function () {
        showBubble();
        setTimeout(hideBubble, 5000);
      }, 30000);
    }

    function openChat() {
      chat.classList.add('is-open');
      hideBubble();
      if (!welcomed) {
        addMessage(body, 'Привет! Я ИИ-ассистент Lingua. Задайте вопрос о курсах, языках или обучении!', 'bot');
        welcomed = true;
      }
      input.focus();
    }

    function closeChat() {
      chat.classList.remove('is-open');
    }

    function toggleChat() {
      if (chat.classList.contains('is-open')) {
        closeChat();
      } else {
        openChat();
      }
    }

    function sendMessage() {
      var text = input.value.trim();
      if (!text) {
        return;
      }
      addMessage(body, text, 'user');
      input.value = '';

      setTimeout(function () {
        var response = getBotResponse(text);
        addMessage(body, response, 'bot');
      }, 500);
    }

    bot.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', closeChat);
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        sendMessage();
      }
    });

    document.body.appendChild(bubble);
    document.body.appendChild(bot);
    document.body.appendChild(chat);

    startBubbleCycle();

    global.AESAIAssistant = {
      open: openChat,
      close: closeChat,
      toggle: toggleChat,
      sendMessage: sendMessage,
      destroy: function () {
        if (bubbleInterval) {
          clearInterval(bubbleInterval);
          bubbleInterval = null;
        }
        bot.removeEventListener('click', toggleChat);
        closeBtn.removeEventListener('click', closeChat);
        sendBtn.removeEventListener('click', sendMessage);
        if (bot.parentNode) bot.parentNode.removeChild(bot);
        if (bubble.parentNode) bubble.parentNode.removeChild(bubble);
        if (chat.parentNode) chat.parentNode.removeChild(chat);
      }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
