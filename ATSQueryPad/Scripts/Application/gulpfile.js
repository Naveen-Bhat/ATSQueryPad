var gulp = require('gulp'),
    browserify = require('gulp-browserify');

gulp.task('scripts', function () {
    gulp.src('start.js')
        .pipe(browserify({
            insertGlobals: false,
            debug: false
        })).pipe(gulp.dest('./build'));
});

gulp.task('minify', function () {
    gulp.src('./build/start.js')
        .pipe(uglify({
            outSourceMap: true
        })).pipe(gulp.dest('./dist'));
});

var watch = require('gulp-watch');
gulp.task('watch', function () {
    watch({ glob: '*.js' }, function () {
        gulp.start('scripts');
    });
})

var tasksToRun = ['scripts'];

// TODO: Enable this, once minification package is installed.
//if (process.env.NODE_ENV === 'Release') {
//    tasksToRun.push('minify');
//}

gulp.task('default', tasksToRun);