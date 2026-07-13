/* ============================================================
   AES Main — page bootstrap, rendering, interactions
   Depends on: data.js (AESData), cart.js (AESCart)
   ============================================================ */
(function () {
  'use strict';
  const D = window.AESData || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const accentMap = {
    lavender: { bg: 'bg-lavender/45', text: 'text-ink', dot: 'bg-accent' },
    mint: { bg: 'bg-mint/50', text: 'text-ink', dot: 'bg-emerald' },
    dustyPink: { bg: 'bg-dustyPink/45', text: 'text-ink', dot: 'bg-rose-400' },
    cream: { bg: 'bg-cream', text: 'text-ink', dot: 'bg-amber-400' }
  };
  const acc = (k) => accentMap[k] || accentMap.lavender;

  /* ---------- Glyphs (inline SVG) ---------- */
  const GLYPHS = {
    wave: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 24c4-9 8-9 12 0s8 9 12 0 8-9 12 0"/><path d="M4 32c4-6 8-6 12 0s8 6 12 0 8-6 12 0" opacity=".5"/></svg>',
    path: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 36c0-8 6-12 12-12s12 4 12-4 6-12 12-4"/></svg>',
    chat: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14h28a3 3 0 013 3v12a3 3 0 01-3 3H22l-8 6v-6h-4a3 3 0 01-3-3V17a3 3 0 013-3z"/><circle cx="18" cy="23" r="1.4" fill="currentColor"/><circle cx="24" cy="23" r="1.4" fill="currentColor"/><circle cx="30" cy="23" r="1.4" fill="currentColor"/></svg>',
    chart: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 38h32"/><path d="M14 38V26M22 38V14M30 38V20M38 38V8"/></svg>'
  };

  /* ---------- Home: features bento ---------- */
  function renderFeatures() {
    const root = $('#features-grid');
    if (!root || !D.FEATURES) return;
    root.innerHTML = D.FEATURES.map((f, i) => {
      const a = acc(f.accent);
      return `
      <article class="aes-bento reveal ${a.bg} ${f.span}" style="--d:${i * 0.08}s">
        <div class="aes-bento-glyph">${GLYPHS[f.glyph] || GLYPHS.wave}</div>
        <h3 class="font-display text-2xl md:text-3xl text-ink mt-5">${f.title}</h3>
        <p class="text-ink/65 mt-2 max-w-sm">${f.desc}</p>
      </article>`;
    }).join('');
  }

  /* ---------- Home: curriculum zigzag ---------- */
  function renderCurriculum() {
    const root = $('#curriculum-track');
    if (!root || !D.CURRICULUM) return;
    root.innerHTML = D.CURRICULUM.map((c, i) => {
      const a = acc(c.accent);
      const flip = i % 2 === 1;
      return `
      <div class="aes-zig reveal ${flip ? 'aes-zig-flip' : ''}" style="--d:${i * 0.1}s">
        <div class="aes-zig-art ${a.bg}">
          <span class="aes-zig-stage">${c.stage}</span>
          <span class="aes-zig-blob"></span>
        </div>
        <div class="aes-zig-body">
          <span class="aes-eyebrow">Stage ${c.stage}</span>
          <h3 class="font-display text-3xl md:text-4xl text-ink mt-3">${c.title}</h3>
          <p class="text-ink/65 mt-4 text-lg leading-relaxed">${c.desc}</p>
        </div>
      </div>`;
    }).join('');
  }

  /* ---------- Home: testimonials ---------- */
  function renderTestimonials() {
    const root = $('#testimonials-track');
    if (!root || !D.TESTIMONIALS) return;
    root.innerHTML = D.TESTIMONIALS.map((t, i) => {
      const a = acc(t.accent);
      const rot = i % 2 === 0 ? '-1.4deg' : '1.2deg';
      const initials = t.name.split(' ').map((w) => w[0]).slice(0, 2).join('');
      return `
      <figure class="aes-quote reveal ${a.bg}" style="--d:${i * 0.07}s; --rot:${rot}">
        <div class="aes-quote-mark">&ldquo;</div>
        <blockquote class="text-ink/80 leading-relaxed">${t.quote}</blockquote>
        <figcaption class="aes-quote-by">
          <span class="aes-avatar">${initials}</span>
          <span>
            <span class="block font-medium text-ink">${t.name}</span>
            <span class="block text-sm text-ink/55">${t.role}</span>
          </span>
        </figcaption>
      </figure>`;
    }).join('');
  }

  /* ---------- Catalog: courses grid + filter tabs ---------- */
  let activeFilter = 'all';

  function courseCard(c) {
    const a = acc(c.accent);
    const [g1, g2] = c.art;
    return `
    <article class="aes-course reveal" style="--d:0.05s">
      <div class="aes-course-art" style="background:linear-gradient(135deg, ${g1}, ${g2});">
        <span class="aes-course-level">${c.level}</span>
        <span class="aes-course-blob"></span>
        <span class="aes-course-price">${c.price === 0 ? 'Free' : c.price.toLocaleString('ru-RU') + ' ₽'}</span>
        ${c.oldPrice ? '<span class="aes-discount-badge">-50%</span>' : ''}
      </div>
      <div class="aes-course-body">
        <h3 class="font-display text-2xl text-ink">${c.title}</h3>
        <p class="text-ink/60 mt-2 text-sm leading-relaxed">${c.tagline}</p>
        <ul class="aes-course-meta">
          <li><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>${c.duration}</li>
          <li><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>${c.lessons} уроков</li>
        </ul>
        <div class="aes-course-highlights">
          ${c.highlights.map((h) => `<span class="aes-chip">${h}</span>`).join('')}
        </div>
        <div class="aes-course-foot">
          <div class="aes-price-wrap">
            ${c.oldPrice ? '<span class="aes-old-price">' + c.oldPrice.toLocaleString('ru-RU') + ' ₽</span>' : ''}
            <span class="aes-course-total">${c.price === 0 ? 'Бесплатно' : c.price.toLocaleString('ru-RU') + ' ₽'}</span>
          </div>
          <button class="aes-buy" data-buy="${c.id}">Купить курс</button>
        </div>
      </div>
    </article>`;
  }

  function renderCourses() {
    const root = $('#courses-grid');
    if (!root || !D.COURSES) return;
    const list = activeFilter === 'all' ? D.COURSES : D.COURSES.filter((c) => c.category === activeFilter);
    root.innerHTML = list.length
      ? list.map(courseCard).join('')
      : `<p class="col-span-full text-center text-ink/55 py-16 font-display text-xl">В этой категории пока нет курсов.</p>`;
    // re-observe newly created reveal nodes
    observeReveals(root);
  }

  function wireFilters() {
    const bar = $('#filter-bar');
    if (!bar) return;
    bar.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn) return;
      activeFilter = btn.getAttribute('data-filter');
      $$('[data-filter]', bar).forEach((b) => b.classList.toggle('is-active', b === btn));
      renderCourses();
    });
  }

  /* ---------- Mobile menu ---------- */
  function wireMenu() {
    const btn = $('#menu-btn');
    const menu = $('#mobile-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('aes-locked', open);
    });
    $$('a', menu).forEach((a) => a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('aes-locked');
    }));
  }

  /* ---------- Smooth scroll for in-page anchors ---------- */
  function wireSmoothScroll() {
    $$('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = $(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  let io;
  function observeReveals(scope = document) {
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible');
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }
    $$('.reveal:not(.is-visible)', scope).forEach((el) => io.observe(el));
  }

  /* ---------- Header shrink on scroll + active nav ---------- */
  function wireHeader() {
    const header = $('#site-header');
    if (header) {
      const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
    // active nav link based on body[data-page]
    const page = document.body.getAttribute('data-page');
    if (page) $$('[data-nav]').forEach((a) => a.classList.toggle('is-active', a.getAttribute('data-nav') === page));
  }

  /* ---------- Marquee (hero badge ring text) ---------- */
  // Pure CSS animation; nothing to wire here.

  /* ---------- Init ---------- */
  function init() {
    renderFeatures();
    renderCurriculum();
    renderTestimonials();
    renderCourses();
    wireFilters();
    wireMenu();
    wireSmoothScroll();
    wireHeader();
    observeReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
