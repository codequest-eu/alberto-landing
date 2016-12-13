var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('pug', function buildHTML() {
  return gulp.src('index.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('.'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('pug:watch', function () {
  gulp.watch('./index.pug', ['pug']);
});

gulp.task('default', ['sass', 'pug','sass:watch', 'pug:watch']);
