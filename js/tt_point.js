const assert = require('assert');
const reduce = (arr, fn, initValue) => {
  let i = 0;
  let acc = initValue ?? arr[i++];

  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
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

return;
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i !== 0 && i === j) {
      console.log('Break All');
      break outerLoop;
    }
    if (i === 1) {
      console.log('Continue Inner Loop', i);
      continue innerLoop;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
// return;
let seats = [
  [1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0],
];

function reserveFirstAvailableSeat(seats) {
  outer: for (let i = 0; i < seats.length; i++) {
    columns: for (let j = 0; j < seats[i].length; j++) {
      if (seats[i][j] === 0) {
        seats[i][j] = 1; // Reserve the seat
        console.log(`Reserved seat at row ${i + 1}, column ${j + 1}`);
        break outer;
      }
    }
  }
}

reserveFirstAvailableSeat(seats);
return;
const prices = [
  10.34232323,
  15,
  'xxx',
  5.67899,
  null,
  20.9,
  1.005121,
  0,
  15.234,
  undefined,
  0.5,
];

console.log('=======문자로 된 숫자 비허용======');
const len = 2;
function avg2D(x) {
  let avgP = 0;
  let count = 0;
  for (const x1 of x) {
    if (!isNaN(x1) && x1 !== null) {
      count += 1;
      avgP += x1 * 10 ** len;
    }
  }
  avgP = ((avgP / count) * 100).toString().split('.')[0] / 100;
  // console.log(+avgP.toFixed(2));
  // console.log(Math.trunc(avgP) / 10 ** len);
}

avg2D(prices);

console.log('=======문자로 된 숫자 허용======');
function avg2DS(x) {
  let avgP = 0;
  let countNaN = 0;
  for (let i = 0; i < x.length; i = i + 1) {
    let sum = avgP + Number(x[i]);
    if (isNaN(sum) || x[i] === null) {
      sum = avgP;
      countNaN = countNaN + 1;
      continue;
    }
    avgP = sum;
  }
  avgP = ((avgP / (x.length - countNaN)) * 100).toString().split('.')[0] / 100;
  console.log(avgP);
}
avg2DS(prices);
return;
let count = 0;
let sum = 0;
for (let price of prices) {
  if (typeof price == 'number') {
    sum += price;
    count++;
  }
}
console.log(parseInt((sum / count) * 100) / 100);
return;

function solution(n) {
  const filteredPrices = prices.filter(val => typeof val === 'number');

  const sum = filteredPrices.reduce((acc, num) => acc + num, 0);

  const average = sum / filteredPrices.length;

  return customToFixedTwo(average);
}

function customToFixedTwo(num) {
  const a = num * 100;
  const [int, decimal] = a.toString().split('.');
  const intNum = Number(int);
  const decimalNum = Number('0.' + decimal);

  const rounded = decimalNum >= 0.5 ? intNum + 1 : intNum;

  return rounded / 100;
}

console.log(solution(prices));
return;

const avg = prices.reduce(
  (price_cnt, cur) => {
    if (cur === 0 || (cur && !isNaN(cur))) {
      price_cnt[0] = price_cnt[0] + cur;
      ++price_cnt[1];
    }
    return price_cnt;
  },
  [0, 0] // id_name
);

console.log(Math.floor((avg[0] / avg[1]) * 100) / 100);

console.log('----- string 허용 -----');

const prices2 = [
  10.34,
  19,
  'xxx',
  5.678,
  null,
  '20.9',
  1.005,
  0,
  undefined,
  0.5,
];

const avg2 = prices2.reduce(
  (acc, cur) => {
    if ((cur === 0 || (cur ?? false)) && !isNaN(Number(cur))) {
      acc[0] = acc[0] + Number(cur);
      ++acc[1];
    }
    return acc;
  },
  [0, 0]
);

console.log(Math.floor((avg2[0] / avg2[1]) * 100) / 100);
return;
function practice5() {
  const prices = [
    10.34,
    19,
    'xxx',
    5.678,
    null,
    '20.9',
    1.005,
    0,
    undefined,
    0.5,
  ];
  // const prices = [10.34232323, 15, 'xxx', 5.67899, null, 20.9, 1.005121, 0, 15.234, undefined, 0.5];

  // 정상적인 숫자찾기
  const checkPrices = prices.filter(price => {
    return price !== null && !isNaN(price);
  });

  // 평균을 위한 더하기
  const sumPrices = checkPrices.reduce((acc, p) => acc + +p, 0);

  // 평균값
  const avgPrices = sumPrices / checkPrices.length;

  console.log('🚀 ~ practice7 ~ avgPrices:', Math.trunc(avgPrices * 100) / 100);

  return;
}
practice5();

return;

function addPointsSunwoo(x, y) {
  //문자열로 전환 후 소수점을 기준으로 문자열 두 개의 배열로 전환
  x = x.toString().split('.'); // ['0', '21354']
  y = y.toString().split('.');

  //정수일 경우에는 소수점 자리에 0을 넣습니다.
  if (x.length === 1) {
    x.push('0');
  }
  if (y.length === 1) {
    y.push('0');
  }

  // 정수 부분 (정수 부분의 합)
  let intPart = +x[0] + +y[0];

  // 소수 부분
  let fPart = 0;

  // 소수점의 길이 (둘 중 더 큰 값)
  let flength = Math.max(x[1].length, y[1].length);

  // 둘의 소수점 자리 차이
  let dDiff = Math.abs(x[1].length - y[1].length);

  switch (flength) {
    // x가 소수점이 더 길 경우
    case x[1].length:
      //만약 음수일 경우 소수점 뒷자리에도 - 부호를 더합니다.
      if (x[0][0] == '-') {
        x[1] = '-' + x[1];
      }
      if (y[0][0] == '-') {
        y[1] = '-' + y[1];
      }

      // 자릿수 맞춰서 더하기
      fPart = Number(x[1]) + Number(y[1]) * 10 ** dDiff;
      break;

    // y가 소수점이 더 길 경우
    case y[1].length:
      if (x[0][0] == '-') {
        x[1] = '-' + x[1];
      }
      if (y[0][0] == '-') {
        y[1] = '-' + y[1];
      }
      fPart = Number(x[1]) * 10 ** dDiff + Number(y[1]);
      break;
  }
  // 정수 부분 + 소수 부분(정수 덧셈을 자릿수로 나눔)
  let final = intPart + fPart / 10 ** flength;
  return console.log(x, y, final);
}

function addPointsMinkook(a, b) {
  const a_str = a.toString();
  const a_fixed = a_str.length - a_str.indexOf('.');
  const b_str = b.toString();
  const b_fixed = b_str.length - b_str.indexOf('.');
  let sum = a + b;
  if (a_fixed > b_fixed) {
    sum = sum.toFixed(a_fixed);
  } else {
    sum = sum.toFixed(b_fixed);
  }
  console.log(a, b, '->', +sum);
}

function addPointsSooku(a, b) {
  const additionResult = a + b;
  const strA = a.toString().split('.')[1]?.length ?? 0; // 소수점이 없는 경우 0 반환
  const strB = b.toString().split('.')[1]?.length ?? 0;

  // let num;
  // if (strA < strB) {
  //   num = strB;
  // }

  // if (strA > strB) {
  //   num = strA;
  // }

  // if (strA === strB) {
  //   num = strA;
  // }
  let num = strA < strB ? strB : strA;

  return console.log(a, b, additionResult.toFixed(num));
}

addPoints(0.21354, 0.1); // 0.31354
addPoints(0.14, 0.28); // 0.42
addPoints(0.34, 0.226); // 0.566
addPoints(10.34, 200.226); // 210.566
addPoints(0.143, -10.28); // -10.137
addPoints(0.143, -10); // -9.857
return;

const WEEK_NAMES = '일월화수목금토';
const day = new Date().getDay();
console.log('>>', WEEK_NAMES[day]);

for (let i = 1; i <= 10; i++) {
  const s = Math.sqrt(i);
  if (s % 1 === 0) continue;
  console.log(+s.toFixed(3));
}
for (let i = 0.1; i < 1; i = i + 0.1) {
  const ret = +i.toFixed(1);
  console.log(ret);
}

for (let i = 1; i <= 10; i++) {
  console.log(i / 10);
}
