let deepKey = function (obj, key, index = 0) {
  if (!key) {
    return obj;
  }
  if (key.indexOf(".") <= -1) {
    return obj[key];
  }
  let keyArr = key.split(".");
  if (index !== keyArr.length - 1 && obj[keyArr[index]]) {
    return deepKey(obj[keyArr[index]], key, index + 1);
  } else {
    return obj[keyArr[index]];
  }
}
export default deepKey
