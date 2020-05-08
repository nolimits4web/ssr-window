/* eslint-disable no-param-reassign */
function extend(target: any, src: any) {
  Object.keys(src).forEach((key) => {
    if (typeof target[key] === 'undefined') target[key] = src[key];
    else if (
      typeof src[key] === 'object' &&
      src[key].constructor === Object &&
      Object.keys(src[key]).length > 0
    ) {
      extend(target[key], src[key]);
    }
  });
}

export default extend;
