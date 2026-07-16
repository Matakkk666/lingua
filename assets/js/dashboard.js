/* ============================================================
   AES Dashboard — progress overview on "\u041c\u043e\u0438 \u043a\u0443\u0440\u0441\u044b" (my-courses.html)
   Depends on: AESAuth, AESPayment, AESData, AESAvatar, AESGamification, AESCertificate
   ============================================================ */
(function () {
  'use strict';

  function paidCompleted(courseId) {
    try {
      var o = JSON.parse(localStorage.getItem('aes_paid_progress_' + courseId) || '{}');
      return Object.keys(o).filter(function (k) { return o[k] && o[k].allDone; }).length;
    } catch (e) { return 0; }
  }

  function ring(pct) {
    var R = 26, C = 2 * Math.PI * R;
    pct = Math.max(0, Math.min(1, pct || 0));
    var off = C * (1 - pct);
    return '<svg width="64" height="64" viewBox="0 0 64 64" class="aes-ring">'
      + '<circle class="aes-ring-bg" cx="32" cy="32" r="' + R + '" fill="none" stroke-width="6"/>'
      + '<circle class="aes-ring-fg" cx="32" cy="32" r="' + R + '" fill="none" stroke-width="6" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/>'
      + '</svg>';
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function stat(label, value, sub) {
    return '<div class="aes-dash-card">'
      + '<p class="text-3xl font-display text-ink">' + value + '</p>'
      + '<p class="text-sm text-ink/55 mt-1">' + label + '</p>'
      + (sub ? '<p class="text-xs text-ink/45 mt-1">' + sub + '</p>' : '')
      + '</div>';
  }

  function render() {
    var section = document.getElementById('dashboard-section');
    var root = document.getElementById('aes-dashboard');
    if (!section || !root) return;

    var user = window.AESAuth && window.AESAuth.getUser && window.AESAuth.getUser();
    if (!user) { section.style.display = 'none'; return; }

    var purchases = window.AESPayment ? window.AESPayment.getPurchases() : [];
    var mine = purchases.filter(function (p) { return p.email === user.email; })[0];
    var courseIds = mine ? mine.courseIds : [];
    var all = (window.AESData && window.AESData.PAID_COURSES) || [];
    var myCourses = all.filter(function (c) { return courseIds.indexOf(c.id) >= 0; });
    if (!myCourses.length) { section.style.display = 'none'; return; }

    var G = window.AESGamification;
    var totalLessons = 0, doneLessons = 0;
    var per = myCourses.map(function (c) {
      var total = c.totalLessons || (c.lessons ? c.lessons.length : 0);
      var done = paidCompleted(c.id);
      if (total && done > total) done = total;
      totalLessons += total; doneLessons += done;
      return { c: c, total: total, done: done, pct: total ? done / total : 0 };
    });

    var coins = (window.AESAvatar && window.AESAvatar.loadCoins) ? window.AESAvatar.loadCoins() : 0;
    var streak = G ? G.currentStreak() : 0;
    var longest = G ? G.longestStreak() : 0;
    var daily = G ? G.getDaily() : { count: 0 };
    var goal = G ? G.getGoal() : 3;

    var html = '<div>'
      + '<h2 class="font-display text-3xl md:text-4xl text-ink mb-6">\u0412\u0430\u0448 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441</h2>'
      + '<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">'
        + stat('\u041a\u0443\u0440\u0441\u043e\u0432 \u043a\u0443\u043f\u043b\u0435\u043d\u043e', myCourses.length, '')
        + stat('\u0423\u0440\u043e\u043a\u043e\u0432 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043e', doneLessons + ' / ' + totalLessons, '')
        + stat('\u041c\u043e\u043d\u0435\u0442\u044b', coins, '')
        + '<div class="aes-dash-card"><p class="text-3xl font-display text-ink">\ud83d\udd25 ' + streak + '</p><p class="text-sm text-ink/55 mt-1">\u0414\u043d\u0435\u0439 \u043f\u043e\u0434\u0440\u044f\u0434</p><p class="text-xs text-ink/45 mt-1">\u0420\u0435\u043a\u043e\u0440\u0434: ' + longest + '</p></div>'
      + '</div>'
      + '<div class="aes-dash-card flex items-center gap-4 mb-8">'
        + ring(goal ? daily.count / goal : 0)
        + '<div><p class="font-display text-xl text-ink">\u0426\u0435\u043b\u044c \u0434\u043d\u044f</p><p class="text-sm text-ink/60 mt-1">' + daily.count + ' \u0438\u0437 ' + goal + ' \u0443\u0440\u043e\u043a\u043e\u0432 \u0441\u0435\u0433\u043e\u0434\u043d\u044f' + (daily.count >= goal ? ' \u2014 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e! \ud83c\udf89' : '') + '</p></div>'
      + '</div>'
      + '<div class="space-y-4">'
        + per.map(function (p) {
            var pctInt = Math.round(p.pct * 100);
            var complete = p.total > 0 && p.done >= p.total;
            return '<div class="aes-dash-card">'
              + '<div class="flex items-center justify-between gap-3 flex-wrap">'
                + '<div class="min-w-0"><p class="font-display text-lg text-ink">' + esc(p.c.title) + '</p><p class="text-xs text-ink/50 mt-1">' + p.done + ' / ' + p.total + ' \u0443\u0440\u043e\u043a\u043e\u0432 \u2022 ' + pctInt + '%</p></div>'
                + (complete
                    ? '<button class="aes-btn aes-btn-primary text-sm" data-cert="' + esc(p.c.id) + '">\ud83c\udf93 \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442</button>'
                    : '<a class="aes-btn text-sm" href="paid-course.html?course=' + encodeURIComponent(p.c.id) + '">\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u2192</a>')
              + '</div>'
              + '<div class="aes-pbar mt-3"><div class="aes-pbar-fill" style="width:' + pctInt + '%"></div></div>'
            + '</div>';
          }).join('')
      + '</div>'
      + '</div>';

    section.style.display = '';
    root.innerHTML = html;

    Array.prototype.forEach.call(root.querySelectorAll('[data-cert]'), function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-cert');
        var c = myCourses.filter(function (x) { return x.id === id; })[0];
        if (c && window.AESCertificate) window.AESCertificate.show(c.title);
      });
    });
  }

  window.addEventListener('aes:auth-success', render);
  window.addEventListener('aes:streak-update', render);
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(render, 850);
    setTimeout(render, 2100);
  });
})();
