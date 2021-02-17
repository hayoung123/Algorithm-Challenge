//200. Number of Island

/*
2차원 배열이 주어지는데 주어지는 배열 중 0으로 섬처럼 둘러쌓인 1의뭉치(섬)의 개수를 구하는 문제

2차원 배열인 grid를 일일이 다 순회했다. 순회하면서 0이나오면 continue하고 1이 나온다면 answer++ 하고 
인접한 1들을 모두 0으로 바꾸는 작업을 해주었다. 

- deleteIsland : 인접한 1들을 모두 지우는 함수

dfs처럼 구현했다. 한 점에서 위, 아래, 왼쪽, 오른쪽을 다 갈 수 있게 인덱스 i, j를 인자로 받아서 이용했다. 
이때 배열의 좌우(길이)를 벗어나는건 undefined로 괜찮지만, 
예를들어 `let k = [[1,2],[3,4]]` 의 k[2][0] 처럼 k[2]가 이미 undefined인데 undefined에 [0]번 인덱스를 찾는 과정에서
에러가 발생했다. 그 2가지 경우에는 if문으로 한번 처리해줬다. 

궁금한점. 배열이 주소값 참조로 안에 값을 바꾸면 따라서 변경되기 때문에 반환값이 없는 deleteIsland함수를 만들었다. 
근데 이래도 될까??싶다. 차라리 return을 해주는게 나을 수 도 있다고 생각된다.  

if(grid[i][j] === '1') 조건 없이 하고 싶었지만 0과 다르게 '0'은 if(!'0')하면 true가 아니기 때문에 if(grid[i][j] === '1') 조건은 필요하다.
*/

const numIslands = (grid) => {
  let island = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        island++;
        gird = deleteIsland(grid, i, j);
      }
    }
  }
  return island;
};
const deleteIsland = (grid, i, j) => {
  if (!grid[i][j]) return;

  if (grid[i][j] === '1') {
    grid[i][j] = '0';
    if (grid[i + 1]) deleteIsland(grid, i + 1, j);
    if (grid[i - 1]) deleteIsland(grid, i - 1, j);
    deleteIsland(grid, i, j - 1);
    deleteIsland(grid, i, j + 1);
  }
  return grid;
};

function k(str) {
  console.log(str);
  function kk() {
    str = 'k world';
    console.log(str);
  }
  kk();
  console.log(str);
}

k('world');
