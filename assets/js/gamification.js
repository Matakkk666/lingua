/* ============================================================
   AES Gamification — daily streak + daily goal
   Self-contained. No dependencies required.
   localStorage keys:
     aes_streak            = { current, longest, lastDate }
     aes_daily             = { date, count }
     aes_daily_goal        = <number>  (lessons per day target)
     aes_progress_snapshot = <number>  (total completed lessons seen)
   Detects lesson completions by watching the existing progress keys:
     aes_course_progress_<id>  (free courses: array of lesson ids)
     aes_paid_progress_<id>    (paid courses: { lessonId: { allDone } })
   ============================================================ */
(function () {
  'use strict';
  var LS = window.localStorage;
  var DEFAULT_GOAL = 3;

  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  function daysBetween(a, b) {
    var da = new Date(a + 'T00:00:00');
    var db = new Date(b + 'T00:00:00');
    return Math.round((db - da) / 86400000);
  }
  function readJSON(key, def) {
    try { var v = LS.getItem(key); return v ? JSON.parse(v) : def; }
    catch (e) { return def; }
  }
  function writeJSON(key, val) {
    try { LS.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  function getGoal() {
    var g = parseInt(LS.getItem('aes_daily_goal'), 10);
    return (g && g > 0) ? g : DEFAULT_GOAL;
  }
  function setGoal(n) {
    n = parseInt(n, 10);
    if (n && n > 0) LS.setItem('aes_daily_goal', String(n));
  }

  function countCompleted() {
    var total = 0;
    for (var i = 0; i < LS.length; i++) {
      var k = LS.key(i);
      if (!k) continue;
      if (k.indexOf('aes_course_progress_') === 0) {
        var arr = readJSON(k, []);
        if (Array.isArray(arr)) total += arr.length;
      } else if (k.indexOf('aes_paid_progress_') === 0) {
        var obj = readJSON(k, {});
        if (obj && typeof obj === 'object') {
          Object.keys(obj).forEach(function (id) {
            if (obj[id] && obj[id].allDone) total++;
          });
        }
      }
    }
    return total;
  }

  function getStreakRaw() {
    return readJSON('aes_streak', { current: 0, longest: 0, lastDate: null });
  }
  // Effective current streak: valid only if last activity was today or yesterday.
  function currentStreak() {
    var s = getStreakRaw();
    if (!s.lastDate) return 0;
    var diff = daysBetween(s.lastDate, todayStr());
    return (diff === 0 || diff === 1) ? (s.current || 0) : 0;
  }
  function longestStreak() { return getStreakRaw().longest || 0; }
  function isActiveToday() {
    var s = getStreakRaw();
    return s.lastDate === todayStr();
  }

  function getDaily() {
    var d = readJSON('aes_daily', { date: null, count: 0 });
    if (d.date !== todayStr()) d = { date: todayStr(), count: 0 };
    return d;
  }

  function recordActivity(delta) {
    if (!delta || delta < 1) delta = 1;
    var t = todayStr();

    var daily = readJSON('aes_daily', { date: null, count: 0 });
    if (daily.date !== t) daily = { date: t, count: 0 };
    daily.count += delta;
    writeJSON('aes_daily', daily);

    var s = getStreakRaw();
    if (s.lastDate === t) {
      // already counted today
    } else if (s.lastDate && daysBetween(s.lastDate, t) === 1) {
      s.current = (s.current || 0) + 1;
      s.lastDate = t;
    } else {
      s.current = 1;
      s.lastDate = t;
    }
    if ((s.current || 0) > (s.longest || 0)) s.longest = s.current;
    writeJSON('aes_streak', s);

    try {
      window.dispatchEvent(new CustomEvent('aes:streak-update', {
        detail: { streak: s.current, daily: daily.count, goal: getGoal() }
      }));
    } catch (e) {}
  }

  // Compare current completion count to the stored snapshot; award activity for new completions.
  function checkActivity() {
    var total = countCompleted();
    var raw = LS.getItem('aes_progress_snapshot');
    var snap = raw !== null ? parseInt(raw, 10) : null;
    if (snap === null) {
      // First ever run in this browser: seed snapshot, don't backfill streak.
      LS.setItem('aes_progress_snapshot', String(total));
      return;
    }
    if (total > snap) recordActivity(total - snap);
    LS.setItem('aes_progress_snapshot', String(total));
  }

  window.AESGamification = {
    checkActivity: checkActivity,
    recordActivity: recordActivity,
    countCompleted: countCompleted,
    currentStreak: currentStreak,
    longestStreak: longestStreak,
    isActiveToday: isActiveToday,
    getDaily: getDaily,
    getGoal: getGoal,
    setGoal: setGoal,
    todayStr: todayStr
  };

  function boot() {
    checkActivity();
    // Catch completions that happen within the same page session (e.g. finishing a lesson).
    setInterval(checkActivity, 15000);
    window.addEventListener('storage', function (e) {
      if (e && e.key && (e.key.indexOf('aes_course_progress_') === 0 || e.key.indexOf('aes_paid_progress_') === 0)) {
        checkActivity();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
