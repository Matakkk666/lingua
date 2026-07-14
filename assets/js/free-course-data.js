/* ============================================================
   AES Free Course Data — Flattener
   Takes the nested FREE_COURSE (levels → units → lessons) from
   course-data.js and flattens it into the same flat-lessons
   format used by paid-course-viewer.js.

   The resulting course object is pushed into AESData.PAID_COURSES
   so that paid-course-viewer.js can find it via ?course=c-free.
   No payment is required — the access gate is auth-only (handled
   in free-course.html).
   ============================================================ */
(function (global) {
  'use strict';

  global.AESData = global.AESData || {};

  var FREE = global.AESData.FREE_COURSE;
  if (!FREE) return;

  var lessons = [];

  (FREE.levels || []).forEach(function (level) {
    (level.units || []).forEach(function (unit) {
      (unit.lessons || []).forEach(function (lesson) {
        lessons.push({
          id: lesson.id,
          topic: lesson.title,
          objective: (lesson.reading && lesson.reading.title) || unit.desc || lesson.title,
          estimatedTime: '25 минут',
          reading: lesson.reading,
          video: lesson.video,
          quiz: lesson.quiz,
          homework: lesson.homework
        });
      });
    });
  });

  var flatCourse = {
    id: FREE.id,
    title: FREE.title,
    level: 'A1–A2',
    duration: lessons.length + ' уроков',
    totalLessons: lessons.length,
    tagline: FREE.tagline,
    isFree: true,
    lessons: lessons
  };

  global.AESData.PAID_COURSES = global.AESData.PAID_COURSES || [];
  global.AESData.PAID_COURSES.push(flatCourse);

  global.AESData.FREE_COURSE_FLAT = flatCourse;
})(window);
