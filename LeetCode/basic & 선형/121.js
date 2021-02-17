//Best Time to Buy and Sell Stock

/*
브루트 포스
Runtime: 7952 ms, faster than 5.01% of JavaScript online submissions 

위 처럼 말도 안되는 늦는 속도로 성공했다.

뒤에 값이 앞에 값보다 작다면 그 전까지의 처리는 해줬으니
앞으로의 최대 이익은 그 값을 시작으로 나올 거라는 생각에 break했다.
*/
var maxProfit = function (prices) {
  let answer = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] < prices[i]) break;
      else {
        const profit = prices[j] - prices[i];
        if (profit > answer) answer = profit;
      }
    }
  }
  return answer;
};

/*
각 구간에서의 최대 이익값 = 현재값 - 이전 배열에서의 최소값 
을 이용했다.

각 구간에서의 이익을 구하고 최소값을 업데이트 해주는 형식으로 진행했다.
Runtime: 100 ms, faster than 48.04% of JavaScript online submissions 

브루트 포스보다 한결 개선된 속도이다.
*/
var maxProfit = function (prices) {
  let answer = 0;
  let min = 10001;
  for (let i = 0; i < prices.length; i++) {
    const profit = prices[i] - min;
    if (profit > answer) answer = profit;
    if (min > prices[i]) min = prices[i];
  }
  return answer;
};
