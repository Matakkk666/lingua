/* ============================================================
   AES Language Courses Loader
   Loads French, German, Spanish course data
   ============================================================ */
(function (global) {
  'use strict';

  global.AESData = global.AESData || {};

  var LANG_COURSES = [
    global.AESData._french_course_1,
    global.AESData._french_course_2,
    global.AESData._french_course_3,
    global.AESData._german_course_1,
    global.AESData._german_course_2,
    global.AESData._german_course_3,
    global.AESData._spanish_course_1,
    global.AESData._spanish_course_2,
    global.AESData._spanish_course_3
  ].filter(Boolean);

  if (global.AESData.PAID_COURSES) {
    global.AESData.PAID_COURSES = global.AESData.PAID_COURSES.concat(LANG_COURSES);
  } else {
    global.AESData.PAID_COURSES = LANG_COURSES;
  }
})(window);
