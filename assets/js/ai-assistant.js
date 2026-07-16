/* ============================================================
   AES AI Assistant — Smart version with API
   Uses Pollinations.ai free text API (no key required)
   ============================================================ */
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
    '  width: 360px; height: 480px; background: white; border-radius: 16px;',
    '  box-shadow: 0 8px 32px rgba(0,0,0,.2); display: none; flex-direction: column;',
    '  overflow: hidden;',
    '}',
    '.aes-ai-chat.is-open { display: flex; }',
    '.aes-ai-chat-header {',
    '  background: linear-gradient(135deg, #FF6B35, #F7931E); color: white;',
    '  padding: 14px 16px; display: flex; justify-content: space-between; align-items: center;',
    '  font-weight: 600; font-size: 14px;',
    '}',
    '.aes-ai-chat-close { background: none; border: none; color: white; font-size: 22px; cursor: pointer; padding: 0; line-height: 1; }',
    '.aes-ai-chat-body { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 8px; }',
    '.aes-ai-msg { max-width: 85%; padding: 10px 14px; border-radius: 14px; font-size: 13px; line-height: 1.5; }',
    '.aes-ai-msg-bot { background: #FFF3E0; color: #333; align-self: flex-start; border-bottom-left-radius: 4px; }',
    '.aes-ai-msg-user { background: #FF6B35; color: white; align-self: flex-end; border-bottom-right-radius: 4px; }',
    '.aes-ai-msg-typing { background: #FFF3E0; color: #999; align-self: flex-start; font-style: italic; }',
    '.aes-ai-chat-input-row { display: flex; padding: 10px; gap: 8px; border-top: 1px solid #eee; }',
    '.aes-ai-chat-input { flex: 1; border: 1px solid #ddd; border-radius: 8px; padding: 10px 14px; font-size: 13px; outline: none; }',
    '.aes-ai-chat-input:focus { border-color: #FF6B35; }',
    '.aes-ai-chat-send { background: #FF6B35; color: white; border: none; border-radius: 8px; padding: 10px 16px; cursor: pointer; font-weight: 600; font-size: 13px; }',
    '.aes-ai-chat-send:disabled { opacity: 0.5; cursor: not-allowed; }',
    '.aes-ai-suggestions { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 16px 8px; }',
    '.aes-ai-suggestion { background: #FFF3E0; color: #FF6B35; border: 1px solid #FFE0B2; border-radius: 999px; padding: 5px 12px; font-size: 12px; cursor: pointer; font-weight: 500; }',
    '.aes-ai-suggestion:hover { background: #FFE0B2; }'
  ].join('\n');

  function injectCSS() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.setAttribute('data-aes-ai-assistant', 'true');
    style.appendChild(document.createTextNode(CSS));
    document.head.appendChild(style);
  }

  function createBot() {
    var bot = document.createElement('div');
    bot.className = 'aes-ai-bot';
    bot.setAttribute('role', 'button');
    bot.setAttribute('aria-label', 'Open AI assistant');
    bot.title = '\u0418\u0418-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442';

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
    bubble.textContent = '\u041d\u0430\u0436\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0441\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0418\u0418';
    return bubble;
  }

  function createChat() {
    var chat = document.createElement('div');
    chat.className = 'aes-ai-chat';

    var header = document.createElement('div');
    header.className = 'aes-ai-chat-header';

    var title = document.createElement('span');
    title.textContent = '\u0418\u0418-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442 Lingua';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'aes-ai-chat-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close');

    header.appendChild(title);
    header.appendChild(closeBtn);

    var body = document.createElement('div');
    body.className = 'aes-ai-chat-body';

    var suggestions = document.createElement('div');
    suggestions.className = 'aes-ai-suggestions';

    var quickQuestions = [
      '\u041a\u0430\u043a\u0438\u0435 \u044f\u0437\u044b\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b?',
      '\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u043a\u0443\u0440\u0441?',
      '\u0427\u0442\u043e \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043a\u0443\u0440\u0441?'
    ];

    quickQuestions.forEach(function(q) {
      var btn = document.createElement('button');
      btn.className = 'aes-ai-suggestion';
      btn.textContent = q;
      suggestions.appendChild(btn);
    });

    var inputRow = document.createElement('div');
    inputRow.className = 'aes-ai-chat-input-row';

    var input = document.createElement('input');
    input.className = 'aes-ai-chat-input';
    input.type = 'text';
    input.placeholder = '\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441...';
    input.setAttribute('autocomplete', 'off');

    var sendBtn = document.createElement('button');
    sendBtn.className = 'aes-ai-chat-send';
    sendBtn.textContent = '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c';

    inputRow.appendChild(input);
    inputRow.appendChild(sendBtn);

    chat.appendChild(header);
    chat.appendChild(body);
    chat.appendChild(suggestions);
    chat.appendChild(inputRow);

    return { chat: chat, body: body, input: input, sendBtn: sendBtn, closeBtn: closeBtn, suggestions: suggestions };
  }

  function addMessage(body, text, type) {
    var msg = document.createElement('div');
    msg.className = 'aes-ai-msg aes-ai-msg-' + type;
    msg.textContent = text;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
    return msg;
  }

  function getApiUrl(prompt) {
    var systemPrompt = '\u0422\u044b - \u0418\u0418-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442 \u0448\u043a\u043e\u043b\u044b \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 Lingua. \u041e\u0442\u0432\u0435\u0447\u0430\u0439 \u043a\u0440\u0430\u0442\u043a\u043e \u0438 \u043f\u043e-\u0440\u0443\u0441\u0441\u043a\u0438. \u0428\u043a\u043e\u043b\u0430 \u0443\u0447\u0438\u0442 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c\u0443, \u0444\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u043e\u043c\u0443, \u043d\u0435\u043c\u0435\u0446\u043a\u043e\u043c\u0443 \u0438 \u0438\u0441\u043f\u0430\u043d\u0441\u043a\u043e\u043c\u0443. \u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 - 6 \u0443\u0440\u043e\u043a\u043e\u0432. \u041f\u043b\u0430\u0442\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b 750-4000 \u0440\u0443\u0431. \u0412 \u043a\u0430\u0436\u0434\u043e\u043c \u043a\u0443\u0440\u0441\u0435 6 \u0443\u0440\u043e\u043a\u043e\u0432: \u0442\u0435\u043e\u0440\u0438\u044f, \u0432\u0438\u0434\u0435\u043e, \u0442\u0435\u0441\u0442, \u0434\u043e\u043c\u0430\u0448\u043a\u0430. \u0417\u0430 \u0443\u0440\u043e\u043a\u0438 \u0434\u0430\u044e\u0442 50 \u043c\u043e\u043d\u0435\u0442, \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435 \u043d\u0430 \u043e\u0434\u0435\u0436\u0434\u0443 \u0434\u043b\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430. \u0415\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044c \u044f\u0437\u044b\u043a\u0430 \u0442\u0435\u043e\u0440\u0438\u0438 (\u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b/\u0440\u0443\u0441\u0441\u043a\u0438\u0439).';
    var fullPrompt = systemPrompt + '\n\n\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ' + prompt;
    return 'https://text.pollinations.ai/' + encodeURIComponent(fullPrompt) + '?model=openai&temperature=0.7';
  }

  function fetchAIResponse(prompt, callback) {
    var url = getApiUrl(prompt);
    var timeout = setTimeout(function() {
      callback('\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.');
    }, 12000);

    fetch(url)
      .then(function(r) { return r.text(); })
      .then(function(text) {
        clearTimeout(timeout);
        if (text && text.length > 0 && text.length < 500) {
          callback(text.trim());
        } else if (text && text.length >= 500) {
          callback(text.substring(0, 400).trim() + '...');
        } else {
          callback(getLocalResponse(prompt));
        }
      })
      .catch(function() {
        clearTimeout(timeout);
        callback(getLocalResponse(prompt));
      });
  }

  function getLocalResponse(text) {
    var t = text.toLowerCase();
    if (t.indexOf('\u043f\u0440\u0438\u0432\u0435\u0442') >= 0 || t.indexOf('hi') >= 0 || t.indexOf('hello') >= 0)
      return '\u041f\u0440\u0438\u0432\u0435\u0442! \u042f \u0418\u0418-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442 Lingua. \u0427\u0435\u043c \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?';
    if (t.indexOf('\u044f\u0437\u044b\u043a') >= 0)
      return '\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b 4 \u044f\u0437\u044b\u043a\u0430: \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439, \u0444\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439, \u043d\u0435\u043c\u0435\u0446\u043a\u0438\u0439 \u0438 \u0438\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439. \u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0435\u0441\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u0438 \u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b.';
    if (t.indexOf('\u0446\u0435\u043d') >= 0 || t.indexOf('\u0441\u0442\u043e\u0438\u043c') >= 0 || t.indexOf('price') >= 0)
      return '\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u2014 0 \u0440\u0443\u0431. \u041f\u043b\u0430\u0442\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b: 750-4000 \u0440\u0443\u0431. \u041f\u043e\u0441\u043b\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043a\u0443\u0440\u0441.';
    if (t.indexOf('\u043a\u0443\u0440\u0441') >= 0 || t.indexOf('course') >= 0)
      return '\u0423 \u043d\u0430\u0441 4 \u044f\u0437\u044b\u043a\u0430. \u041a\u0430\u0436\u0434\u044b\u0439 \u043a\u0443\u0440\u0441 \u2014 6 \u0443\u0440\u043e\u043a\u043e\u0432 \u0441 \u0442\u0435\u043e\u0440\u0438\u0435\u0439, \u0432\u0438\u0434\u0435\u043e, \u0442\u0435\u0441\u0442\u0430\u043c\u0438 \u0438 \u0434\u043e\u043c\u0430\u0448\u043a\u043e\u0439. \u0417\u0430\u0433\u043b\u044f\u043d\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043a\u0443\u0440\u0441\u043e\u0432!';
    if (t.indexOf('\u043f\u043e\u043c\u043e\u0449') >= 0 || t.indexOf('help') >= 0)
      return '\u042f \u043c\u043e\u0433\u0443 \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043e \u043a\u0443\u0440\u0441\u0430\u0445, \u044f\u0437\u044b\u043a\u0430\u0445, \u0446\u0435\u043d\u0430\u0445 \u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438. \u041f\u0440\u043e\u0441\u0442\u043e \u0441\u043f\u0440\u043e\u0441\u0438\u0442\u0435!';
    return '\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0439 \u0432\u043e\u043f\u0440\u043e\u0441! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u0442\u044c \u0435\u0433\u043e \u0438\u043d\u0430\u0447\u0435 \u0438\u043b\u0438 \u0437\u0430\u0433\u043b\u044f\u043d\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b FAQ \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435.';
  }

  function init() {
    if (document.querySelector('.aes-ai-bot')) return;

    injectCSS();

    var bot = createBot();
    var bubble = createBubble();
    var chatParts = createChat();
    var chat = chatParts.chat;
    var body = chatParts.body;
    var input = chatParts.input;
    var sendBtn = chatParts.sendBtn;
    var closeBtn = chatParts.closeBtn;
    var suggestions = chatParts.suggestions;

    var welcomed = false;
    var bubbleInterval = null;
    var isWaiting = false;

    function showBubble() { bubble.classList.add('is-show'); }
    function hideBubble() { bubble.classList.remove('is-show'); }

    function startBubbleCycle() {
      setTimeout(function() {
        showBubble();
        setTimeout(hideBubble, 5000);
      }, 3000);
      bubbleInterval = setInterval(function() {
        showBubble();
        setTimeout(hideBubble, 5000);
      }, 30000);
    }

    function openChat() {
      chat.classList.add('is-open');
      hideBubble();
      if (!welcomed) {
        addMessage(body, '\u041f\u0440\u0438\u0432\u0435\u0442! \u042f \u0418\u0418-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442 Lingua. \u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441 \u043e \u043a\u0443\u0440\u0441\u0430\u0445, \u044f\u0437\u044b\u043a\u0430\u0445 \u0438\u043b\u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438!', 'bot');
        welcomed = true;
      }
      input.focus();
    }

    function closeChat() { chat.classList.remove('is-open'); }

    function toggleChat() {
      if (chat.classList.contains('is-open')) closeChat();
      else openChat();
    }

    function sendMessage(text) {
      text = text || input.value.trim();
      if (!text || isWaiting) return;

      addMessage(body, text, 'user');
      input.value = '';
      isWaiting = true;
      sendBtn.disabled = true;

      var typingMsg = addMessage(body, '\u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442...', 'typing');

      fetchAIResponse(text, function(response) {
        if (typingMsg.parentNode) typingMsg.parentNode.removeChild(typingMsg);
        addMessage(body, response, 'bot');
        isWaiting = false;
        sendBtn.disabled = false;
        input.focus();
      });
    }

    bot.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', closeChat);
    sendBtn.addEventListener('click', function() { sendMessage(); });
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        sendMessage();
      }
    });

    suggestions.querySelectorAll('.aes-ai-suggestion').forEach(function(btn) {
      btn.addEventListener('click', function() {
        sendMessage(btn.textContent);
      });
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
      destroy: function() {
        if (bubbleInterval) { clearInterval(bubbleInterval); bubbleInterval = null; }
        bot.removeEventListener('click', toggleChat);
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
