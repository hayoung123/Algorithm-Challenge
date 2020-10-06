# Array Chunking

## My Code

```
function chunk(array, size) {
  const res = [];
  const cnt = Math.ceil(array.length / size);

  for (let i = 0; i < cnt; i++) {
    res.push(array.slice(size * i, size * (i + 1)));
  }
  return res;
}
```

<br/>

## Feedback

<br/>

## Solution 1st

1. return 할 array인 chunked array생성
2. chunked의 마지막 인자를 선택 = const last
3. last가 없다면 chunked.push로 마지막인자 생성 or last의 길이가 size와 같다면 chunked.push
4. 그렇지 않다면 last에 push element

### code

```
function chunk(array, size) {
  const chunked = [];
  for (let elem of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunked;
}
```

last를 완성 시켜준뒤 chunked에 push 해주는 것이 아닌

chunked의 마지막 인자를 선택해 간다.

조건에 차면 element를 추가해주고

over 되면 chunked에 push 해주면서 last를 업데이트 해주는 느낌으로 코딩.

<br/>

## Solution 2nd

```
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
}
```

slice method 이용
