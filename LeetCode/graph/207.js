//207. Course Schedule

/*
graph문제는 아직 너무 어려운 것 같다. 결국 그래프 문제의 포인트는 그래프 형태로 만들어 주는 것이다. 
그래프 형태란 객체에 key-value(array)로 출발,끝 노드를 정해주면 된다. 

이 문제도 역시 그렇게 graph 형태로 만들고 시작한다. 

이 문제의 포인트는 [1,0],[0,1] 같이 계속 순환하는 형태가 발생하면 안된다는 것이다.
이를 체크하기 위해 check라는 Set을 이용해서 이전에 나왔는지를 확인해 순환하는 것을 체크할 수 있다. 
또한 체크를 완료한 num은 visited에 넣어서 나중에 그 숫자는 dfs로 확인 안하고 패스한다.

dfs함수: 현재 입력받는 숫자(노드)가 순환하는 애인지 확인을 해준다. 

*/
const canFinish = (numCourses, prerequieites) => {
  const graph = {};
  const visited = new Set();
  const check = new Set();

  //graph 형대로 객체에 만들기
  prerequieites.forEach((v) => {
    const [x, y] = v;
    if (graph[x]) graph[x].push(y);
    else graph[x] = [y];
  });

  const dfs = (num) => {
    if (check.has(num)) return false;
    //visited에 있는 애들은 이미 확인된 num이기 때문에 pass.
    if (visited.has(num * 1)) true;
    //그 다음 값이 graph에 없다는 것은 끝났다는 것이기 때문에 true
    if (!graph[num]) return true;

    check.add(num * 1);

    for (const course of graph[num]) {
      if (!dfs(course)) return false;
    }
    //현재 num체크를 다했으면 visited에 넣어서 나중에는 확인 안하고 넘어간다.
    visited.add(num * 1);
    //현재 num체크를 다했으면 check에서 삭제한다.
    check.delete(num * 1);

    return true;
  };

  //graph에 담은 모든 요소들의 시작 노드 하나씩 다 검사
  for (let y in graph) {
    if (!dfs(y)) return false;
  }

  return true;
};
