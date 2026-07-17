/* ============================================================
   AES Course Viewer v2
   - Sidebar: levels → units → lessons with progress + theme toggle
   - Lesson: reading → video slides → quiz (5q from pool, shuffled)
   - Quiz: correct/incorrect animations, retry logic, coins
   - Coin system + dark/light theme (localStorage)
   ============================================================ */
(function (global) {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const urlParams = new URLSearchParams(global.location.search);
  const urlCourseId = urlParams.get('course');

  const PAID_COURSES = ((global.AESData || {}).PAID_COURSES) || [];
  const FREE_COURSE = ((global.AESData || {}).FREE_COURSE) || {};

  let fc;
  if (urlCourseId) {
    fc = PAID_COURSES.find(function(c) { return c.id === urlCourseId; }) || {};
  } else {
    fc = FREE_COURSE;
  }
  if (!fc.levels) return;

  const COURSE_ID = fc.id || 'default';
  const COIN_KEY = 'aes_coins';
  const PROGRESS_KEY = 'aes_course_progress_' + COURSE_ID;
  const ACTIVE_KEY = 'aes_course_active_' + COURSE_ID;
  const THEME_KEY = 'aes_theme';
  const COINS_PER_CORRECT = 10;

  /* ---------- Flatten lessons ---------- */
  const allLessons = [];
  fc.levels.forEach((level) => {
    level.units.forEach((unit) => {
      unit.lessons.forEach((lesson) => {
        allLessons.push({ ...lesson, levelId: level.id, levelTitle: level.title, unitId: unit.id, unitTitle: unit.title });
      });
    });
  });

  /* ---------- State ---------- */
  const state = {
    activeLessonId: allLessons[0] ? allLessons[0].id : null,
    completed: loadProgress(),
    coins: loadCoins(),
    quiz: null
  };

  function loadProgress() { try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '[]'); } catch(e) { return []; } }
  function saveProgress() { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(state.completed)); } catch(e) {} }
  function loadCoins() { try { return parseInt(localStorage.getItem(COIN_KEY) || '0', 10); } catch(e) { return 0; } }
  function saveCoins() { try { localStorage.setItem(COIN_KEY, String(state.coins)); } catch(e) {} }

  const savedActive = (() => { try { return localStorage.getItem(ACTIVE_KEY); } catch(e) { return null; } })();
  if (savedActive && allLessons.find((l) => l.id === savedActive)) state.activeLessonId = savedActive;
  function saveActive() { try { localStorage.setItem(ACTIVE_KEY, state.activeLessonId); } catch(e) {} }

  /* ---------- Helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function lessonNum(id) { const i = allLessons.findIndex((l) => l.id === id); return i >= 0 ? i + 1 : 0; }
  function isDone(id) { return state.completed.includes(id); }
  function shuffle(arr) { const a = arr.slice(); for (let i = a.length-1; i>0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

  /* ============================================================
     THEME
     ============================================================ */
  function loadTheme() { try { return localStorage.getItem(THEME_KEY) || 'light'; } catch(e) { return 'light'; } }
  function applyTheme(theme) {
    document.body.classList.toggle('aes-dark', theme === 'dark');
    const btn = $('#theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  function toggleTheme() {
    const current = document.body.classList.contains('aes-dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch(e) {}
  }

  /* ============================================================
     COINS
     ============================================================ */
  function addCoins(n) {
    state.coins += n;
    saveCoins();
    renderCoins();
    animateCoins(n);
  }
  function renderCoins() {
    $$('.aes-coin-balance').forEach((el) => { el.textContent = state.coins; });
  }
  function animateCoins(amount) {
    $$('.aes-coin-pop').forEach((el) => {
      el.textContent = '+' + amount;
      el.classList.remove('is-show');
      void el.offsetWidth;
      el.classList.add('is-show');
    });
  }

  /* ============================================================
     SIDEBAR
     ============================================================ */
  function renderSidebar() {
    const root = $('#course-sidebar');
    if (!root) return;

    const levelsHTML = fc.levels.map((level) => {
      const unitsHTML = level.units.map((unit) => {
        const lessonsHTML = unit.lessons.map((lesson) => {
          const done = isDone(lesson.id);
          const active = lesson.id === state.activeLessonId;
          return `
            <button class="aes-cw-lesson ${active?'is-active':''} ${done?'is-done':''}" data-lesson="${lesson.id}">
              <span class="aes-cw-check ${done?'is-checked':''}">${done?'<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>':''}</span>
              <span class="aes-cw-lesson-info">
                <span class="aes-cw-lesson-num">L${lessonNum(lesson.id)}</span>
                <span class="aes-cw-lesson-title">${esc(lesson.title)}</span>
              </span>
            </button>`;
        }).join('');
        const unitDone = unit.lessons.every((l) => isDone(l.id));
        return `
          <div class="aes-cw-unit ${unitDone?'is-done':''}">
            <div class="aes-cw-unit-head"><span class="aes-cw-unit-title">${esc(unit.title)}</span><span class="aes-cw-unit-badge">${unitDone?'Готово':unit.lessons.length+' lessons'}</span></div>
            <p class="aes-cw-unit-desc">${esc(unit.desc)}</p>
            <div class="aes-cw-lessons">${lessonsHTML}</div>
          </div>`;
      }).join('');
      return `
        <div class="aes-cw-level">
          <div class="aes-cw-level-head"><span class="aes-cw-level-tag">${level.id}</span><span class="aes-cw-level-title">${esc(level.title)}</span></div>
          ${unitsHTML}
        </div>`;
    }).join('');

    root.innerHTML = `
      <div class="aes-cw-sidebar-head">
        <div class="aes-cw-sidebar-top">
          <button id="theme-toggle" class="aes-cw-theme-btn" title="Toggle theme">🌙</button>
        </div>
        <div class="aes-cw-progress-wrap">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-semibold" style="color:var(--ink-soft)">Прогресс</span>
            <span style="color:var(--ink-soft)" id="course-progress-text">${state.completed.length} / ${allLessons.length} пройдено</span>
          </div>
          <div class="aes-cw-progress-track"><div class="aes-cw-progress-fill" id="course-progress-bar" style="width:${Math.round(state.completed.length/allLessons.length*100)}%"></div></div>
        </div>
      </div>
      <div class="aes-cw-levels">${levelsHTML}</div>`;

    const themeBtn = $('#theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    applyTheme(loadTheme());
  }

  /* ============================================================
     LESSON DETAIL
     ============================================================ */
  function renderLesson() {
    const root = $('#course-main');
    if (!root) return;
    const lesson = allLessons.find((l) => l.id === state.activeLessonId);
    if (!lesson) return;

    const num = lessonNum(lesson.id);
    const done = isDone(lesson.id);
    const idx = allLessons.findIndex((l) => l.id === state.activeLessonId);
    const hasPrev = idx > 0;
    const hasNext = idx < allLessons.length - 1;

    root.innerHTML = `
      <div class="aes-cw-lesson-detail">
        <div class="aes-cw-breadcrumb">
          <span>${esc(lesson.levelTitle)}</span><span class="aes-cw-sep">/</span>
          <span>${esc(lesson.unitTitle)}</span><span class="aes-cw-sep">/</span>
          <span>Lesson ${num}</span>
        </div>
        <h2 class="font-display text-3xl md:text-4xl text-ink mt-2">${esc(lesson.title)}</h2>

        <!-- Reading -->
        <div class="aes-cw-section">
          <div class="aes-cw-section-head">
            <span class="aes-cw-section-icon">📖</span>
            <h3>Чтение</h3>
          </div>
          <h4 class="aes-cw-reading-title">${esc(lesson.reading.title)}</h4>
          <div class="aes-cw-reading-text">${esc(lesson.reading.text)}</div>
          <div class="aes-cw-vocab">
            <h4 class="aes-cw-block-title">Ключевой словарь</h4>
            ${lesson.reading.vocab.map((v) => `<div class="aes-vocab-item"><span class="aes-vocab-word">${esc(v.word)}</span><span class="aes-vocab-trans">${esc(v.trans)}</span></div>`).join('')}
          </div>
        </div>

        <!-- Video -->
        <div class="aes-cw-section">
          <div class="aes-cw-section-head">
            <span class="aes-cw-section-icon">🎬</span>
            <h3>Видеоурок</h3>
          </div>
          <div class="aes-cw-video" id="video-player"></div>
        </div>

        <!-- Quiz -->
        <div class="aes-cw-section">
          <div class="aes-cw-section-head">
            <span class="aes-cw-section-icon">✏️</span>
            <h3>Тест</h3>
          </div>
          <div id="quiz-area"></div>
        </div>

        <!-- Footer nav -->
        <div class="aes-cw-lesson-foot">
          <button class="aes-btn aes-btn-ghost aes-btn-sm" data-lesson-prev ${!hasPrev?'disabled':''}>← Prev</button>
          <button class="aes-btn ${done?'aes-btn-ghost':'aes-btn-primary'} aes-btn-sm" data-lesson-toggle>${done?'Пройдено ✓':'Отметить пройденным'}</button>
          <button class="aes-btn aes-btn-primary aes-btn-sm" data-lesson-next ${!hasNext?'disabled':''}>Next →</button>
        </div>
      </div>`;

    renderVideo(lesson);
    renderQuizStart(lesson);
  }

  /* ============================================================
     VIDEO PLAYER
     ============================================================ */
  let videoTimer = null;
  let videoState = { slide: 0, playing: true };

  function renderVideo(lesson) {
    const root = $('#video-player');
    if (!root || !lesson.video) return;
    const slides = lesson.video.slides;
    videoState = { slide: 0, playing: true };

    root.innerHTML = `
      <div class="aes-cw-video-frame">
        <div class="aes-cw-video-slide" id="video-slide"></div>
        <div class="aes-cw-video-progress"><div class="aes-cw-video-progress-bar" id="video-progress"></div></div>
        <div class="aes-cw-video-controls">
          <button id="video-play" class="aes-cw-video-btn">⏸️</button>
          <span class="aes-cw-video-counter" id="video-counter">1 / ${slides.length}</span>
        </div>
      </div>`;

    showSlide(0);

    const playBtn = $('#video-play');
    if (playBtn) playBtn.addEventListener('click', toggleVideo);

    startVideoTimer();
  }

  function showSlide(idx) {
    const lesson = allLessons.find((l) => l.id === state.activeLessonId);
    if (!lesson || !lesson.video) return;
    const slides = lesson.video.slides;
    const slide = slides[idx];
    if (!slide) return;

    const el = $('#video-slide');
    if (el) {
      el.innerHTML = `
        <div class="aes-cw-video-emoji">${slide.emoji}</div>
        <h4 class="font-display text-2xl text-ink mt-3">${esc(slide.title)}</h4>
        <p class="text-ink/65 mt-2 text-center max-w-md">${esc(slide.text)}</p>`;
      el.classList.remove('aes-cw-slide-in');
      void el.offsetWidth;
      el.classList.add('aes-cw-slide-in');
    }

    const counter = $('#video-counter');
    if (counter) counter.textContent = `${idx + 1} / ${slides.length}`;

    const progressBar = $('#video-progress');
    if (progressBar) progressBar.style.width = `${((idx + 1) / slides.length) * 100}%`;
  }

  function startVideoTimer() {
    stopVideoTimer();
    videoTimer = setInterval(() => {
      if (!videoState.playing) return;
      const lesson = allLessons.find((l) => l.id === state.activeLessonId);
      if (!lesson || !lesson.video) return;
      const total = lesson.video.slides.length;
      videoState.slide++;
      if (videoState.slide >= total) videoState.slide = 0;
      showSlide(videoState.slide);
    }, 5000);
  }

  function stopVideoTimer() { if (videoTimer) { clearInterval(videoTimer); videoTimer = null; } }

  function toggleVideo() {
    videoState.playing = !videoState.playing;
    const btn = $('#video-play');
    if (btn) btn.textContent = videoState.playing ? '⏸️' : '▶️';
  }

  /* ============================================================
     QUIZ ENGINE
     ============================================================ */
  function renderQuizStart(lesson) {
    const root = $('#quiz-area');
    if (!root || !lesson.quiz) return;
    const done = isDone(lesson.id);

    root.innerHTML = `
      <div class="aes-quiz-start">
        <p class="text-ink/65 text-sm">Ответьте на ${lesson.quiz.showCount} вопросов, чтобы проверить понимание. Вопросы меняются каждый раз.</p>
        <button class="aes-btn aes-btn-primary mt-4" data-quiz-start>Начать тест</button>
        ${done ? '<p class="aes-cw-done-badge">✓ Пройдено</p>' : ''}
      </div>`;
  }

  function startQuiz(lesson) {
    const pool = lesson.quiz.pool;
    const count = Math.min(lesson.quiz.showCount, pool.length);

    // shuffle and pick questions, then shuffle each question's answers
    const selected = shuffle(pool).slice(0, count).map((q) => {
      const correctText = q.options[q.answer];
      const shuffledOpts = shuffle(q.options);
      return { q: q.q, options: shuffledOpts, answer: shuffledOpts.indexOf(correctText), explain: q.explain };
    });

    state.quiz = {
      questions: selected,
      currentIdx: 0,
      answers: [],
      correctCount: 0,
      coinsEarned: 0,
      phase: 'question' // 'question' | 'feedback' | 'done'
    };
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const root = $('#quiz-area');
    if (!root || !state.quiz) return;
    const q = state.quiz.questions[state.quiz.currentIdx];
    const total = state.quiz.questions.length;
    const letter = (i) => String.fromCharCode(65 + i);

    root.innerHTML = `
      <div class="aes-quiz-q">
        <div class="aes-quiz-progress">
          <div class="aes-quiz-progress-bar" style="width:${((state.quiz.currentIdx)/total)*100}%"></div>
        </div>
        <p class="aes-quiz-q-num">Вопрос ${state.quiz.currentIdx + 1} из ${total}</p>
        <h4 class="font-display text-xl text-ink mt-2">${esc(q.q)}</h4>
        <div class="aes-quiz-options">
          ${q.options.map((opt, i) => `
            <button class="aes-quiz-option" data-quiz-answer="${i}">
              <span class="aes-quiz-option-letter">${letter(i)}</span>
              <span>${esc(opt)}</span>
            </button>
          `).join('')}
        </div>
      </div>`;
  }

  function answerQuiz(idx) {
    if (!state.quiz || state.quiz.phase !== 'question') return;
    const q = state.quiz.questions[state.quiz.currentIdx];
    const isCorrect = idx === q.answer;
    state.quiz.answers.push({ selected: idx, correct: isCorrect });
    if (isCorrect) { state.quiz.correctCount++; }
    state.quiz.phase = 'feedback';

    // Update option buttons to show correct/incorrect
    const options = $$('.aes-quiz-option');
    options.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('is-correct');
      if (i === idx && !isCorrect) btn.classList.add('is-wrong');
    });

    // Show feedback
    const root = $('#quiz-area');
    if (root) {
      root.querySelector('.aes-quiz-q').insertAdjacentHTML('beforeend', `
        <div class="aes-quiz-feedback ${isCorrect?'is-correct':'is-wrong'}">
          <div class="aes-quiz-feedback-icon">${isCorrect ? '✓' : '✗'}</div>
          <div>
            <p class="aes-quiz-feedback-title">${isCorrect ? 'Верно!' : 'Не совсем!'}</p>
            <p class="aes-quiz-feedback-explain">${esc(q.explain)}</p>
          </div>
        </div>
        <button class="aes-btn aes-btn-primary mt-4" data-quiz-next>${state.quiz.currentIdx + 1 < state.quiz.questions.length ? 'Следующий вопрос →' : 'Результаты →'}</button>`);
    }

    // Animate
    if (isCorrect) {
      const root2 = $('#quiz-area');
      if (root2) root2.classList.add('aes-quiz-correct-flash');
      setTimeout(() => { if (root2) root2.classList.remove('aes-quiz-correct-flash'); }, 600);
    } else {
      const wrongBtn = $$('[data-quiz-answer]')[idx];
      if (wrongBtn) { wrongBtn.classList.add('aes-shake'); setTimeout(() => wrongBtn.classList.remove('aes-shake'), 500); }
    }
  }

  function nextQuizQuestion() {
    if (!state.quiz) return;
    state.quiz.currentIdx++;
    state.quiz.phase = 'question';
    if (state.quiz.currentIdx >= state.quiz.questions.length) {
      finishQuiz();
    } else {
      renderQuizQuestion();
    }
  }

  function finishQuiz() {
    const lesson = allLessons.find((l) => l.id === state.activeLessonId);
    if (!lesson) return;
    const correct = state.quiz.correctCount;
    const total = state.quiz.questions.length;
    const passed = correct / total >= lesson.quiz.passThreshold;
    const coins = state.quiz.coinsEarned;
    state.quiz.phase = 'done';

    if (passed && !isDone(lesson.id)) {
      state.completed.push(lesson.id);
      saveProgress();
    }

    const root = $('#quiz-area');
    if (!root) return;

    root.innerHTML = `
      <div class="aes-quiz-result ${passed?'is-pass':'is-fail'}">
        <div class="aes-quiz-result-icon">${passed?'🎉':'📚'}</div>
        <h4 class="font-display text-2xl text-ink mt-3">${passed?'Отлично!':'Продолжайте практиковаться!'}</h4>
        <p class="text-ink/65 mt-2">Правильно: <strong class="text-ink">${correct} / ${total}</strong>.</p>

        ${!passed ? `
          <p class="aes-quiz-retry-msg">Вы ответили неправильно более чем на половину. Попробовать снова с новыми вопросами или перейти к следующему уроку?</p>
          <div class="aes-quiz-actions">
            <button class="aes-btn aes-btn-primary" data-quiz-retry>Try again</button>
            <button class="aes-btn aes-btn-ghost" data-quiz-continue>Continue anyway →</button>
          </div>` : `
          <div class="aes-quiz-actions">
            <button class="aes-btn aes-btn-ghost" data-quiz-retry>Retake quiz</button>
            ${allLessons.findIndex((l) => l.id === state.activeLessonId) < allLessons.length - 1 ? '<button class="aes-btn aes-btn-primary" data-quiz-continue>Next lesson →</button>' : '<span class="aes-cw-done-badge">🎉 Курс завершён!</span>'}
          </div>`}
      </div>`;

    renderSidebar();
  }

  /* ============================================================
     NAVIGATION
     ============================================================ */
  function setActive(id) {
    stopVideoTimer();
    state.activeLessonId = id;
    state.quiz = null;
    saveActive();
    renderSidebar();
    renderLesson();
    if (window.innerWidth < 900) {
      const main = $('#course-main');
      if (main) main.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  function nextLesson() {
    const idx = allLessons.findIndex((l) => l.id === state.activeLessonId);
    if (idx >= 0 && idx < allLessons.length - 1) setActive(allLessons[idx + 1].id);
  }
  function prevLesson() {
    const idx = allLessons.findIndex((l) => l.id === state.activeLessonId);
    if (idx > 0) setActive(allLessons[idx - 1].id);
  }
  function toggleComplete(id) {
    const idx = state.completed.indexOf(id);
    if (idx >= 0) state.completed.splice(idx, 1);
    else state.completed.push(id);
    saveProgress();
    renderSidebar();
    renderLesson();
  }

  /* ============================================================
     WIRING
     ============================================================ */
  function wire() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-lesson]')) { e.preventDefault(); setActive(e.target.closest('[data-lesson]').getAttribute('data-lesson')); return; }
      if (e.target.closest('[data-lesson-prev]')) { if(!e.target.closest('[data-lesson-prev]').disabled){ e.preventDefault(); prevLesson(); } return; }
      if (e.target.closest('[data-lesson-next]')) { if(!e.target.closest('[data-lesson-next]').disabled){ e.preventDefault(); nextLesson(); } return; }
      if (e.target.closest('[data-lesson-toggle]')) { e.preventDefault(); toggleComplete(state.activeLessonId); return; }
      if (e.target.closest('[data-quiz-start]')) { e.preventDefault(); const l = allLessons.find((x) => x.id === state.activeLessonId); if (l) startQuiz(l); return; }
      if (e.target.closest('[data-quiz-answer]')) { e.preventDefault(); answerQuiz(parseInt(e.target.closest('[data-quiz-answer]').getAttribute('data-quiz-answer'), 10)); return; }
      if (e.target.closest('[data-quiz-next]')) { e.preventDefault(); nextQuizQuestion(); return; }
      if (e.target.closest('[data-quiz-retry]')) { e.preventDefault(); const l = allLessons.find((x) => x.id === state.activeLessonId); if (l) startQuiz(l); return; }
      if (e.target.closest('[data-quiz-continue]')) { e.preventDefault(); nextLesson(); return; }
      if (e.target.closest('[data-practice]')) {
        e.preventDefault();
        const sc = e.target.closest('[data-practice]').getAttribute('data-practice');
        if (global.AESAssistant && global.AESAssistant.setScenario) global.AESAssistant.setScenario(sc);
        const chat = $('#aes-assistant-root');
        if (chat) chat.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    if (!$('#course-sidebar')) return;
    renderSidebar();
    renderCoins();
    renderLesson();
    wire();
  }

  document.addEventListener('aes:course-show', () => { renderSidebar(); renderLesson(); renderCoins(); });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  global.AESCourseViewer = { setActive, toggleComplete, nextLesson, prevLesson };
})(window);
