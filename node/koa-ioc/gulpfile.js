const gulp = require('gulp');
const entry = './src/server/**/*.js';
const babel = require('gulp-babel');
const watch = require('gulp-watch');

function builddev() {
    return watch(entry, { ignoreInitial: false }, function () {
        gulp.src(entry)
        .pipe(babel({
            babelrc: false, // 需要自己独立的编译 很重要 忽略外面的.babelrc文件
            "plugins": [
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                "@babel/plugin-transform-modules-commonjs"
            ] // 需要安装@babel/plugin-transform-modules-commonjs
        })).pipe(gulp.dest('dist'));
    })
}

// Gulp 4抛弃了依赖参数（dependency parameter），用执行函数来代替：
// gulp.series 用于串行（顺序）执行
// gulp.parallel 用于并行执行

let build = gulp.series(builddev);

// if (process.env.NODE_ENV == "production") {
//     build = gulp.series(buildprod, buildconfig);
// }



gulp.task('default', build);