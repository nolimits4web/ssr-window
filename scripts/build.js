const path = require('path');
const fs = require('fs');
const rollup = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const Terser = require('terser');
const pkg = require('../package.json');

const outDir = process.env.NODE_ENV === 'production' ? 'package' : 'build';

const date = {
  day: new Date().getDate(),
  month: 'January February March April May June July August September October November December'.split(
    ' ',
  )[new Date().getMonth()],
  year: new Date().getFullYear(),
};

const version = process.env.VERSION || pkg.version;

const banner = `
/**
 * SSR Window ${version}
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * Copyright ${date.year}, ${pkg.author}
 *
 * Licensed under ${pkg.license}
 *
 * Released on: ${date.month} ${date.day}, ${date.year}
 */
`.trim();

function buildUMD() {
  rollup
    .rollup({
      input: path.resolve(__dirname, '../src/ssr-window.ts'),
      plugins: [resolve(), typescript()],
    })
    .then((bundle) => {
      return bundle.write({
        strict: true,
        name: 'ssrWindow',
        format: 'umd',
        file: path.resolve(__dirname, `../${outDir}/ssr-window.umd.js`),
        sourcemap: true,
        sourcemapFile: path.resolve(
          __dirname,
          `../${outDir}/ssr-window.umd.js.map`,
        ),
        banner,
      });
    })
    .then((bundle) => {
      const result = bundle.output[0];
      const minified = Terser.minify(result.code, {
        sourceMap: {
          content: result.map,
          filename: `ssr-window.umd.min.js`,
          url: `ssr-window.umd.min.js.map`,
        },
        output: {
          preamble: banner,
        },
      });
      fs.writeFileSync(
        path.resolve(__dirname, `../${outDir}/ssr-window.umd.min.js`),
        minified.code,
      );
      fs.writeFileSync(
        path.resolve(__dirname, `../${outDir}/ssr-window.umd.min.js.map`),
        minified.map,
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

function buildESM() {
  rollup
    .rollup({
      input: path.resolve(__dirname, '../src/ssr-window.ts'),
      plugins: [resolve(), typescript()],
      onwarn() {
        // eslint-disable-next-line
        return;
      },
    })
    .then((bundle) => {
      return bundle.write({
        strict: true,
        format: 'esm',
        file: path.resolve(__dirname, `../${outDir}/ssr-window.esm.js`),
        sourcemap: false,
        banner,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

buildUMD();
buildESM();
