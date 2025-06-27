const assert = require('assert');

var Score;
(function (Score) {
  Score[0] = 'A';
  Score[1] = 'B';
  Score[(Score['C'] = 2)] = 'C';
})(Score || (Score = {}));

const objs = [{ id: 1 }, { name: 'Hong' }, { addr: 'Seoul', id: 5 }];
const obj = objs.reduce((acc, a) => ({ ...acc, ...a }), {});
assert.deepStrictEqual(obj, { id: 5, name: 'Hong', addr: 'Seoul' });
return;
const arr2 = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
const ex1 = arr2.slice(1, 3);
assert.deepStrictEqual(ex1, [2, 3]);
// ex2) [3]부터 모두 다 추출
// const ex2 = arr2.slice(2, Infinity);
// const ex2 = arr2.slice(2, Number.MAX_VALUE);
// const ex2 = arr2.slice(2, arr2.length);
const ex2 = arr2.slice(2);
assert.deepStrictEqual(ex2, [3, 4, 5]);

// ex3) [2,3,4] 제거하기
const ex3 = arr2.splice(1, 3);
assert.deepStrictEqual(ex3, [2, 3, 4]);
assert.deepStrictEqual(arr2, [1, 5]);

// ex4) 복원하기
const ex4 = arr2.splice(1, 0, ...ex3);
assert.deepStrictEqual(ex4, []);
assert.deepStrictEqual(arr2, [1, 2, 3, 4, 5]);

// ex5) [3] 부터 끝까지 제거하기
const ex5 = arr2.splice(2, arr2.length - 2);
assert.deepStrictEqual(ex5, [3, 4, 5]);
assert.deepStrictEqual(arr2, [1, 2]);

// ex6) 복원하기
const ex6 = arr2.splice(2, 0, ...ex5);
assert.deepStrictEqual(ex6, []);
assert.deepStrictEqual(arr2, [1, 2, 3, 4, 5]);

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
const ex7 = arr2.splice(2, 1, 'X', 'Y', 'Z');
assert.deepStrictEqual(arr2, [1, 2, 'X', 'Y', 'Z', 4, 5]);
// ==>  복원
arr2.splice(2, 3, ...ex7);
assert.deepStrictEqual(arr2, [1, 2, 3, 4, 5]);

// - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가
const ex7_2 = arr2.splice(2, Infinity, 'X', 'Y', 'Z', 4, 5);
assert.deepStrictEqual(arr2, [1, 2, 'X', 'Y', 'Z', 4, 5]);
arr2.splice(2, Infinity, 3, 4, 5);
assert.deepStrictEqual(arr2, [1, 2, 3, 4, 5]);

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
const ex8 = [...arr2.slice(0, 2), 'X', 'Y', 'Z', ...arr2.slice(-2)];
assert.deepStrictEqual(ex8, [1, 2, 'X', 'Y', 'Z', 4, 5]);

return;

const makeArray = (length, startNum = 1) => {
  return Array.from({ length }, (_, i) => i + startNum);
};

const isPrime = n => {
  if (n === 1) return false;
  return makeArray(Math.sqrt(n) - 1, 2).every(a => n % a !== 0);
};
// console.log(isPrime(2));
// const hasPrime = arr => arr.some(isPrime);
const hasPrime = arr => !!arr.find(isPrime);

assert.strictEqual(hasPrime([1, 2, 3]), true);
assert.strictEqual(hasPrime([1, 2, 4]), true);
assert.strictEqual(hasPrime([1, 4, 9]), false);

const primeNumbers = arr => arr.filter(isPrime);

const arr100 = makeArray(100);
assert.deepStrictEqual(
  primeNumbers(arr100),
  [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ]
);
