const assert = require('assert');

const LINE2 = [
  '신도림',
  '성수',
  '신설동',
  '용두',
  '신답',
  '용답',
  '시청',
  '충정로',
  '아현',
  '이대',
  '신촌',
  '공항철도',
  '홍대입구',
  '합정',
  '당산',
  '영등포구청',
  '문래',
  '대림',
  '구로디지털단지',
  '신대방',
  '신림',
  '봉천',
  '서울대입구',
  '낙성대',
  '사당',
  '방배',
  '서초',
  '교대',
  '강남',
  '역삼',
  '선릉',
  '삼성',
  '종합운동장',
  '신천',
  '잠실',
  '잠실나루',
  '강변',
  '구의',
  '건대입구',
  '뚝섬',
  '한양대',
  '왕십리',
  '상왕십리',
  '신당',
  '동대문역사문화공원',
  '을지로4가',
  '을지로3가',
  '을지로입구',
];

class Subway {
  #end;
  #currIdx;
  constructor(start, end) {
    this.#end = end;
    this.#currIdx = LINE2.indexOf(start);
    console.log('🚀 #currIdx:', this.#currIdx);
  }

  *[Symbol.iterator]() {
    while (true) {
      if (this.#currIdx === LINE2.length) this.#currIdx = 0;

      if (LINE2[this.#currIdx] === this.#end) {
        yield LINE2[this.#currIdx];
        break;
      }

      yield LINE2[this.#currIdx++];
    }
  }
}
const routes = new Subway('문래', '신림');
console.log('🚀 routes:', [...routes]);
// const it1 = routes[Symbol.iterator]();
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());

const routes2 = new Subway('왕십리', '강남'); // 32개 정거장
console.log([...routes2]);

return;

const arr = [1, 2, 3];
const arr2list = arr => {
  let node;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    node = { value: arr[i], rest: node };
  }
  console.log(node);
};
arr2list(arr);

const arr2list2 = arr => {
  let list;
  let preNode;

  for (const value of arr) {
    const node = { value, rest: undefined };
    if (!list) list = node;
    else preNode.rest = node;

    preNode = node;
  }

  return list;
};

console.log(arr2list2(arr));

return;

class Collection {
  #arr;
  constructor(...args) {
    this.#arr = args ?? [];
  }

  pop() {
    return this.#arr.pop();
  }

  toArray() {
    return this.#arr;
  }

  get _arr() {
    return this.#arr;
  }

  print() {
    console.log(`${this.constructor.name}:`, this.toArray());
  }
}

class Stack extends Collection {
  push(x) {
    this._arr.push(x);
  }
}
const stack = new Stack();
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
stack.print();

class Queue extends Collection {
  enqueue(x) {
    super._arr.unshift(x);
  }

  dequeue() {
    return this.pop();
  }
}

const queue = new Queue();
queue.enqueue(3); // 추가하기
queue.enqueue(2); // 추가하기
console.log('🚀 queue:', queue.toArray());
console.log('queue.dequeue>>', queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
queue.print();

return;

(function array_proto() {
  const arr = [1, 2, 3, 4, 5];
  const hong = { id: 1, name: 'Hing' };
  const kim = { id: 2, name: 'Kim' };
  const lee = { id: 3, name: 'Lee' };
  const users = [hong, lee, kim];

  Array.prototype.mapBy = function (prop) {
    return this.map(a => a[prop]);
  };
  Array.prototype.filterBy = function (prop, value, isInclude = false) {
    return this.filter(a =>
      isInclude ? a[prop].includes(value) : a[prop] === value
    );
  };

  // assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
  assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
  assert.deepStrictEqual(users.mapBy('name'), ['Hing', 'Lee', 'Kim']);
  assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
  assert.deepStrictEqual(users.filterBy('name', 'i', true), [hong, kim]); // key, value일부, isInclude
  // assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]);
  // assert.deepStrictEqual(users.rejectBy('name', 'i', true), [lee]);
  // assert.deepStrictEqual(users.findBy('name', 'Kim'), kim);
  // assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong]);
  // assert.deepStrictEqual(users.sortBy('name'), [hong, kim, lee]);

  Object.defineProperties(Array.prototype, {
    firstObject: {
      get() {
        return this[0];
      },
      set(x) {
        this[0] = x;
      },
    },
    lastObject: {
      get() {
        return this.at(-1);
      },
      set(x) {
        this[this.length - 1] = x;
      },
    },
  });
  assert.deepStrictEqual(users.firstObject, hong);
  assert.deepStrictEqual(users.lastObject, kim);
  users.firstObject = kim;
  assert.deepStrictEqual(users.firstObject, kim);
  users.lastObject = hong;
  assert.deepStrictEqual(users.lastObject, hong);
})();

return;
class User {
  constructor() {
    return new Proxy(this, {
      get(target, prop, receiver) {
        if (prop === 'fullName') {
          return `${target.firstName} ${target.lastName}`;
        } else {
          return target[prop];
        }
      },
      set(target, prop, value, receiver) {
        if (prop === 'fullName') {
          const [f, l] = value.split(' ');
          target.firstName = l ? f : target.firstName;
          target.lastName = l ? l : f;
        } else {
          target[prop] = value;
        }
      },
    });
  }
}

const hong = new User();
hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
console.log('11=', hong.fullName); // 'Kildong HONG' 출력하면 통과!
hong.x = 123;
hong.fullName = 'Lee';
console.log('22=', hong.firstName, hong.lastName, hong.x); // 'Kildong LEE' 출력하면 통과!
return;

class Emp {
  firstName;
  lastName;
}

const hongEmp = new Emp();
const proxyObj = new Proxy(hongEmp, {
  get(target, prop, receiver) {
    if (prop === 'fullName') {
      return `${target.firstName} ${target.lastName}`;
    }
  },
  set(target, prop, value, receiver) {
    const [f, l] = value.split(' ');
    target.firstName = l ? f : target.firstName;
    target.lastName = l ? l : f;
  },
});

proxyObj.fullName = 'kildog Hong';
console.log(proxyObj.fullName);
proxyObj.fullName = 'Lee';
console.log(hongEmp.firstName, hongEmp.lastName);
