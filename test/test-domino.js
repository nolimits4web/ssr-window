/* eslint-disable */
const domino = require('domino');
const { getWindow, getDocument } = require('../package/ssr-window.umd');

function test() {
  global.window = domino.createWindow('', 'http://example.com');
  global.document = global.window.document;

  const window = getWindow();
  const document = getDocument();
}

module.exports = test;
