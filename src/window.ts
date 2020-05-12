import extend from './extend';
import { ssrDocument } from './document';

const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: '',
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {},
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
};

function getWindow() {
  const win: Window = typeof window !== 'undefined' ? window : ({} as Window);
  extend(win, ssrWindow);
  return win;
}

export { getWindow, ssrWindow };
