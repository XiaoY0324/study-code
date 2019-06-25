var gulp = require('gulp');
var babel = require('gulp-babel');
var notify = require('gulp-notify');

const handleError = notify.onError({
    title: 'Gulp Error: <%= error.plugin %>',
    message: '<%= error.name %>: <%= error.toString() %>',
});

gulp.task('es6:server', () => {
    return gulp.src(['./src/server/**/*s.js'])
    .pipe(babel().on('error', handleError))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['es6:server']);