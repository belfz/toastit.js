var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task(':less', function () {
		return gulp.src('./src/less/toastit.less')
		.pipe(less())
		.pipe(autoprefixer({
    		overrideBrowserslist: ['last 2 versions'],
    		cascade: false
	}))
	.pipe(gulp.dest('./dist'));
});

gulp.task(':uglifyjs', function () {
    return gulp.src('./src/js/toastit.js')
    .pipe(rename('toastit.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.parallel(':less', ':uglifyjs'));