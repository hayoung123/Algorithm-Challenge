//771 Jewels and Stones

/*
stones를 object에 (key:문자열 value: 개수) 로 저장해서 해결                                                    
*/

var numJewelsInStones = function (jewels, stones) {
  const stoneObj = {};
  stones.split('').forEach((stone) => {
    if (stoneObj[stone]) stoneObj[stone]++;
    else stoneObj[stone] = 1;
  });

  let totalJewels = 0;
  jewels.split('').forEach((jewel) => {
    if (stoneObj[jewel]) totalJewels += stoneObj[jewel];
  });

  return totalJewels;
};

/*
역시 리트코드의 추천이 높은 답안을 보면 놀랍다. 

- Set에 문자열을 넣으면 split해서 중복을 제거하고 저장하는 특성을 이용헀다. 
ex) new Set('hello') => Set(4) {"h", "e", "l", "o"}

- js는 true는 더했을 때 1 false는 더했을 때 0인 특성을 이용했다. 
ex) 3+true = 4 / 5+false = 5

위의 특성을 이용하기 때문에 reduce의 초기값을 잘 설정해줘야한다. 
*/

const numJewelsInStones = (jewels, stones) => {
  const jewel = new Set(jewels);
  return stones.split('').reduce((acc, stone) => acc + jewel.has(stone), 0);
};
