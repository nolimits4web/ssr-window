const testDomino = require('./test-domino');
const testJSDOM = require('./test-jsdom');
const testNode = require('./test-node');

function test() {
  testDomino();
  testJSDOM();
  testNode();
}

test();
