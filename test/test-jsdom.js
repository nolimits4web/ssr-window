/* eslint-disable */
const { JSDOM } = require('jsdom');
const { getWindow, getDocument } = require('../package/ssr-window.umd');

function test() {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

  global.window = dom.window;
  global.document = global.window.document;

  const window = getWindow();
  const document = getDocument();
}

module.exports = test;
