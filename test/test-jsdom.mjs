/* eslint-disable */
import { JSDOM } from 'jsdom';
import { getWindow, getDocument } from '../package/ssr-window.esm.js';

function test() {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

  global.window = dom.window;
  global.document = global.window.document;

  const window = getWindow();
  const document = getDocument();
}

export default test;
