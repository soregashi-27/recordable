const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .browserSync({
    proxy: '127.0.0.1',
    open: false //browserを自動で開かない
  })
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')

// Ready to Deploy
//  mix.browserSync('OriginalDomain or IPアドレスを記述')
//  .js('resources/js/app.js', 'public/js')
//  .sass('resources/sass/app.scss', 'public/css')
//  .version()
