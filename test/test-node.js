/* eslint-disable */
function test() {
  const { window, document } = require('../dist/ssr-window');

  const p = document.querySelectorAll('p');
  const div = document.createElement('div');

  const { width, height } = window.screen;

  window.addEventListener('resize', () => {
    //
  });

  // shouldn't throw an error
}

module.exports = test;
