module.exports = check;

function check(str, bracketsConfig) {
  let objEnableBrackets = {};
  let objConfigBrackets = {};

  for (let char of str) {
    objEnableBrackets[char] = (objEnableBrackets[char] || 0) + 1;
  }
  for (let key in objEnableBrackets) {
    if (key === '(') {
      if (objEnableBrackets[key] !== objEnableBrackets[')']) return false;
    }
    if (key === '[') {
      if (objEnableBrackets[key] !== objEnableBrackets[']']) return false;
    }
    if (key === '{') {
      if (objEnableBrackets[key] !== objEnableBrackets['}']) return false;
    }

  }
  return true;
}
