/* eslint-disable no-param-reassign */
function extend(target: any = {}, src: any = {}) {
  return Object.keys(src).reduce((prev, key) => {
    if (typeof prev[key] === 'undefined') prev[key] = src[key];
    return prev;
  }, target);
}

export default extend;
