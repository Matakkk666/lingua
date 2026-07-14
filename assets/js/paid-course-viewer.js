/* ============================================================
   AES Paid Course Viewer v2 — Elite Learning Experience
   Features:
   - Sequential lesson unlocking (complete lesson → unlock next)
   - Tab-based lesson view: Theory → Video → Quiz → Homework
   - Progress tracking per course (localStorage)
   - Coin rewards for completing lessons
   - Clean, modern UI different from free course
   ============================================================ */
(function (global) {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const urlParams = new URLSearchParams(global.location.search);
  const courseId = urlParams.get('course');

  const COURSES = ((global.AESData || {}).PAID_COURSES) || [];
  const course = COURSES.find((c) => c.id === courseId);

  if (!course) {
    $('#course-content').innerHTML = '<div class="aes-pcv-error"><h2>Курс не найден</h2><a href="courses.html" class="aes-btn aes-btn-primary">← К курсам</a></div>';
    $('#course-content').style.display = 'block';
    $('#access-gate').style.display = 'none';
    return;
  }

  const PROGRESS_KEY = 'aes_paid_progress_' + course.id;
  const COIN_KEY = 'aes_coins';
  const COINS_PER_LESSON = 50;

  const state = {
    activeLessonIdx: 0,
    activeTab: 'theory',
    theoryLang: 'orig',
    completedSections: loadProgress(),
    quizState: null,
    homeworkState: null
  };

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function saveProgress() {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(state.completedSections)); }
    catch (e) {}
  }
  function loadCoins() {
    try { return parseInt(localStorage.getItem(COIN_KEY) || '0', 10); }
    catch (e) { return 0; }
  }
  function saveCoins(n) {
    try { localStorage.setItem(COIN_KEY, String(n)); } catch (e) {}
  }
  function addCoins(n) {
    const cur = loadCoins();
    saveCoins(cur + n);
    renderCoins();
    animateCoins(n);
    if (global.AESAvatar && global.AESAvatar.renderCoins) global.AESAvatar.renderCoins();
    if (global.AESAvatar && global.AESAvatar.renderHeader) global.AESAvatar.renderHeader();
  }
  function renderCoins() {
    $$('.aes-coin-balance').forEach((el) => { el.textContent = loadCoins(); });
    if (global.AESAvatar && global.AESAvatar.renderCoins) global.AESAvatar.renderCoins();
  }
  function animateCoins(amount) {
    $$('.aes-coin-pop').forEach((el) => {
      el.textContent = '+' + amount;
      el.classList.remove('is-show');
      void el.offsetWidth;
      el.classList.add('is-show');
    });
  }

  function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function shuffle(arr) { const a = arr.slice(); for (let i = a.length-1; i>0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

  function isLessonUnlocked(idx) {
    if (idx === 0) return true;
    const prev = course.lessons[idx - 1];
    const prevProgress = state.completedSections[prev.id];
    return prevProgress && prevProgress.allDone;
  }

  function isSectionDone(lessonId, section) {
    const p = state.completedSections[lessonId];
    return p && p[section];
  }

  function markSectionDone(lessonId, section) {
    if (!state.completedSections[lessonId]) state.completedSections[lessonId] = {};
    const wasDone = state.completedSections[lessonId][section];
    state.completedSections[lessonId][section] = true;

    const lesson = course.lessons.find((l) => l.id === lessonId);
    const sections = ['theory', 'video', 'quiz', 'homework'];
    const allDone = sections.every((s) => state.completedSections[lessonId][s]);

    if (allDone && !state.completedSections[lessonId].allDone) {
      state.completedSections[lessonId].allDone = true;
      addCoins(COINS_PER_LESSON);
    }
    saveProgress();
  }

  /* ============================================================
     RENDER: LESSON GRID (overview)
     ============================================================ */
  function renderLessonGrid() {
    const grid = $('#pcv-lessons');
    if (!grid) return;

    grid.innerHTML = course.lessons.map((lesson, idx) => {
      const unlocked = isLessonUnlocked(idx);
      const progress = state.completedSections[lesson.id];
      const done = progress && progress.allDone;
      const sectionsDone = progress ? ['theory','video','quiz','homework'].filter(s => progress[s]).length : 0;

      return `
        <div class="aes-pcv-lesson-card ${!unlocked ? 'is-locked' : ''} ${done ? 'is-done' : ''}" data-lesson-idx="${idx}">
          <div class="aes-pcv-lesson-num">${done ? '✓' : idx + 1}</div>
          <div class="aes-pcv-lesson-info">
            <h3>${esc(lesson.topic)}</h3>
            <p>${esc(lesson.objective)}</p>
            <div class="aes-pcv-lesson-meta">
              <span>⏱ ${lesson.estimatedTime}</span>
              ${unlocked ? `<span class="aes-pcv-progress-mini">${sectionsDone}/4</span>` : '<span>🔒 Закрыто</span>'}
            </div>
          </div>
          ${unlocked ? '<span class="aes-pcv-lesson-arrow">→</span>' : '<span class="aes-pcv-lock">🔒</span>'}
        </div>`;
    }).join('');

    $$('.aes-pcv-lesson-card').forEach((card) => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-lesson-idx'), 10);
        if (!isLessonUnlocked(idx)) return;
        state.activeLessonIdx = idx;
        state.activeTab = 'theory';
        state.quizState = null;
        state.homeworkState = null;
        renderLessonView();
      });
    });
  }

  /* ============================================================
     RENDER: LESSON VIEW (tabs)
     ============================================================ */
  function renderLessonView() {
    const root = $('#pcv-lesson-view');
    if (!root) return;
    const lesson = course.lessons[state.activeLessonIdx];

    $('#pcv-overview').style.display = 'none';
    root.style.display = 'block';

    const sections = ['theory', 'video', 'quiz', 'homework'];
    const tabsHTML = sections.map((s) => {
      const done = isSectionDone(lesson.id, s);
      const labels = { theory: '📖 Теория', video: '🎬 Видео', quiz: '✏️ Тест', homework: '📝 Домашка' };
      return `<button class="aes-pcv-tab ${state.activeTab === s ? 'is-active' : ''} ${done ? 'is-done' : ''}" data-tab="${s}">${labels[s]} ${done ? '✓' : ''}</button>`;
    }).join('');

    root.innerHTML = `
      <div class="aes-pcv-back">
        <button class="aes-pcv-back-btn" data-back>← К урокам</button>
      </div>
      <div class="aes-pcv-lesson-header">
        <span class="aes-pcv-lesson-badge">Урок ${state.activeLessonIdx + 1} из ${course.lessons.length}</span>
        <h2>${esc(lesson.topic)}</h2>
        <p>${esc(lesson.objective)}</p>
        <span class="aes-pcv-time">⏱ ${lesson.estimatedTime}</span>
      </div>
      <div class="aes-pcv-tabs">${tabsHTML}</div>
      <div class="aes-pcv-tab-content" id="pcv-tab-content"></div>`;

    $$('.aes-pcv-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        state.activeTab = tab.getAttribute('data-tab');
        renderTabContent();
      });
    });

    $('[data-back]')?.addEventListener('click', () => {
      root.style.display = 'none';
      $('#pcv-overview').style.display = 'block';
      renderLessonGrid();
    });

    renderTabContent();
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderTabContent() {
    const root = $('#pcv-tab-content');
    if (!root) return;
    const lesson = course.lessons[state.activeLessonIdx];

    $$('.aes-pcv-tab').forEach((t) => t.classList.toggle('is-active', t.getAttribute('data-tab') === state.activeTab));

    if (state.activeTab === 'theory') renderTheory(lesson, root);
    else if (state.activeTab === 'video') renderVideo(lesson, root);
    else if (state.activeTab === 'quiz') renderQuiz(lesson, root);
    else if (state.activeTab === 'homework') renderHomework(lesson, root);
  }

  /* ============================================================
     THEORY TAB — with bilingual toggle
     ============================================================ */
  function renderTheory(lesson, root) {
    const r = lesson.reading;
    const done = isSectionDone(lesson.id, 'theory');
    const hasRu = !!r.textRu;
    const lang = state.theoryLang || 'orig';

    const showText = (hasRu && lang === 'ru') ? r.textRu : r.text;
    const origLabel = course.level && course.level.indexOf('A1') >= 0 ? 'Оригинал' : 'Оригинал';
    const toggleHTML = hasRu ? `
      <div class="aes-pcv-lang-toggle">
        <button class="aes-pcv-lang-btn ${lang === 'orig' ? 'is-active' : ''}" data-lang-toggle="orig">${origLabel}</button>
        <button class="aes-pcv-lang-btn ${lang === 'ru' ? 'is-active' : ''}" data-lang-toggle="ru">Русский</button>
      </div>` : '';

    root.innerHTML = `
      <div class="aes-pcv-theory">
        ${toggleHTML}
        <h3>${esc(r.title)}</h3>
        <div class="aes-pcv-reading">${esc(showText).replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>')}</div>
        <div class="aes-pcv-vocab">
          <h4>Ключевой словарь</h4>
          ${r.vocab.map((v) => `<div class="aes-pcv-vocab-item"><span class="aes-pcv-vocab-word">${esc(v.word)}</span><span class="aes-pcv-vocab-trans">${esc(v.trans)}</span></div>`).join('')}
        </div>
        ${!done ? '<button class="aes-btn aes-btn-primary aes-pcv-complete-btn" data-complete-section="theory">Отметить изученным ✓</button>' : '<p class="aes-pcv-done-badge">✓ Изучено</p>'}
      </div>`;

    $('[data-complete-section="theory"]')?.addEventListener('click', () => {
      markSectionDone(lesson.id, 'theory');
      renderTabContent();
      updateTabs();
    });

    $$('[data-lang-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.theoryLang = btn.getAttribute('data-lang-toggle');
        renderTabContent();
      });
    });
  }

  /* ============================================================
     VIDEO TAB
     ============================================================ */
  let videoTimer = null;
  let videoSlide = 0;

  function renderVideo(lesson, root) {
    const slides = lesson.video.slides;
    videoSlide = 0;
    const done = isSectionDone(lesson.id, 'video');

    root.innerHTML = `
      <div class="aes-pcv-video">
        <div class="aes-pcv-video-frame">
          <div class="aes-pcv-video-slide" id="pcv-slide"></div>
          <div class="aes-pcv-video-progress"><div class="aes-pcv-video-bar" id="pcv-video-bar"></div></div>
          <div class="aes-pcv-video-controls">
            <button id="pcv-video-prev" class="aes-pcv-video-btn">‹</button>
            <span id="pcv-video-counter">1 / ${slides.length}</span>
            <button id="pcv-video-next" class="aes-pcv-video-btn">›</button>
          </div>
        </div>
        ${!done ? '<button class="aes-btn aes-btn-primary aes-pcv-complete-btn" data-complete-section="video">Отметить просмотренным ✓</button>' : '<p class="aes-pcv-done-badge">✓ Просмотрено</p>'}
      </div>`;

    showVideoSlide(lesson, 0);

    $('#pcv-video-prev')?.addEventListener('click', () => {
      if (videoSlide > 0) showVideoSlide(lesson, videoSlide - 1);
    });
    $('#pcv-video-next')?.addEventListener('click', () => {
      if (videoSlide < slides.length - 1) showVideoSlide(lesson, videoSlide + 1);
    });
    $('[data-complete-section="video"]')?.addEventListener('click', () => {
      markSectionDone(lesson.id, 'video');
      renderTabContent();
      updateTabs();
    });
  }

  function showVideoSlide(lesson, idx) {
    videoSlide = idx;
    const slide = lesson.video.slides[idx];
    const el = $('#pcv-slide');
    if (el) {
      el.innerHTML = `
        <div class="aes-pcv-video-emoji">${slide.emoji}</div>
        <h4>${esc(slide.title)}</h4>
        <p>${esc(slide.text)}</p>`;
      el.classList.remove('aes-pcv-slide-in');
      void el.offsetWidth;
      el.classList.add('aes-pcv-slide-in');
    }
    const counter = $('#pcv-video-counter');
    if (counter) counter.textContent = `${idx + 1} / ${lesson.video.slides.length}`;
    const bar = $('#pcv-video-bar');
    if (bar) bar.style.width = `${((idx + 1) / lesson.video.slides.length) * 100}%`;
  }

  /* ============================================================
     QUIZ TAB
     ============================================================ */
  function renderQuiz(lesson, root) {
    const done = isSectionDone(lesson.id, 'quiz');

    if (done) {
      root.innerHTML = '<div class="aes-pcv-quiz-done"><div class="aes-success-blob"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><p class="font-display text-xl text-ink mt-4">Тест пройден! ✓</p><button class="aes-btn aes-btn-ghost mt-4" data-quiz-retry>Пройти заново</button></div>';
      $('[data-quiz-retry]')?.addEventListener('click', () => {
        state.completedSections[lesson.id].quiz = false;
        state.quizState = null;
        renderTabContent();
        updateTabs();
      });
      return;
    }

    if (!state.quizState) {
      root.innerHTML = `
        <div class="aes-pcv-quiz-start">
          <p class="text-ink/65">Ответьте на ${lesson.quiz.showCount} вопросов. Проходной порог: ${Math.round(lesson.quiz.passThreshold * 100)}%.</p>
          <button class="aes-btn aes-btn-primary mt-4" data-quiz-start>Начать тест →</button>
        </div>`;
      $('[data-quiz-start]')?.addEventListener('click', () => {
        startQuiz(lesson);
      });
      return;
    }

    renderQuizQuestion(lesson);
  }

  function startQuiz(lesson) {
    const pool = lesson.quiz.pool;
    const count = Math.min(lesson.quiz.showCount, pool.length);
    const selected = shuffle(pool).slice(0, count).map((q) => {
      const correctText = q.options[q.answer];
      const shuffledOpts = shuffle(q.options);
      return { q: q.q, options: shuffledOpts, answer: shuffledOpts.indexOf(correctText), explain: q.explain };
    });

    state.quizState = { questions: selected, currentIdx: 0, correctCount: 0, phase: 'question' };
    renderTabContent();
  }

  function renderQuizQuestion() {
    const lesson = course.lessons[state.activeLessonIdx];
    const q = state.quizState.questions[state.quizState.currentIdx];
    const total = state.quizState.questions.length;
    const letter = (i) => String.fromCharCode(65 + i);

    const root = $('#pcv-tab-content');
    root.innerHTML = `
      <div class="aes-pcv-quiz">
        <div class="aes-pcv-quiz-progress"><div class="aes-pcv-quiz-bar" style="width:${(state.quizState.currentIdx / total) * 100}%"></div></div>
        <p class="aes-pcv-quiz-num">Вопрос ${state.quizState.currentIdx + 1} из ${total}</p>
        <h4 class="font-display text-xl text-ink mt-2">${esc(q.q)}</h4>
        <div class="aes-pcv-quiz-options">
          ${q.options.map((opt, i) => `<button class="aes-pcv-quiz-option" data-quiz-answer="${i}"><span class="aes-pcv-option-letter">${letter(i)}</span><span>${esc(opt)}</span></button>`).join('')}
        </div>
      </div>`;

    $$('[data-quiz-answer]').forEach((btn) => {
      btn.addEventListener('click', () => {
        answerQuiz(parseInt(btn.getAttribute('data-quiz-answer'), 10));
      });
    });
  }

  function answerQuiz(idx) {
    const lesson = course.lessons[state.activeLessonIdx];
    const q = state.quizState.questions[state.quizState.currentIdx];
    const isCorrect = idx === q.answer;
    if (isCorrect) state.quizState.correctCount++;
    state.quizState.phase = 'feedback';

    $$('.aes-pcv-quiz-option').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('is-correct');
      if (i === idx && !isCorrect) btn.classList.add('is-wrong');
    });

    const root = $('#pcv-tab-content');
    root.querySelector('.aes-pcv-quiz').insertAdjacentHTML('beforeend', `
      <div class="aes-pcv-quiz-feedback ${isCorrect ? 'is-correct' : 'is-wrong'}">
        <span class="aes-pcv-feedback-icon">${isCorrect ? '✓' : '✗'}</span>
        <div><p class="aes-pcv-feedback-title">${isCorrect ? 'Верно!' : 'Не совсем'}</p><p class="aes-pcv-feedback-explain">${esc(q.explain)}</p></div>
      </div>
      <button class="aes-btn aes-btn-primary mt-4" data-quiz-next>${state.quizState.currentIdx + 1 < state.quizState.questions.length ? 'Следующий →' : 'Результаты →'}</button>`);

    $('[data-quiz-next]')?.addEventListener('click', () => {
      state.quizState.currentIdx++;
      state.quizState.phase = 'question';
      if (state.quizState.currentIdx >= state.quizState.questions.length) {
        finishQuiz(lesson);
      } else {
        renderTabContent();
      }
    });
  }

  function finishQuiz(lesson) {
    const correct = state.quizState.correctCount;
    const total = state.quizState.questions.length;
    const passed = correct / total >= lesson.quiz.passThreshold;

    if (passed) {
      markSectionDone(lesson.id, 'quiz');
    }

    const root = $('#pcv-tab-content');
    root.innerHTML = `
      <div class="aes-pcv-quiz-result ${passed ? 'is-pass' : 'is-fail'}">
        <div class="aes-pcv-result-icon">${passed ? '🎉' : '📚'}</div>
        <h4 class="font-display text-2xl text-ink mt-3">${passed ? 'Отлично!' : 'Попробуйте снова'}</h4>
        <p class="text-ink/65 mt-2">Правильно: <strong>${correct} / ${total}</strong></p>
        <div class="aes-pcv-quiz-actions">
          <button class="aes-btn aes-btn-ghost" data-quiz-retry>Заново</button>
          ${passed ? '<button class="aes-btn aes-btn-primary" data-tab-go="homework">К домашке →</button>' : ''}
        </div>
      </div>`;

    $('[data-quiz-retry]')?.addEventListener('click', () => {
      state.quizState = null;
      renderTabContent();
    });
    $('[data-tab-go="homework"]')?.addEventListener('click', () => {
      state.activeTab = 'homework';
      renderTabContent();
      updateTabs();
    });
    updateTabs();
  }

  /* ============================================================
     HOMEWORK TAB
     ============================================================ */
  function renderHomework(lesson, root) {
    const done = isSectionDone(lesson.id, 'homework');

    if (done) {
      root.innerHTML = '<div class="aes-pcv-quiz-done"><div class="aes-success-blob"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><p class="font-display text-xl text-ink mt-4">Домашка сдана! ✓</p></div>';
      return;
    }

    if (!state.homeworkState) {
      state.homeworkState = { currentIdx: 0, correctCount: 0, total: lesson.homework.exercises.length };
    }

    const ex = lesson.homework.exercises[state.homeworkState.currentIdx];
    const total = state.homeworkState.total;

    root.innerHTML = `
      <div class="aes-pcv-homework">
        <div class="aes-pcv-quiz-progress"><div class="aes-pcv-quiz-bar" style="width:${(state.homeworkState.currentIdx / total) * 100}%"></div></div>
        <p class="aes-pcv-quiz-num">Задание ${state.homeworkState.currentIdx + 1} из ${total}</p>
        <div id="pcv-exercise"></div>
      </div>`;

    renderExercise(ex);
  }

  function renderExercise(ex) {
    const root = $('#pcv-exercise');
    if (!root) return;

    let inputHTML = '';
    if (ex.type === 'fill-blank') {
      inputHTML = `<input type="text" id="pcv-ex-input" class="aes-pcv-input" placeholder="Введите ответ..." autocomplete="off">`;
    } else if (ex.type === 'choice') {
      inputHTML = `<div class="aes-pcv-quiz-options">${ex.options.map((o, i) => `<button class="aes-pcv-quiz-option" data-ex-choice="${i}"><span>${esc(o)}</span></button>`).join('')}</div>`;
    } else if (ex.type === 'translate') {
      inputHTML = `<input type="text" id="pcv-ex-input" class="aes-pcv-input" placeholder="Введите перевод..." autocomplete="off">`;
    } else if (ex.type === 'order') {
      inputHTML = `<div class="aes-pcv-order-words">${shuffle(ex.words).map((w) => `<button class="aes-pcv-word" data-word="${esc(w)}">${esc(w)}</button>`).join('')}</div><div id="pcv-order-answer" class="aes-pcv-order-answer"></div>`;
    } else if (ex.type === 'correct') {
      inputHTML = `<input type="text" id="pcv-ex-input" class="aes-pcv-input" placeholder="Введите исправленный вариант..." autocomplete="off">`;
    }

    const typeLabels = { 'fill-blank': 'Заполните пропуск', 'choice': 'Выберите правильный вариант', 'translate': 'Переведите на английский', 'order': 'Составьте предложение из слов', 'correct': 'Найдите и исправьте ошибку' };

    root.innerHTML = `
      <div class="aes-pcv-exercise">
        <span class="aes-pcv-ex-type">${typeLabels[ex.type] || 'Задание'}</span>
        <p class="aes-pcv-ex-question">${esc(ex.question)}</p>
        ${inputHTML}
        <div id="pcv-ex-feedback"></div>
        <button class="aes-btn aes-btn-primary aes-pcv-complete-btn" data-ex-check style="display:none;">Проверить</button>
      </div>`;

    if (ex.type === 'order') {
      let selected = [];
      $$('.aes-pcv-word').forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.disabled = true;
          btn.classList.add('is-used');
          selected.push(btn.getAttribute('data-word'));
          $('#pcv-order-answer').innerHTML = selected.map((w) => `<span class="aes-pcv-selected-word">${esc(w)}</span>`).join(' ') + ' <button class="aes-pcv-clear" data-ex-clear>↺</button>';
          $('[data-ex-check]').style.display = 'inline-flex';
          $('[data-ex-clear]')?.addEventListener('click', () => {
            selected = [];
            $$('.aes-pcv-word').forEach((b) => { b.disabled = false; b.classList.remove('is-used'); });
            $('#pcv-order-answer').innerHTML = '';
            $('[data-ex-check]').style.display = 'none';
          });
        });
      });
    }

    if (ex.type !== 'choice' && ex.type !== 'order') {
      const input = $('#pcv-ex-input');
      if (input) {
        input.addEventListener('input', () => {
          $('[data-ex-check]').style.display = input.value.trim() ? 'inline-flex' : 'none';
        });
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') checkExercise(ex); });
      }
    }

    if (ex.type === 'choice') {
      $$('[data-ex-choice]').forEach((btn) => {
        btn.addEventListener('click', () => {
          $$('[data-ex-choice]').forEach((b) => b.disabled = true);
          const idx = parseInt(btn.getAttribute('data-ex-choice'), 10);
          const isCorrect = idx === ex.answer;
          btn.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
          if (!isCorrect) $$('[data-ex-choice]')[ex.answer].classList.add('is-correct');
          showExerciseFeedback(ex, isCorrect);
        });
      });
    }

    $('[data-ex-check]')?.addEventListener('click', () => checkExercise(ex));
  }

  function checkExercise(ex) {
    const lesson = course.lessons[state.activeLessonIdx];
    let userAnswer = '';
    let isCorrect = false;

    if (ex.type === 'order') {
      const words = $$('#pcv-order-answer .aes-pcv-selected-word').map((s) => s.textContent);
      userAnswer = words.join(' ');
      isCorrect = userAnswer.toLowerCase().trim() === ex.answer.toLowerCase().trim();
    } else {
      const input = $('#pcv-ex-input');
      userAnswer = input ? input.value.trim() : '';
      isCorrect = userAnswer.toLowerCase() === ex.answer.toLowerCase();
    }

    showExerciseFeedback(ex, isCorrect);
  }

  function showExerciseFeedback(ex, isCorrect) {
    const root = $('#pcv-ex-feedback');
    if (!root) return;

    if (isCorrect) state.homeworkState.correctCount++;

    root.innerHTML = `
      <div class="aes-pcv-quiz-feedback ${isCorrect ? 'is-correct' : 'is-wrong'}">
        <span class="aes-pcv-feedback-icon">${isCorrect ? '✓' : '✗'}</span>
        <div>
          <p class="aes-pcv-feedback-title">${isCorrect ? 'Верно!' : 'Не совсем'}</p>
          ${!isCorrect ? `<p class="aes-pcv-feedback-explain">Правильный ответ: <strong>${esc(ex.answer)}</strong></p>` : ''}
          <p class="aes-pcv-feedback-explain">${esc(ex.explain)}</p>
        </div>
      </div>
      <button class="aes-btn aes-btn-primary mt-4" data-ex-next>${state.homeworkState.currentIdx + 1 < state.homeworkState.total ? 'Следующее →' : 'Завершить ✓'}</button>`;

    $('[data-ex-next]')?.addEventListener('click', () => {
      state.homeworkState.currentIdx++;
      if (state.homeworkState.currentIdx >= state.homeworkState.total) {
        finishHomework();
      } else {
        renderTabContent();
      }
    });
  }

  function finishHomework() {
    const lesson = course.lessons[state.activeLessonIdx];
    markSectionDone(lesson.id, 'homework');
    state.homeworkState = null;

    const root = $('#pcv-tab-content');
    root.innerHTML = `
      <div class="aes-pcv-quiz-result is-pass">
        <div class="aes-pcv-result-icon">📝</div>
        <h4 class="font-display text-2xl text-ink mt-3">Домашка завершена!</h4>
        <p class="text-ink/65 mt-2">Все задания выполнены.</p>
        <div class="aes-pcv-quiz-actions">
          <button class="aes-btn aes-btn-ghost" data-back-to-grid>К урокам</button>
          ${state.activeLessonIdx < course.lessons.length - 1 ? '<button class="aes-btn aes-btn-primary" data-next-lesson>Следующий урок →</button>' : '<p class="aes-pcv-course-done">🎓 Курс завершён!</p>'}
        </div>
      </div>`;

    $('[data-back-to-grid]')?.addEventListener('click', () => {
      $('#pcv-lesson-view').style.display = 'none';
      $('#pcv-overview').style.display = 'block';
      renderLessonGrid();
    });
    $('[data-next-lesson]')?.addEventListener('click', () => {
      state.activeLessonIdx++;
      state.activeTab = 'theory';
      state.quizState = null;
      state.homeworkState = null;
      renderLessonView();
    });
    updateTabs();
  }

  function updateTabs() {
    const lesson = course.lessons[state.activeLessonIdx];
    const sections = ['theory', 'video', 'quiz', 'homework'];
    const labels = { theory: '📖 Теория', video: '🎬 Видео', quiz: '✏️ Тест', homework: '📝 Домашка' };
    $$('.aes-pcv-tab').forEach((tab) => {
      const s = tab.getAttribute('data-tab');
      const done = isSectionDone(lesson.id, s);
      tab.classList.toggle('is-done', done);
      tab.innerHTML = labels[s] + (done ? ' ✓' : '');
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    $('#pcv-course-title').textContent = course.title;
    $('#pcv-course-level').textContent = course.level;
    $('#pcv-course-duration').textContent = course.duration;
    $('#pcv-course-lessons-count').textContent = course.totalLessons;

    const totalSections = course.lessons.length * 4;
    const doneSections = course.lessons.reduce((sum, l) => {
      const p = state.completedSections[l.id];
      return sum + (p ? ['theory','video','quiz','homework'].filter(s => p[s]).length : 0);
    }, 0);
    const pct = Math.round((doneSections / totalSections) * 100);
    $('#pcv-progress-bar').style.width = pct + '%';
    $('#pcv-progress-text').textContent = doneSections + ' / ' + totalSections;

    renderLessonGrid();
    renderCoins();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.AESPaidViewer = { init };
})(window);
