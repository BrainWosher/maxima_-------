var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

var paths = {
    styles: {
        // By using src/**/*.sass we're telling gulp to check all folders for any sass file
        src: "src/**/*.sass",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "build/css"
    }

    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
};

// Define tasks after requiring dependencies
function style() {
    return (
        gulp
        .src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream())
    );
}

exports.style = style;

function css() {
    return (
        gulp.src('src/css/*.css')
        .pipe(gulp.dest(paths.styles.dest))
    );
}

exports.css = css;

function fonts() {
    return (
        gulp.src('src/fonts/*.ttf')
        .pipe(gulp.dest('build/fonts'))
    );
}

exports.fonts = fonts;

function reload() {
    browserSync.reload();
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "build/"
        }
    });
    gulp.watch(paths.styles.src, style);
    gulp.watch("buil/*.html", reload);
}
exports.watch = watch

gulp.task('build', gulp.parallel(css, fonts, style));