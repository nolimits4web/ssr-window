/* eslint-disable */
function test() {
  const domino = require('domino');

  global.window = domino.createWindow('', 'http://example.com');
  global.document = window.document;

  require('../dist/ssr-window');
  // shouldn't throw an error
}

module.exports = test;
