//332. Reconstruct Itinerary

// const findItinerary = (tickets) => {
//   const res = [];
//   let target = 'JFK';

//   const go = (arr, target = 'JFK', answer = []) => {
//     if (!arr.length) {
//       res.push(answer);
//       return;
//     }

//     const tmp = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i][0] === target) {
//         tmp.push(arr[i]);
//       }
//     }
//     for (let i = 0; i < tmp.length; i++) {
//       let restArr = arr.filter((v) => !tmp.includes(v));
//       restArr = [...restArr];
//       const targetArr = tmp[i];
//       go([...restArr, ...tmp], targetArr[1], [...answer, targetArr[0]]);
//     }
//   };

//   go(tickets);

//   return res;
// };
var findItinerary = function (tickets) {
  var map = {};
  var res = [];
  for (var i = 0; i < tickets.length; i++) {
    var dep = tickets[i][0];
    var des = tickets[i][1];
    if (map[dep]) {
      map[dep].push(des);
    } else {
      map[dep] = [des];
    }
  }
  for (let loc in map) {
    map[loc].sort();
  }
  console.log(map);
  var dfs = function (node) {
    var des = map[node];
    while (des && des.length > 0) {
      dfs(des.shift());
    }
    res.push(node);
  };
  dfs('JFK');
  return res.reverse();
};

console.log(
  findItinerary([
    ['JFK', 'KUL'],
    ['JFK', 'NRT'],
    ['NRT', 'JFK']
  ])
);
