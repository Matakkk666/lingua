/* ============================================================
   AES Level Test — English proficiency assessment
   - Shuffles question order + answer options each run
   - Picks 25 from a pool of 42 questions
   - Gives ONE definitive CEFR level (A1–C2)
   ============================================================ */
(function (global) {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const D = (global.AESData || {}).LEVEL_TEST;
  if (!D) return;

  const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const QUESTIONS_PER_RUN = 25;

  const state = {
    current: 0,
    activeQuestions: [],
    answers: [],
    finished: false,
    result: null
  };

  /* ---------- Shuffle utilities ---------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Shuffle a question's options, tracking which one was the correct answer
  function shuffleQuestion(q) {
    const correctText = q.options[q.answer];
    const shuffledOpts = shuffle(q.options);
    return {
      q: q.q,
      options: shuffledOpts,
      answer: shuffledOpts.indexOf(correctText),
      level: q.level
    };
  }

  /* ---------- Build a shuffled test set ---------- */
  function buildTest() {
    // Ensure balanced representation: pick ~4-5 from each level, shuffled
    const byLevel = {};
    LEVELS.forEach((l) => { byLevel[l] = []; });
    D.questions.forEach((q) => { byLevel[q.level].push(q); });

    const perLevel = Math.floor(QUESTIONS_PER_RUN / LEVELS.length); // 4
    const remainder = QUESTIONS_PER_RUN - perLevel * LEVELS.length;  // 1
    const extraLevels = shuffle(LEVELS).slice(0, remainder);

    let pool = [];
    LEVELS.forEach((l, i) => {
      const count = perLevel + (extraLevels.includes(l) ? 1 : 0);
      pool = pool.concat(shuffle(byLevel[l]).slice(0, Math.min(count, byLevel[l].length)));
    });

    return shuffle(pool).map(shuffleQuestion);
  }

  /* ---------- Scoring: ONE definitive level ---------- */
  function calculateResult() {
    const correctByLevel = {};
    const totalByLevel = {};
    LEVELS.forEach((l) => { correctByLevel[l] = 0; totalByLevel[l] = 0; });

    state.activeQuestions.forEach((q, i) => {
      totalByLevel[q.level]++;
      if (state.answers[i] === q.answer) correctByLevel[q.level]++;
    });

    let totalCorrect = 0;
    LEVELS.forEach((l) => { totalCorrect += correctByLevel[l]; });

    // Algorithm: find the highest level where accuracy >= 50%
    // AND all lower levels also have >= 40% accuracy (anti-guessing)
    let result = 'A1';
    for (let idx = 0; idx < LEVELS.length; idx++) {
      const lvl = LEVELS[idx];
      const acc = totalByLevel[lvl] > 0 ? correctByLevel[lvl] / totalByLevel[lvl] : 0;
      if (acc >= 0.5) {
        // check all lower levels have >= 40%
        let lowerOk = true;
        for (let j = 0; j < idx; j++) {
          const lower = LEVELS[j];
          const lowerAcc = totalByLevel[lower] > 0 ? correctByLevel[lower] / totalByLevel[lower] : 0;
          if (lowerAcc < 0.4) { lowerOk = false; break; }
        }
        if (lowerOk) result = lvl;
      }
    }

    return {
      level: result,
      totalCorrect,
      total: state.activeQuestions.length,
      breakdown: LEVELS.map((l) => ({ level: l, correct: correctByLevel[l], total: totalByLevel[l] }))
    };
  }

  /* ---------- Rendering ---------- */
  function renderIntro() {
    const root = $('#level-test-root');
    if (!root) return;
    root.innerHTML = `
      <div class="aes-test-intro reveal is-visible">
        <div class="aes-test-intro-icon">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        </div>
        <h2 class="font-display text-3xl md:text-4xl text-ink mt-6">Тест на уровень английского</h2>
        <p class="text-ink/60 mt-3 max-w-md mx-auto">${D.intro}</p>
        <div class="aes-test-meta-row">
          <span class="aes-test-meta-chip">${QUESTIONS_PER_RUN} вопросов</span>
          <span class="aes-test-meta-chip">~5 минут</span>
          <span class="aes-test-meta-chip">CEFR A1–C2</span>
          <span class="aes-test-meta-chip">Перемешивается каждый раз</span>
        </div>
        <button class="aes-btn aes-btn-primary mt-8" data-test-start>Начать тест</button>
      </div>`;
  }

  function renderQuestion() {
    const root = $('#level-test-root');
    if (!root) return;
    const q = state.activeQuestions[state.current];
    const progress = ((state.current / state.activeQuestions.length) * 100).toFixed(0);
    const letter = (i) => String.fromCharCode(65 + i);

    root.innerHTML = `
      <div class="aes-test-question reveal is-visible">
        <div class="aes-test-progress">
          <div class="aes-test-progress-bar" style="width:${progress}%"></div>
        </div>
        <div class="aes-test-qhead">
          <span class="aes-test-qnum">Вопрос ${state.current + 1} / ${state.activeQuestions.length}</span>
          <span class="aes-test-level-tag">${q.level}</span>
        </div>
        <h3 class="font-display text-2xl md:text-3xl text-ink mt-4">${escapeHTML(q.q)}</h3>
        <div class="aes-test-options">
          ${q.options.map((opt, i) => `
            <button class="aes-test-option" data-answer="${i}">
              <span class="aes-test-option-letter">${letter(i)}</span>
              <span class="aes-test-option-text">${escapeHTML(opt)}</span>
            </button>
          `).join('')}
        </div>
      </div>`;
  }

  function renderResult() {
    const root = $('#level-test-root');
    if (!root) return;
    const r = state.result;
    const info = D.results[r.level] || D.results['A1'];
    const percent = Math.round((r.totalCorrect / r.total) * 100);
    const accentColor = { 'A1':'#D6EBDC','A2':'#E5DAF0','B1':'#FBF1DD','B2':'#F2DCDC','C1':'#E0E8F2','C2':'#F0E2EA' }[r.level] || '#E5DAF0';

    root.innerHTML = `
      <div class="aes-test-result reveal is-visible">
        <div class="aes-test-result-badge" style="background:linear-gradient(135deg, ${accentColor}, ${accentColor}cc);">
          <span class="aes-test-result-level">${r.level}</span>
        </div>
        <h2 class="font-display text-3xl md:text-4xl text-ink mt-6">${info.title}</h2>
        <p class="text-ink/60 mt-3 max-w-md mx-auto leading-relaxed">${info.desc}</p>
        <div class="aes-test-score">
          <div class="aes-test-score-ring">
            <svg viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(58,53,80,.08)" stroke-width="10"/>
              <circle cx="60" cy="60" r="52" fill="none" stroke="#9D7BC4" stroke-width="10" stroke-linecap="round"
                stroke-dasharray="${(percent/100)*327}" stroke-dashoffset="0"
                transform="rotate(-90 60 60)"/>
            </svg>
            <span class="aes-test-score-num">${percent}%</span>
          </div>
          <p class="text-sm text-ink/55 mt-3">${r.totalCorrect} of ${r.total} correct</p>
        </div>
        <div class="aes-test-breakdown">
          ${r.breakdown.map((b) => {
            const pct = b.total > 0 ? Math.round((b.correct / b.total) * 100) : 0;
            return `
              <div class="aes-test-bd-row">
                <span class="aes-test-bd-level">${b.level}</span>
                <div class="aes-test-bd-bar"><div class="aes-test-bd-fill" style="width:${pct}%"></div></div>
                <span class="aes-test-bd-count">${b.correct}/${b.total}</span>
              </div>`;
          }).join('')}
        </div>
        <div class="aes-test-actions">
          <button class="aes-btn aes-btn-ghost" data-test-retry>Пройти заново</button>
          <a href="courses.html" class="aes-btn aes-btn-primary">Найти курс</a>
        </div>
      </div>`;
  }

  /* ---------- Actions ---------- */
  function start() {
    state.current = 0;
    state.answers = [];
    state.finished = false;
    state.result = null;
    state.activeQuestions = buildTest();
    renderQuestion();
  }

  function answer(idx) {
    state.answers[state.current] = idx;
    state.current++;
    if (state.current >= state.activeQuestions.length) {
      state.finished = true;
      state.result = calculateResult();
      renderResult();
    } else {
      renderQuestion();
    }
  }

  function retry() {
    state.current = 0;
    state.answers = [];
    state.finished = false;
    state.result = null;
    renderIntro();
  }

  /* ---------- Helpers ---------- */
  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }

  /* ---------- Wiring ---------- */
  function wire() {
    const root = $('#level-test-root');
    if (!root) return;
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-test-start]')) { e.preventDefault(); start(); return; }
      if (e.target.closest('[data-test-retry]')) { e.preventDefault(); retry(); return; }
      const opt = e.target.closest('[data-answer]');
      if (opt) { e.preventDefault(); answer(parseInt(opt.getAttribute('data-answer'), 10)); }
    });
  }

  /* ---------- Init ---------- */
  function init() {
    if (!$('#level-test-root')) return;
    renderIntro();
    wire();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }

  global.AESLevelTest = { start, retry };
})(window);
