const once = (f, rebirthDealy = 0) => {
  let didRun = false;
  if (rebirthDealy)
    setInterval(() => {
      didRun = false;
    }, rebirthDealy);

  return function (...args) {
    if (!didRun) {
      didRun = true;
      // return f(...args);
      return f.apply(this, args);
    }
  };
};
const fnx = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fnx(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fnx(2, 7)); // undefined
console.log(fnx(3, 8)); // undefined
console.log('---------------------');

function fivePart(x, y) {
  return `fivePart ${x}, ${y}, id: ${this.id}`;
}
const fn = once(fivePart.bind({ id: 11 }), 1000);
console.log('11=', fn(1, 2));
const fn2 = once(fivePart, 1000);
console.log('22=', fn2.bind({ id: 22 })(3, 4));

const intl = setInterval(() => {
  console.log('xx=', new Date(), fn2.bind({ id: 99 })(5, 6));
}, 200);
console.log('🚀 intl:', intl);
