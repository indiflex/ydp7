class Dog {
  constructor(name) {
    console.log('🚀 constructor - name:', name);
    this.name = name;
    this.insFn = () => console.log('InstanceFn!');
  }

  getName() {
    console.log('🚀 this:', this);
    return this.name;
  }

  fn() {
    return 'FN';
  }

  static sfn() {
    return 'SFN';
  }
}
const lucy = new Dog('Lucy');
const { sfn } = Dog;
const { name: aa, fn: fnnn, getName } = lucy;
lucy.insFn();

console.log(aa, sfn(), fnnn(), getName); // ?
// getName(); // ?
const gnb = getName.bind(lucy)();
console.log('🚀 gnb:', gnb);
lucy.getName();

return;
const weeks = ['일', '월', '화', '수', '목', '금', '토'];
const getNextWeek = (() => {
  let widx = -1;
  return () => {
    widx += 1; // side-effect!
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
})();

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 100);

return;
const before = () => console.log('before....');
const after = result => console.log('after...', result);

const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) =>
  `${id}/${nickname}/${email}/${level}`;

const template = f => {
  return (...args) => {
    before();
    const r = f(...args);
    setImmediate(() => after(r));
    return r;
  };
};

const temp1 = template(someFn); // before → someFn → after 실행
const temp2 = template(someFn2); // before → someFn2 → after 실행

console.log('temp1>>', temp1('sico', 'hello'));
console.log('temp2>>', temp2(1, 'sico', 'sico@gmail.com', 5));
