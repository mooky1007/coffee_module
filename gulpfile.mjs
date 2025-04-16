// @ts-nocheck

import { watch, src, dest, series, parallel } from 'gulp';
import fileIncluder from 'gulp-file-include';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import postcss from 'gulp-postcss';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'autoprefixer';
import prettier from 'gulp-prettier';
import esbuild from 'gulp-esbuild';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
const reload = browserSync.reload;
const sass = gulpSass(dartSass);

export const js = () => {
    return src('src/js/main.js')
        .pipe(
            plumber({
                errorHandler(err) {
                    console.error('JS Error:', err.message);
                    this.emit('end');
                },
            })
        )
        .pipe(
            esbuild({
                outfile: 'main.js',
                bundle: true,
                // minify: true,
                // target: ['es2015'], // 트랜스파일 타겟
                // platform: 'browser',
            })
        )
        .pipe(dest('dist'))
        .pipe(reload({ stream: true }));
};

export const html = () => {
    return src(`src/index.html`)
        .pipe(replace('../', './'))
        .pipe(dest('./'))
        .pipe(reload({ stream: true }));
};
export const scss = () => {
    return src(`src/scss/main.scss`)
        .pipe(
            plumber({
                errorHandler(err) {
                    console.error('SCSS Error:', err.message);
                    this.emit('end');
                },
            })
        )
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(
            cleanCSS({
                level: 2,
                compatibility: '*',
            })
        )
        .pipe(prettier())
        .pipe(
            replace(/([^\{]+)\{([^\}]+)\}/g, (match, p1, p2) => {
                const rules = p2.replace(/\s+/g, ' ').trim();
                return `${p1}{${rules}}\n`;
            })
        )
        .pipe(replace(/^\s*[\r\n]/gm, ''))
        .pipe(dest('dist'))
        .pipe(reload({ stream: true }));
};
export const build = parallel(js, scss);

export const serve = () => {
    browserSync.init({
        server: {
            baseDir: './',
        },
        port: 5500,
        open: false,
        notify: false,
    });

    watch('src/*.html', html);
    watch('src/**/*.js', js);
    watch('src/**/*.scss', scss);
};
