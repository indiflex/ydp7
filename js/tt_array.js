const assert = require('assert');

const arr = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 4];

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
