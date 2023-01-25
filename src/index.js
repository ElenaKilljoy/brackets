module.exports = function check(str, bracketsConfig) {
  let result = false;
  let resultStr = str;
  let i = 0;
  let x = 1;
  let y = 0;
    while (y < bracketsConfig.length) {
      while (x < resultStr.length) {
        if (resultStr[i] + resultStr[x] === bracketsConfig[y][0] + bracketsConfig[y][1]) {
          resultStr = resultStr.slice(0, i) + resultStr.slice(x + 1, resultStr.length);
          result = result || true;
        }
      i = i + 1;
      x = x + 1;
      result = result || false;
      }
    i = 0;
    x = 1;
    y = y + 1;
    }
  y = 0;
  if (resultStr === '' && result === true) {
    return true;
  } else if (result === false) {
    return false;
  } else if (result === true && resultStr !== '') {
      while (result === true && resultStr !== '') {
        result = false;
      while (y < bracketsConfig.length) {
        while (x < resultStr.length) {
          if (resultStr[i] + resultStr[x] === bracketsConfig[y][0] + bracketsConfig[y][1]) {
            resultStr = resultStr.slice(0, i) + resultStr.slice(x + 1, resultStr.length);
            result = result || true;
          }
        i = i + 1;
        x = x + 1;
        result = result || false;
        }
      i = 0;
      x = 1;
      y = y + 1;
      }
    y = 0;
    }
    if (resultStr === '' && result === true) {
      return true;
    } else if (result === false) {
      return false;
    }
    }
}
