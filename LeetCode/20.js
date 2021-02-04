//20. Valid Parentheses
/*
닫혔을 때 앞에 그와 같은 부호가 있는지 비교
*/
var isValid = function (s) {
  let stack = [];

  for (let x of s.split('')) {
    switch (x) {
      case ']':
        if (stack[stack.length - 1] === '[') stack.pop();
        else return false;
        break;
      case '}':
        if (stack[stack.length - 1] === '{') stack.pop();
        else return false;
        break;
      case ')':
        if (stack[stack.length - 1] === '(') stack.pop();
        else return false;
        break;
      default:
        stack.push(x);
    }
  }
  return stack.length === 0;
};
