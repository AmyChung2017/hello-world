var gulp = require('gulp');
var uglify = require('gulp-uglify'); //压缩JS
var glob  = require('glob'); //node-glob

//默认任务
gulp.task('default', function() {
  console.info('------------BEGIN Default Task-----------------------');
  console.log('这是gulpfile的default任务');
  console.info('------------END Default Task-----------------------');
});

gulp.task('test-glob', function(){
  /*glob("gulpfile-list/!*!/!*.js",function (er, files) {
    console.log(files)
  });*/

  /*glob("gulpfile-list/!*!/?.js",function (er, files) {
    console.log(files)
  });*/

  /*glob("gulpfile-list/[p]*!/!*.js", function (er, files) {
    console.log(files);
  });*/

  /*glob("gulpfile-list/!*!/!(f*|g*).js", function (er, files) {
    console.log(files);
  });*/

  /*glob("gulpfile-list/!*!/?(first|gulpfile).js", function (er, files) {
    console.log(files);
  });*/

  /*glob("gulpfile-list/!**!/+(first|copy).js", function (er, files) {
    console.log(files);
  });*/

  /*glob("gulpfile-list/!**!/!*(first|copy).js", function (er, files) {
    console.log(files);
  });*/

  /*glob("gulpfile-list/!**!/@(first|*test).js", function (er, files) {
    console.log(files);
  });*/

  /*glob("@(first|*test).js", {matchBase:true}, function (er, files) {
    console.log(files);
  });*/

  /*glob("gulpfile-list/!*!/!*.js",{nonull:true}, function (er, files) {
    console.log(files);
  });*/

  glob("gulpfile-list/*/*.js",{dot:true}, function (er, files) {
    console.log(files);
  });

});

//编译任务
gulp.task('compile', function() {
  gulp.src('gulpfile-list/src/*.js')
    //.pipe(uglify())
    .pipe(gulp.dest('gulpfile-list/build/minify'));
});

//测试任务
gulp.task('zpy', function() {
  console.info('------------BEGIN Zpy Task-----------------------');
  console.log('这是gulpfile的zpy任务');
  console.info('------------END Zpy Task-----------------------');

  //使用babel
  for(let i = 0; i < 3; i++) {
    console.info('尝试ES6，打印3次');
  }
});