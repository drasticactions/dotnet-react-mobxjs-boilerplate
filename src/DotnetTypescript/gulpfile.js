/// <binding BeforeBuild='default' Clean='clean' />
var gulp = require('gulp');
var webpack = require('webpack-stream');
var del = require('del');

gulp.task('clean', function () {
	return del(['wwwroot/build/**/*.js']);
});

gulp.task('default', function () {
	return gulp.src('src/entry.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('wwwroot/build'));
});