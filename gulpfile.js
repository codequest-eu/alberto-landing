var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var awspublish = require('gulp-awspublish');
var gutil = require('gulp-util');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('pug', function buildHTML() {
  return gulp.src('index.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('pug:watch', function () {
  gulp.watch('./index.pug', ['pug']);
});

gulp.task('image', function () {
  return gulp.src('./image/**/*.png')
    .pipe(gulp.dest('./dist/image'))
})

gulp.task('image:watch', function () {
  gulp.watch('./image', ['image'])
})

gulp.task('js', function(){
  gulp.src('./app/*.js')
    .pipe(gulp.dest('./dist/app'))
});
gulp.task('js:watch', function(){
  gulp.watch('./app/*.js', ['js'])
})

gulp.task('jquery', function(){
  gulp.src('./jquery/*.js')
    .pipe(concat('jquery-3.1.1.js'))
    .pipe(gulp.dest('./dist/jquery'))
});
gulp.task('jquery:watch', function(){
  gulp.watch('./jquery/*.js', ['jquery'])
})

gulp.task('default', ['image', 'sass', 'pug','sass:watch', 'pug:watch', 'image:watch', 'js', 'js:watch', 'jquery','jquery:watch']);
