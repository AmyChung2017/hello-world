var gulp = require('gulp');

gulp.task('default', function() {
  console.info('------------BEGIN Default Task-----------------------');
  console.log('这是gulpfile的default任务');

  gulp.src();

  console.info('------------END Default Task-----------------------');
});

gulp.task('zpy', function() {
  console.info('------------BEGIN Zpy Task-----------------------');
  console.log('这是gulpfile的zpy任务');
  console.info('------------END Zpy Task-----------------------');

  //使用babel
  for(let i = 0; i < 3; i++) {
    console.info('尝试ES6，打印3次');
  }
});