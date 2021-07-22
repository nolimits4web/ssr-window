import testDomino from './test-domino.mjs';
import testJSDOM from './test-jsdom.mjs';
import testNode from './test-node.mjs';

function test() {
  testDomino();
  testJSDOM();
  testNode();
}

test();
