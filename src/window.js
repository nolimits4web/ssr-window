import document from './document';

const win = (typeof window === 'undefined') ? {
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
} : window; // eslint-disable-line

export default win;
