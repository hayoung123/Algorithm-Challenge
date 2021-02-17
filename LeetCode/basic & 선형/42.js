//Trapping-Rain-Water

//배열에 쌓아서 푸는법

const trap = (height) => {
  let answer = 0;
  let stack = [height.shift()];
  for (let h of height) {
    if (stack[stack.length - 1] < h) {
      stack.push(h);
      answer += calc(stack);
      if (stack[0] < h) stack = [h];
    } else {
      stack.push(h);
    }
  }
  return answer;
};

const calc = (stack) => {
  let count = 0;
  const min = Math.min(stack[0], stack[stack.length - 1]);
  for (let i = 1; i < stack.length - 1; i++) {
    if (stack[i] < min) {
      count += min - stack[i];
      stack[i] = min;
    }
  }
  return count;
};

// 투 포인터
const trap = (height) => {
  let water = 0;
  let [left, right] = [0, height.length - 1];
  let [maxLeft, maxRight] = [height[left], height[right]];

  while (left < right) {
    maxLeft = Math.max(maxLeft, height[left]);
    maxRight = Math.max(maxRight, height[right]);

    if (maxLeft <= maxRight) {
      water += maxLeft - height[left];
      left++;
    } else {
      water += maxRight - height[right];
      right--;
    }
  }

  return water;
};
const k1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 6
const k2 = [4, 2, 0, 3, 2, 5]; //9
const k3 = [5, 4, 1, 2]; // 1
const k4 = [5, 5, 1, 7, 1, 1, 5, 2, 7, 6]; // 23
// console.log(trap(k1));
// console.log(trap(k2));
console.log(trap(k4));
