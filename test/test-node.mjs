/* eslint-disable */
import { getWindow, getDocument } from '../package/ssr-window.esm.js';

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

export default test;
