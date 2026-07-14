/* ============================================================
   AES Paid Courses — Loader
   Combines data from paid-course-data-1/2/3.js
   ============================================================ */
(function (global) {
  'use strict';

  global.AESData = global.AESData || {};

  const PAID_COURSES = [
    global.AESData._paid_course_1,
    global.AESData._paid_course_2,
    global.AESData._paid_course_3,
    global.AESData._paid_course_4,
    global.AESData._paid_course_5,
    global.AESData._paid_course_6,
    global.AESData._paid_course_7,
    global.AESData._paid_course_8
  ].filter(Boolean);

  global.AESData.PAID_COURSES = PAID_COURSES;
})(window);
