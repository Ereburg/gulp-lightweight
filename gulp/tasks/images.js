module.exports = function () {
  $.gulp.task('image', () => {
    return $.gulp.src('./app/images/**/*.{png,jpg,jpeg}')
      .pipe($.plugins.imagemin([
        $.compress({
          progressive: true,
          loops: 4,
          min: 70,
          max: 80,
          quality: 'high'
        }),
        $.plugins.imagemin.gifsicle(),
        $.plugins.imagemin.optipng({ optimizationLevel: 3 }),
        $.plugins.imagemin.svgo({ plugins: [{ removeViewBox: false }, { cleanupIDs: false }] })
      ]))
      .pipe($.gulp.dest('./build/images/1'));
  });

  $.gulp.task("webp", () => {
    return $.gulp.src("./build/images/**/*.{png,jpg,jpeg}")
      .pipe($.plugins.webp({ quality: 80 }))
      .pipe($.gulp.dest("./build/images"));
  });

  $.gulp.task("sprite", () => {
    return $.gulp.src("./app/images/**/sp-*.svg")
      .pipe($.plugins.svgstore({}))
      .pipe($.plugins.rename("sprite.svg"))
      .pipe($.gulp.dest("./build/images"));
  });
};