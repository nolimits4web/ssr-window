/* eslint-disable */
const { getWindow, getDocument } = require('../package/ssr-window.umd');

function test() {
  const window = getWindow();
  const document = getDocument();

  const p = document.querySelectorAll('p');
  const div = document.createElement('div');

  const { width, height } = window.screen;

  window.addEventListener('resize', () => {
    //
  });

  // shouldn't throw an error
}

module.exports = test;
