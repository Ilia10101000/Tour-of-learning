let {src,dest} = require('gulp');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');

function taskAll(cb){
    taskJS(cb)
    taskCSS(cb)
    cb()
};

function taskJS(cb){
    return src('js.js')
    .pipe(uglify())
    .pipe(dest('dist'))
};
function taskCSS(cb){
    return src('css.css')
    .pipe(cleanCSS())
    .pipe(dest('dist'))
};

exports.default = taskAll