/* eslint-disable */
import domino from 'domino';
import { getWindow, getDocument } from '../package/ssr-window.esm.js';

function test() {
  global.window = domino.createWindow('', 'http://example.com');
  global.document = global.window.document;

  const window = getWindow();
  const document = getDocument();
}

export default test;
