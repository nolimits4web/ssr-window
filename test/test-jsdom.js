/* eslint-disable */
function test() {
  const { JSDOM } = require('jsdom');

  const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

  global.window = dom.window;
  global.document = window.document;

  require('../dist/ssr-window');
  // shouldn't throw an error
}

module.exports = test;
