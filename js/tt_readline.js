const readline = require('readline');
const { stdin } = require('process');

const rl = readline.createInterface({ input: stdin });

function* add() {
  const a = yield 'first num:';
  const b = yield 'second num:';
  return a + b;
}

const adder = add();
const { value } = adder.next();
console.log(value);
// let af;
// do {
//   af = adder.next();
//   console.log('🚀 af:', af);
// } while (!af.done);

rl.on('line', answer => {
  // console.log('line.answer>>', answer);
  const { value, done } = adder.next(+answer);
  if (done) {
    console.log('result is', value);
    return rl.close();
  }

  console.log(value);
  if (answer === 'bye') rl.close();
}).on('close', () => {
  process.exit();
});

// ---------------------
class Subway {
  #ret = [];

  constructor(start, end) {
    let curStaIdx = LINE2.indexOf(start);
    while (!this.#ret.includes(end)) {
      if (curStaIdx >= LINE2.length) curStaIdx = 0;
      this.#ret.push(LINE2[curStaIdx++]);
    }
  }

  *[Symbol.iterator]() {
    for (const i of this.#ret) {
      yield i;
    }
  }

  iterator() {
    this[Symbol.iterator]();
  }

  toString() {
    return this.#ret.toString();
  }
}
