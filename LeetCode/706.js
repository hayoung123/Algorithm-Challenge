//706. Design HashMap

/*
코드스쿼드에서 hashMap을 구현했던 적도 있기도 해서 쉽게 해결했다. 
put(key,value), get(key), remove(key)
메소드를 구현하는 문제
*/

var MyHashMap = function () {
  this.hashMap = {};
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.hashMap[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  if (this.hashMap[key] !== undefined) return this.hashMap[key];
  else return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  if (this.hashMap[key] !== undefined) return delete this.hashMap[key];
  else return -1;
};
