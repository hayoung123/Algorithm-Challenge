const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

const mapKey = map.keys();
const k = mapKey[Symbol.iterator]();
console.log(k);
for (let x of mapKey) console.log(x);
console.log(k);
for (let x of k) console.log(x);
console.log(k);
