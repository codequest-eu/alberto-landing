var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var awspublish = require('gulp-awspublish');

gulp.task('pug', function buildHTML() {
  return gulp.src('index.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
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


gulp.task('publish', function() {

  var publisher = awspublish.create({
    region: 'eu-west-1',
    accessKeyId: 'AKIAJFRBR73W2CXVUXSQ',
    secretAccessKey: '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',
    params: {
      Bucket: 'alberto.codequest.com'
    }
  });

  var headers = {
    'Cache-Control': 'max-age=0, no-transform, public'
  };

  return gulp.src('./dist')
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});



gulp.task('default', ['image', 'sass', 'pug','sass:watch', 'pug:watch', 'image:watch']);
