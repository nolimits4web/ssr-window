import document from './document';

const originalWindow = typeof window !== 'undefined' ? window : {};

const ssrWindow = {
  document,
  navigator: {
    userAgent: '',
  },
  location: {},
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

const win: Partial<Window> = Object.keys(ssrWindow).reduce((prev, key) => {
  if(prev[key] === void 0) prev[key] = ssrWindow[key];
  return prev;
}, originalWindow);

export default win;
