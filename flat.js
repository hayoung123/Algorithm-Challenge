//flat 메소드 만들기

const list = [1, 2, [3, [6, [7]]], 4, [10, 11]];

const flat = (list, newList = []) => {
  for (const value of list) {
    if (Array.isArray(value)) flat(value, newList);
    else newList.push(value);
  }
  return newList;
};

// const flat = (list) => {
//   const newList = [];
//   for (const value of list) {
//     if (Array.isArray(value)) newList.push(...flat(value));
//     else newList.push(value);
//   }
//   return newList;
// };

// console.log(flat(list));

const makeNode = (value) => {
  if (value === 'dirstart') return { type: 'Directory', child: [] };
  else return { type: 'file', value };
};

const test = [
  'myfile.txt',
  'dirstart',
  '오늘숙제.doc',
  'dirstart',
  '책리스트.txt',
  'dirend',//콜스택끝
  '요리법.hwp', <-
  'dirend',
  'fe멤버들.md',
];

const parse = (arr, node) => {
  for (let idx = 0; idx < arr.length; idx++) {
    const value = arr[idx];
    if (value === 'dirstart') {
      const dirNode = makeNode('dirstart'); //{ type: 'Directory', child: [] };
      const newNode = parse(arr.slice(idx + 1), dirNode);//newNode = { node, index: 1 }
      idx += newNode.index + 1;
      node.child.push(newNode.node);
    } else if (value === 'dirend') {
      return { node, index: idx };
    } else {
      node.child.push(makeNode(value));
    }
  }
  return node;
};

const initDir = makeNode('dirstart');
parse(test, initDir);
console.dir(initDir, { depth: null });



// const preParser = (arr, node, prevNode) => {
//   if (!arr.length) return;
//   const curValue = arr.shift();
//   switch (curValue.type) {
//     case 'openArray':
//       const arrayNode = Node(curValue);
//       node.child.push(arrayNode);
//       preParser(arr, arrayNode, node);
//       preParser(arr, node, prevNode);
//       break;
//     case 'closeArray':
//       return;
//     default:
//       const valueNode = Node(curValue);
//       node.child.push(valueNode);
//       preParser(arr, node, prevNode);
//       break;
//   }
// };

// const preParser = (arr, node) => {
//   if (!arr.length) return;
//   const curValue = arr.shift();
//   switch (curValue.type) {
//     case 'openArray':
//       const arrayNode = Node(curValue);
//       const newNode = preParser(arr, arrayNode);
//       node.child.push(newNode);
//       preParser(arr, node);
//       break;
//     case 'closeArray':
//       return node;
//     default:
//       const valueNode = Node(curValue);
//       node.child.push(valueNode);
//       preParser(arr, node);
//       return node;
//   }
// };
