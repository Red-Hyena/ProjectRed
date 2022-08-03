// Portfolio (Main)
const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function portfolioBuild() {
    return src('sass/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
};

function portfolioWatch() {
    watch(['sass/*.scss'], portfolioBuild)
};

exports.portfolio = series(portfolioBuild, portfolioWatch);

// Care Home 
function careHomeBuild() {
    return src('sass/carehomeSASS/*.scss')
    .pipe(sass())
    .pipe(dest('css/carehomeCSS'))
};

function careHomeWatch() {
    watch(['sass/carehomeSASS/*.scss'], careHomeBuild)
};

exports.carehome = series(careHomeBuild, careHomeWatch);

// Cupcake Shop
function cupcakeBuild() {
    return src('sass/cupcakeSASS/*.scss')
    .pipe(sass())
    .pipe(dest('css/cupcakeCSS'))
};

function cupcakeWatch() {
    watch(['sass/cupcakeSASS/*.scss'], cupcakeBuild)
};

exports.cupcake = series(cupcakeBuild, cupcakeWatch);

// Sportsball FC
function sportsballBuild() {
    return src('sass/sportsballSASS/*.scss')
    .pipe(sass())
    .pipe(dest('css/sportsballCSS'))
};

function sportsballWatch() {
    watch(['sass/sportsballSASS/*.scss'], sportsballBuild)
};

exports.sportsball = series(sportsballBuild, sportsballWatch);