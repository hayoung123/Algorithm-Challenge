function solution(n, k, cmd) {
  let arr = new Array(n).fill().map((_, idx) => ({
    idx,
    on: true,
  }));
  let state = k;
  const stack = [];
  cmd = cmd.map((v) => v.split(' '));
  const fn = {
    U: (num) => {
      for (let i = 0; i < num; i++) {
        let minus = 1;
        while (true) {
          if (!arr[state - minus] || arr[state - minus].on) break;
          minus++;
        }
        state -= minus;
        if (!fn.checkUp()) {
          state = fn.getFirstState();
          break;
        }
      }
    },
    D: (num) => {
      for (let i = 0; i < num; i++) {
        let plus = 1;
        while (true) {
          if (!arr[state + plus] || arr[state + plus].on) break;
          plus++;
        }
        state += plus;
        if (!fn.checkDown()) {
          state = fn.getLastState();
          break;
        }
      }
    },
    C: () => {
      arr[state].on = false;
      stack.push({ index: state });
      if (!fn.checkDown()) fn.U(1);
      else fn.D(1);
    },
    Z: () => {
      const { index } = stack.pop();
      arr[index].on = true;
    },
    checkDown: () => {
      for (let i = state; i < n; i++) {
        if (arr[i].on) return true;
      }
      return false;
    },
    checkUp: () => {
      for (let i = state; i >= 0; i--) {
        if (arr[i].on) return true;
      }
      return true;
    },
    getFirstState: () => {
      for (let i = 0; i < n; i++) {
        if (arr[i].on) return i;
      }
    },
    getLastState: () => {
      for (let i = n - 1; i >= 0; i--) {
        if (arr[i].on) return i;
      }
    },
  };

  // for (const [command, num] of cmd) {
  //   fn[command](num);
  // }
  for (let i = 0; i < cmd.length; i++) {
    fn[cmd[i][0]](cmd[i][1]);
  }
  const answer = arr.map(({ on }) => (on ? 'O' : 'X'));
  return answer.join('');
}

// console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']));
console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z', 'U 1', 'C']));

function solution(n, k, cmd) {
  let arr = new Array(n).fill().map((_, idx) => ({
    idx,
    on: true,
  }));
  let state = k;
  const stack = [];
  cmd = cmd.map((v) => v.split(' '));
  const fn = {
    U: (num) => {
      for (let i = 0; i < num; i++) {
        if (!fn.checkUp()) {
          state = fn.getFirstState();
          break;
        }
        let minus = 1;
        while (true) {
          if (!arr[state - minus] || arr[state - minus].on) break;
          minus++;
        }
        state -= minus;
      }
    },
    D: (num) => {
      for (let i = 0; i < num; i++) {
        if (!fn.checkDown()) {
          state = fn.getLastState();
          break;
        }
        let plus = 1;
        while (true) {
          if (!arr[state + plus] || arr[state + plus].on) break;
          plus++;
        }
        state += plus;
      }
    },
    C: () => {
      arr[state].on = false;
      stack.push({ index: state });
      if (!fn.checkDown()) fn.U(1);
      else fn.D(1);
    },
    Z: () => {
      const { index } = stack.pop();
      arr[index].on = true;
    },
    checkDown: () => {
      for (let i = state; i < n; i++) {
        if (arr[i].on) return true;
      }
      return false;
    },
    checkUp: () => {
      for (let i = state; i >= 0; i--) {
        if (arr[i].on) return true;
      }
      return true;
    },
    getFirstState: () => {
      for (let i = 0; i < n; i++) {
        if (arr[i].on) return i;
      }
    },
    getLastState: () => {
      for (let i = n - 1; i >= 0; i--) {
        if (arr[i].on) return i;
      }
    },
  };

  // for (const [command, num] of cmd) {
  //   fn[command](num);
  // }
  for (let i = 0; i < cmd.length; i++) {
    fn[cmd[i][0]](cmd[i][1]);
  }
  let answer = '';
  arr.forEach(({ on }) => (answer += on ? 'O' : 'X'));
  // const answer = arr.map(({ on }) => (on ? 'O' : 'X'));
  return answer;
}
