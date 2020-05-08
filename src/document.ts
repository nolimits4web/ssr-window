const originalDocument = typeof document !== 'undefined' ? document : {};

const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: "",
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {},
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  location: { hash: "" },
};

const doc: Partial<Document> = Object.keys(ssrDocument).reduce((prev, key) => {
  if(prev[key] === void 0) prev[key] = ssrDocument[key];
  return prev;
}, originalDocument);


export default doc;
