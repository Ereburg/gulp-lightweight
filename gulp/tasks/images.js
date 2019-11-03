module.exports = function () {
  $.gulp.task("tiny", () => {
    return $.gulp.src("./app/images/*.{png,jpg,jpeg}")
      .pipe($.plugins.tinypngWeb({ verbose: true }))
      .pipe($.gulp.dest("./build/images/"));
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
  // $.gulp.task("svg", () => {
  //   return $.gulp.src("./app/images/**/sp-*.svg")
  //     .pipe($.plugins.svgSprite())
  //     // .pipe($.plugins.rename("sprite.svg"))
  //     .pipe($.gulp.dest("./build/images"));
  // });
};