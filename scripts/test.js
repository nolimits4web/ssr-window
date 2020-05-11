/* eslint-disable */
const { getWindow, getDocument } = require('../dist/ssr-window.umd');
const window = getWindow();
const document = getDocument();

const p = document.querySelectorAll('p');
const div = document.createElement('div');

const { width, height } = window.screen;

window.addEventListener('resize', () => {
  //
});
