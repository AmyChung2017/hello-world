﻿var gulp = require('gulp');

gulp.task('default', function() {
  console.info('------------BEGIN Default Task-----------------------');
  console.log('这是gulpfile_test的default任务');
  console.info('------------END Default Task-----------------------');
});

gulp.task('zpy', function() {
  console.info('------------BEGIN Zpy Task-----------------------');
  console.log('这是gulpfile_test的zpy任务');
  console.info('------------END Zpy Task-----------------------');
});