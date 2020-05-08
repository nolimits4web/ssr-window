import extend from './extend';
import document from './document';

const win: Partial<Window> = typeof window !== 'undefined' ? window : {};

const ssrWindow = {
  document,
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
  history: {},
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
};

extend(win, ssrWindow);

export default win;
