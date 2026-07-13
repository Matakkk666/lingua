/* ============================================================
   AES Assistant — Built-in AI English Tutor
   Rule-based conversational engine for the free course.
   Handles: role-play scenarios, grammar tips, vocabulary help,
   mistake detection, and free-form chat.
   ============================================================ */
(function (global) {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const SCENARIOS = {
    introductions: {
      name: 'Introductions',
      prompt: 'Hi there! I\u2019m Alex, your AI tutor. Let\u2019s practice introductions. Try saying hello and introducing yourself!',
      triggers: ['hello', 'hi', 'hey', 'my name', 'i am', "i'm", 'nice to meet'],
      responses: [
        'Nice to meet you! Where are you from?',
        'Great introduction! What do you do for a living?',
        'Lovely to meet you! How long have you been learning English?'
      ],
      tips: [
        'Tip: "Nice to meet you" is perfect for first meetings. For casual settings, "Good to meet you" works too.',
        'Tip: Remember to use "I\u2019m" (contraction) in spoken English \u2014 it sounds more natural than "I am".'
      ]
    },
    numbers: {
      name: 'Numbers & Time',
      prompt: 'Let\u2019s practice numbers and time! I\u2019ll be a shop assistant. Try asking me about prices or the time.',
      triggers: ['how much', 'price', 'time', 'clock', 'number', 'cost', 'dollars', 'euros'],
      responses: [
        'It\u2019s 3:30 \u2014 or "half past three". Can you say another time?',
        'That\u2019ll be 5 dollars. How would you ask for the total?',
        'Good question! The shop opens at 9 a.m. What time do you usually wake up?'
      ],
      tips: [
        'Tip: For times like 3:15 we say "a quarter past three". For 3:45 \u2014 "a quarter to four".',
        'Tip: "a.m." = morning, "p.m." = afternoon/evening. "12 p.m." is noon.'
      ]
    },
    cafe: {
      name: 'Ordering Food',
      prompt: 'Welcome to my caf\u00e9! I\u2019m your waiter today. What would you like to order?',
      triggers: ['coffee', 'tea', 'order', 'food', 'eat', 'drink', 'menu', 'bill', 'water', 'cake', 'sandwich', 'soup', 'salad'],
      responses: [
        'Great choice! Would you like anything to drink with that?',
        'Coming right up! Is that for here or to go?',
        'Excellent! Can I get you anything else?',
        'Sure thing! That\u2019ll be 4 dollars. How would you like to pay?'
      ],
      tips: [
        'Tip: "Can I have\u2026" and "I\u2019d like\u2026" are the most polite ways to order.',
        'Tip: In English-speaking countries, it\u2019s polite to say "please" when ordering.'
      ]
    },
    aboutyou: {
      name: 'About Yourself',
      prompt: 'I\u2019d love to get to know you! Tell me about yourself \u2014 your job, hobbies, or daily routine.',
      triggers: ['work', 'job', 'hobby', 'hobbies', 'free time', 'routine', 'morning', 'enjoy', 'like', 'student', 'study'],
      responses: [
        'That sounds interesting! What do you enjoy most about it?',
        'Tell me more about that. How long have you been doing it?',
        'Nice! What does a typical day look like for you?',
        'That\u2019s great! What do you like to do in your free time?'
      ],
      tips: [
        'Tip: Use present simple for routines: "I work", "I get up at 7".',
        'Tip: "I enjoy + -ing" \u2014 e.g., "I enjoy reading". Not "I enjoy to read".'
      ]
    },
    directions: {
      name: 'Directions',
      prompt: 'You\u2019re a tourist in my city. Ask me for directions to somewhere \u2014 a bank, a caf\u00e9, the station!',
      triggers: ['where', 'direction', 'left', 'right', 'station', 'bank', 'museum', 'street', 'map', 'how do i get', 'nearest'],
      responses: [
        'Sure! Go straight ahead and turn left at the second street. It\u2019s on the right.',
        'It\u2019s about 5 minutes on foot. Walk past the park and it\u2019s next to the bank.',
        'Good question! The nearest one is across from the museum. Can you repeat the directions back to me?'
      ],
      tips: [
        'Tip: "Excuse me" is the polite way to start when asking a stranger for directions.',
        'Tip: "Next to", "across from", "behind", "in front of" \u2014 key location words.'
      ]
    },
    smalltalk: {
      name: 'Small Talk',
      prompt: 'Let\u2019s make small talk! Comment on the weather, ask about my weekend, or just chat.',
      triggers: ['weather', 'weekend', 'fine', 'good', 'hot', 'cold', 'rain', 'sunny', 'plans', 'later', 'nice day', 'how are you'],
      responses: [
        'Oh yes, the weather\u2019s been lovely lately! Do you prefer warm or cool weather?',
        'My weekend was relaxing, thanks for asking! How about yours?',
        'Ha! That\u2019s a great way to put it. What are you up to this weekend?',
        'I appreciate you asking! It\u2019s always nice to chat. What shall we talk about next?'
      ],
      tips: [
        'Tip: "Have a good one!" is a friendly, casual way to say goodbye.',
        'Tip: "No worries" is a very common British/Australian phrase meaning "no problem".'
      ]
    }
  };

  /* ---------- Common grammar corrections ---------- */
  const CORRECTIONS = [
    { pattern: /\bi am agree\b/i, fix: 'I agree (not "I am agree")', tip: '"Agree" is a verb, not an adjective. Just say "I agree".' },
    { pattern: /\bi have (\d+) years\b/i, fix: 'I am X years old (not "I have X years")', tip: 'In English, we use "to be" for age: "I am 25 years old".' },
    { pattern: /\bmore better\b/i, fix: 'better (not "more better")', tip: '"Better" is already comparative \u2014 don\u2019t add "more".' },
    { pattern: /\bmore easy\b/i, fix: 'easier (not "more easy")', tip: 'Use "easier", not "more easy".' },
    { pattern: /\bi very like\b/i, fix: 'I really like / I like it a lot', tip: 'Don\u2019t put "very" before "like". Use "really like" or "like a lot".' },
    { pattern: /\bhow long you\b/i, fix: 'How long have you\u2026', tip: 'Use present perfect: "How long have you been learning English?"' },
    { pattern: /\bshe don't\b/i, fix: 'She doesn\u2019t', tip: 'For he/she/it, use "doesn\u2019t", not "don\u2019t".' },
    { pattern: /\bhe don't\b/i, fix: 'He doesn\u2019t', tip: 'For he/she/it, use "doesn\u2019t", not "don\u2019t".' },
    { pattern: /\bi has\b/i, fix: 'I have', tip: 'With "I", use "have", not "has".' },
    { pattern: /\bpeople is\b/i, fix: 'People are', tip: '"People" is plural \u2014 use "are", not "is".' },
    { pattern: /\bin the monday\b/i, fix: 'on Monday', tip: 'Use "on" with days: "on Monday", "on Friday".' },
    { pattern: /\bin monday\b/i, fix: 'on Monday', tip: 'Use "on" with days of the week.' }
  ];

  /* ---------- State ---------- */
  const state = {
    scenario: 'introductions',
    messages: [],
    responseIndex: 0,
    tipIndex: 0,
    typing: false
  };

  /* ---------- Core logic ---------- */
  function detectGrammarIssues(text) {
    const issues = [];
    for (const c of CORRECTIONS) {
      if (c.pattern.test(text)) {
        issues.push(c);
      }
    }
    return issues;
  }

  function pickResponse(scenario, userText) {
    const sc = SCENARIOS[scenario] || SCENARIOS.introductions;
    const lower = userText.toLowerCase();

    // check if user message matches scenario triggers
    const matched = sc.triggers.some((t) => lower.includes(t));

    let response;
    if (matched || state.responseIndex === 0) {
      response = sc.responses[state.responseIndex % sc.responses.length];
      state.responseIndex++;
    } else {
      // generic encouraging responses
      const generics = [
        'Good! Keep going \u2014 tell me more.',
        'I see! Can you say that in a full sentence?',
        'Nice work! Try adding more detail.',
        'Great! Let\u2019s continue the conversation.',
        'Well done! What would you say next?'
      ];
      response = generics[Math.floor(Math.random() * generics.length)];
    }

    // check for grammar issues
    const issues = detectGrammarIssues(userText);
    if (issues.length > 0) {
      const issue = issues[0];
      response += '\n\n' + issue.tip;
    }

    // occasionally add a tip
    if (state.messages.length > 0 && state.messages.length % 4 === 0) {
      const tip = sc.tips[state.tipIndex % sc.tips.length];
      state.tipIndex++;
      response += '\n\n' + tip;
    }

    return response;
  }

  function greet() {
    const sc = SCENARIOS[state.scenario] || SCENARIOS.introductions;
    return sc.prompt;
  }

  function setScenario(name) {
    if (!SCENARIOS[name]) return;
    state.scenario = name;
    state.responseIndex = 0;
    state.tipIndex = 0;
    state.messages = [];
    addMessage('bot', greet());
    render();
  }

  /* ---------- Message handling ---------- */
  function addMessage(role, text) {
    state.messages.push({ role, text, time: Date.now() });
  }

  function send(text) {
    if (!text.trim()) return;
    addMessage('user', text.trim());
    state.typing = true;
    render();

    setTimeout(() => {
      state.typing = false;
      const response = pickResponse(state.scenario, text);
      addMessage('bot', response);
      render();
      scrollChat();
    }, 700 + Math.random() * 600);
  }

  function scrollChat() {
    const body = $('#aes-chat-body');
    if (body) body.scrollTop = body.scrollHeight;
  }

  /* ---------- Rendering ---------- */
  function render() {
    const body = $('#aes-chat-body');
    if (!body) return;

    body.innerHTML = state.messages.map((m) => {
      if (m.role === 'user') {
        return `<div class="aes-chat-bubble aes-chat-user">${escapeHTML(m.text)}</div>`;
      }
      return `<div class="aes-chat-bubble aes-chat-bot">${formatMessage(m.text)}</div>`;
    }).join('');

    if (state.typing) {
      body.innerHTML += `<div class="aes-chat-bubble aes-chat-bot aes-chat-typing"><span></span><span></span><span></span></div>`;
    }

    scrollChat();
  }

  function formatMessage(text) {
    return escapeHTML(text).replace(/\n\n/g, '<br><br>');
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  /* ---------- Scenario picker ---------- */
  function scenarioButtons() {
    return Object.entries(SCENARIOS).map(([key, sc]) =>
      `<button class="aes-scenario-btn ${key === state.scenario ? 'is-active' : ''}" data-scenario="${key}">${sc.name}</button>`
    ).join('');
  }

  /* ---------- Wiring ---------- */
  function wire() {
    const root = $('#aes-assistant-root');
    if (!root) return;

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-scenario]');
      if (btn) {
        e.preventDefault();
        setScenario(btn.getAttribute('data-scenario'));
        // update active states
        $$('[data-scenario]').forEach((b) => b.classList.toggle('is-active', b === btn));
        return;
      }

      const sendBtn = e.target.closest('#aes-chat-send');
      if (sendBtn || e.target.id === 'aes-chat-input') {
        // only auto-send on Enter for input, or click for button
        if (sendBtn) {
          e.preventDefault();
          const input = $('#aes-chat-input');
          if (input && input.value.trim()) {
            send(input.value);
            input.value = '';
          }
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.target.id === 'aes-chat-input' && e.key === 'Enter') {
        e.preventDefault();
        const input = $('#aes-chat-input');
        if (input && input.value.trim()) {
          send(input.value);
          input.value = '';
        }
      }
    });
  }

  /* ---------- Init ---------- */
  function init() {
    const root = $('#aes-assistant-root');
    if (!root) return;

    // render scenario picker
    const picker = $('#aes-scenario-picker');
    if (picker) picker.innerHTML = scenarioButtons();

    // initial greeting
    addMessage('bot', greet());
    render();
    wire();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.AESAssistant = { send, setScenario, greet };
})(window);
