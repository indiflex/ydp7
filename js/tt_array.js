const assert = require('assert');

const arr = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 4];

(function ex8() {
  const keyPair = (arr, n) => {
    const cache = {}; // { 6: 0, 4: 1 }
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      if (cache[val]) return [cache[val], i];
      cache[n - val] = i;
    }
  };
  //                          i:  0  1  2  3
  assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
  assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
  assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
  assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
})();

(function ex7() {
  const range = (start, end, step = start > end ? -1 : 1) => {
    if (start === end || step === 0) return [start];

    // if (start > end && step > 0) return [];
    // if (start < end && step < 0) return [];
    if ((start - end) * step > 0) return [];

    // if (end === undefined) {
    //   [end, start] =
    //     start > 0 ? [start, 1] : start < 0 ? [-1, start] : [0, start];
    // }

    const tmpStart = start;
    end = end ?? (start > 0 ? ((start = 1), tmpStart) : start < 0 ? -1 : 0);

    const results = [];
    // const isEnd = i => (start > end ? i >= end : i <= end);
    // for (let i = start; isEnd(i); i += step) {
    for (let i = start; start > end ? i >= end : i <= end; i += step) {
      results.push(i);
    }

    return results;
  };

  assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
  assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

  assert.deepStrictEqual(range(5, 5, 0), [5]);
  assert.deepStrictEqual(range(1, 5, 0), [1]);
  assert.deepStrictEqual(range(5, 5, -1), [5]);
  assert.deepStrictEqual(range(5, 5), [5]);
  assert.deepStrictEqual(range(0, 0, 5), [0]);
  assert.deepStrictEqual(range(1, 5, -1), []);

  assert.deepStrictEqual(range(1, 5, 6), [1]);
  assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
  assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

  assert.deepStrictEqual(range(5, 1, 1), []);
  assert.deepStrictEqual(range(0, -1), [0, -1]);
  assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
  assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
  assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

  assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(range(0), [0]);
  assert.deepStrictEqual(range(0, 0), [0]);
  assert.deepStrictEqual(range(2, 1, -5), [2]);
  assert.deepStrictEqual(range(0, -1, -5), [0]);
  assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
  assert.deepStrictEqual(
    range(50),
    Array.from({ length: 50 }, (_, i) => i + 1)
  );
  assert.deepStrictEqual(
    range(1, 150, 3),
    Array.from({ length: 50 }, (_, i) => i * 3 + 1)
  );
})();

(function ex6() {
  const arr = [1, 2, 3, 4, 5];
  const square = n => n ** 2;
  const sqrt = Math.sqrt;
  const cube = n => n ** 3;

  const xr1 = arr.map(square).map(sqrt).map(cube);
  assert.deepStrictEqual(xr1, [1, 8, 27, 64, 125]);

  const xr2 = arr.map(a =>
    [square, sqrt, cube].reduce((acc, fn) => fn(acc), a)
  );
  // console.log('🚀  xr2:', xr2);
  const xr3 = arr.map(a =>
    [cube, square, sqrt].reduce((acc, fn) => fn(acc), a)
  );
  // console.log('🚀  xr3:', xr3);
  const xr4 = arr.map(a =>
    [square, cube, n => n + 1].reduce((acc, fn) => fn(acc), a)
  );
  // console.log('🚀  xr4:', xr4);
})();
(function ex5() {
  const reduce = (arr, fn, initValue) => {
    let i = 0;
    // if (initValue === undefined)
    // initValue ??= arr[i++];
    let acc = initValue ?? arr[i++];
    for (; i < arr.length; i++) {
      acc = fn(acc, arr[i], i, arr);
    }

    return acc;
  };

  const kim = { id: 2, name: 'kim' };
  const lee = { id: 3, name: 'Lee' };
  const park = { id: 4, name: 'Park' };
  const users = [kim, lee, park];

  const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  assert.deepStrictEqual(
    reduce(a10, (acc, cur) => acc + cur, 0),
    a10.reduce((acc, cur) => acc + cur, 0)
  );
  return;

  assert.deepStrictEqual(
    reduce(users, (acc, user) => acc + user.name),
    users.reduce((acc, user) => acc + user.name)
  );

  assert.deepStrictEqual(
    reduce(a10, (acc, cur) => acc + cur, 0),
    a10.reduce((acc, cur) => acc + cur, 0)
  );
  assert.deepStrictEqual(
    reduce(a10, (acc, cur) => acc + cur),
    a10.reduce((acc, cur) => acc + cur)
  );
  assert.deepStrictEqual(
    reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
    [1, 2, 3, 4, 5].reduce((a, b) => a * b, 1)
  );

  assert.deepStrictEqual(
    reduce(users, (acc, user) => acc + user.name),
    users.reduce((acc, user) => acc + user.name)
  );
})();

(function ex4() {
  const arr = [1, 2, 3, true];
  const ret1 = arr.map(String);
  assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

  // ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
  // const classNames = (...args) => args.filter(a => !!a).join(' ');
  const classNames = (...args) => args.filter(Boolean).join(' ');
  const ret2 = classNames('', 'a b c', 'd', '', 'e');
  assert.strictEqual(ret2, 'a b c d e');
})();

(function ex3() {
  const hong = { id: 1, name: 'Hong' };
  const choi = { id: 5, name: 'Choi' };
  const kim = { id: 2, name: 'kim' };
  const lee = { id: 3, name: 'Lee' };
  const park = { id: 4, name: 'Park' };
  const users = [kim, lee, park]; // 오염되면 안됨!!

  // users.addUser = user => [...users, user];
  users.addUser = function (newer) {
    return [...this, newer];
  };

  assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);

  users.removeUser = user => users.filter(u => u.id !== user.id);
  assert.deepStrictEqual(users.removeUser(lee), [kim, park]);

  users.changeUser = (older, newer) =>
    users.map(user => (user.id === older.id ? newer : user));
  assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);

  // const fnNames = ['addUser', 'removeUser', 'changeUser'];
  const fnNames = Object.keys(users).filter(isNaN);
  // const fnNames = Reflect.ownKeys(users);
  // console.log('🚀 fnNames:', fnNames);

  fnNames.forEach(fnName =>
    Object.defineProperty(users, fnName, { enumerable: false })
  );

  assert.deepStrictEqual(users, [kim, lee, park]);
})();

(function ex2() {
  const deleteArray = (array, startIdxOrKey, endIdxOrValue = array.length) => {
    const cb =
      typeof startIdxOrKey === 'number'
        ? (_, i) => i < startIdxOrKey || i >= endIdxOrValue
        : a => a[startIdxOrKey] !== endIdxOrValue;

    return array.filter(cb);
  };
  assert.deepStrictEqual(deleteArray(arr3, 2), [1, 2]); // 2번 인덱스 부터 끝까지 지우고 나머지 리턴
  assert.deepStrictEqual(deleteArray(arr3, 1, 3), [1, 4]); // 1번 인덱스 부터 3번 인덱스 앞까지 지우고 나머지 리턴
  assert.deepStrictEqual(arr3, [1, 2, 3, 4]); // 순수함수 체크

  const Hong = { id: 1, name: 'Hong' };
  const Kim = { id: 2, name: 'Kim' };
  const Lee = { id: 3, name: 'Lee' };
  const users = [Hong, Kim, Lee];

  assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
  assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
  assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
  assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);
})();

(function ex1() {
  const push = (array, ...args) => [...array, ...args];
  assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);

  // array[array.length -1]
  const pop = (array, cnt = 1) =>
    cnt === 1 ? array.at(-1) : array.slice(-cnt);
  assert.deepStrictEqual(pop(arr), 4);
  assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!

  const unshift = (array, ...args) => [...args, ...array];
  assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
  assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

  const shift = (array, cnt = 1) => [array.slice(0, cnt), array.slice(cnt)];
  assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
  assert.deepStrictEqual(shift(arr, 2), [
    [1, 2],
    [3, 4],
  ]); // 2개 shift
  assert.deepStrictEqual(arr, [1, 2, 3, 4]);
})();
