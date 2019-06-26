var gulp = require('gulp');
var babel = require('gulp-babel');
var notify = require('gulp-notify');
var gulpCopy = require('gulp-copy');

const handleError = notify.onError({
    title: 'Gulp Error: <%= error.plugin %>',
    message: '<%= error.name %>: <%= error.toString() %>',
});

gulp.task('es6:server', () => {
    return gulp.src(['src/server/**/*.js'])
    .pipe(babel().on('error', handleError))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', () => {
    return gulp.src('src/client/views/**')
               .pipe(gulpCopy('dist', { prefix: 2 }));
});

gulp.task('watch', () => {
    gulp.watch(['src/**/*.js'], ['es6:server']);
});

gulp.task('default', ['es6:server', 'copy', 'watch']);