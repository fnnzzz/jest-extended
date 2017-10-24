export default (object, key) => {
  if (object && typeof object === 'object') {
    return object.hasOwnProperty(key);
  }
  return false;
};
