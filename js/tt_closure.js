const assert = require('assert');
const kim = { nid: 3, nm: 'Kim', addr: 'Pusan' };
const newKim1 = shallowCopy(kim);
newKim1.addr = 'Daegu';
console.log(kim.addr !== newKim1.addr); // true면 통과!
function shallowCopy(obj) {
  return { ...obj };
}

const kim2 = {
  nid: 3,
  nm: 'Kim',
  addr: { city: 'Pusan', road: 'Haeundaero', zip: null },
};
const newKim2 = deepCopy(kim2);
newKim2.addr.city = 'Daegu';
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!

function deepCopy(obj) {
  const ret = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== null && typeof v === 'object') ret[k] = deepCopy(v);
    else ret[k] = v;
  }
  return ret;
}
return;
data = [
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
];
// assert.deepStrictEqual(makeObjectFromArray(data), {
//   A: [10, 20],
//   B: [30, 40],
//   C: [50, 60, 70],
// });

function makeArrayFromObject(obj) {
  const ret = [];
  for (const k in obj) {
    ret.push([k, ...obj[k]]);
  }
  return ret;
}
const x2 = makeArrayFromObject({ A: [10, 20], B: [30, 40], C: [50, 60, 70] });
assert.deepStrictEqual(x2, data);
console.log('🚀 x2:', x2);

// => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

return;
// const s1 = JSON.stringify({ id: 1, [Symbol.for('foo')]: 'foo' }, null, '  ');
// console.log('🚀 s1:', s1);

const s2 = JSON.stringify(
  { id: 1, [Symbol.for('foo')]: 'foo' },
  function replacer(_this, json) {
    const rs = [];
    for (const k of Reflect.ownKeys(json)) {
      if (typeof k === 'symbol') rs.push(['Symbol', 'a symbol']);
      else rs.push([k, json[k]]);
    }
    return JSON.stringify(Object.fromEntries(rs));
  }
);
console.log('🚀 s2:', s2);

return;

let sum = 0;
for (let i = 1; i <= 10000; i += 1) sum += i;
console.log('🚀 sum:', sum);

console.log('🚀  sum:', sum, neverOverflowFactorial(10000));

function neverOverflowFactorial(n) {
  console.log('**********', n);
  try {
    if (n === 1) return 1;
    return n + neverOverflowFactorial(n - 1);
  } catch (err) {
    console.log('🚀 err:', err, n);
  }
}

return;
// function makeArray(n) {
//   if (n === 1) return [1];
//   return [...makeArray(n - 1), n];
// }
// const ma10 = makeArray(10);
// console.log('🚀 ma10:', ma10);
// // ⇒ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const makeArray = (num, temp = 1, arr = []) => {
  if (temp > num) {
    console.log(arr);
    return;
  }
  makeArray(num, temp + 1, [...arr, temp]);
};

const makeReverseArray = (num, temp = 1, arr = []) => {
  if (temp > num) {
    console.log(arr);
    return;
  }
  makeReverseArray(num, temp + 1, [temp, ...arr]);
};

makeReverseArray(5);
// ⇒ [5, 4, 3, 2, 1]

function makeArrayTCO(n, arr = []) {
  let inN = Math.trunc(n);
  if (inN < 1) {
    console.log(arr);
    return;
  }

  arr = [inN, ...arr];
  return makeArrayTCO(inN - 1, arr);
}

// cf. 위 makeArray를 TCO로 작성하시오.
makeArrayTCO(10);
// ⇒ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
