const map = new WeakMap();

// const map = new Map();

const hong = { id: 1, name: 'Hong' };
function setData() {
  const kim = { id: 2, name: 'Kim' };
  const dept1 = { id: 10, deptName: 'Server' };
  const dept2 = { id: 20, deptName: 'Client' };
  map.set(hong, dept1);
  map.set(kim, dept2);
}

setData();

console.log(map.has(hong), map.get(hong));
