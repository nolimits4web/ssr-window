import extend from './extend';
import { ssrDocument } from './document';

const win: Partial<Window> = typeof window !== 'undefined' ? window : {};

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

extend(win, ssrWindow);

export default win;
export { win, ssrWindow };
