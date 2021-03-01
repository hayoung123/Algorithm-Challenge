//332. Reconstruct Itinerary

/*
그래프문제.. 어렵다. 어색한건지 어려운건지 감이 정말 안잡힌다.

그래프 문제인 만큼 graph 객체 형태로 만들고 시작하고 문제에 따라 정렬하자. 

dfs함수

각 from을 인자로 받는 dfs이다. 
이제 받은 from의 to들을 다시 dfs로 보낸다. 
graph[from](값)이 없는 경우에는 push를 해주면서 dfs껍질을 벗겨내면된다. 

이때 itinerary에 역순으로 push되기 때문에 마지막에 reverse해준다. 
*/
const findItinerary = (tickets) => {
  const graph = {};
  let itinerary = [];
  //graph객체 만들기
  tickets.forEach((v) => {
    const [from, to] = v;
    if (graph[from]) graph[from].push(to);
    else graph[from] = [to];
  });

  //graph객체 value들 정렬
  for (let key in graph) {
    graph[key].sort((a, b) => a.localeCompare(b));
  }

  //JFK가 key값부터 시작해 정렬됐으니 앞에값부터 dfs
  const dfs = (from = 'JFK') => {
    while (graph[from] && graph[from].length) {
      const to = graph[from].shift();
      dfs(to);
    }
    itinerary.push(from);
  };

  dfs('JFK');

  return itinerary.reverse();
};

console.log(
  findItinerary([
    ['JFK', 'KUL'],
    ['JFK', 'NRT'],
    ['NRT', 'JFK']
  ])
);
