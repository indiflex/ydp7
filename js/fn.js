const arr = ['1', '2', '3'];
const x11 = parseInt('101', 2);
console.log('🚀 x11:', x11);

Array.prototype.mapX = function (f) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    // results.push(f(this[i], i, this));
    results.push(f(this[i]));
  }

  return results;
};

const unary = (f) =>
  f.length === 1 ? f
                 : (a) => f(a);
const rets = arr.map(unary(parseInt));
console.log('🚀 rets:', rets)
const rets2 = arr.map(unary(Number));
console.log('🚀 rets2:', rets2)
const rets3 = arr.mapX(parseInt);
console.log('🚀 rets3:', rets3)

// const ffff = (a, i, orgArray) => parseInt(a, i, orgArray);
// ffff('123', 0, ['123']);
// console.log(parseInt('1', 0, arr));
// console.log(parseInt('2', 1, arr));
// console.log(parseInt('3', 2, arr));

return;
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    // timer = setTimeout(() => fn(...args), delay);
    timer = setTimeout(fn, delay, ...args);
  }
};

const throttle = (fn, delay) => {
  let timer;
  return (...args) => {
    console.log('throttle>>>', delay)
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  }
}

const s = () => console.log('search!!');
// const search = debounce(s, 1000);
const search = throttle(s, 1000);
setInterval(() => search(), 200);

return;
globalThis.name = 'GlobalName';
const dogx = {
  name: 'Maxx',
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    // setTimeout(this.showMyName.bind(this), 1000);
    setTimeout(() => this.showMyName(), 1000);
    // setTimeout(this.showMyName, 1000);
  }
};

const x1 = dogx.whatsYourName();
console.log('🚀 x1:', x1)

return;
this.name = 'ModuleName';
const hong = {id: 1, name: 'Hong'};
const kim = { id: 2, name: 'Kim' };

const expressFn = function (name) {
  console.log('efn -->',
    this.name,
    name,
    this instanceof expressFn
  );
};

const arrowFn = name => {
  console.log('afn -->', 
         this, this.name, name);
};

const arrowFn2 = (name, self) => {
  console.log('afn -->', 
         self, self.name, name);
};

const boundExpressFn = expressFn.bind(hong);
boundExpressFn('EEE');
expressFn.call(hong, 'EEE22');
expressFn.apply(hong, ['EEE22']);

Object.assign(this, kim);
arrowFn('AAA');
arrowFn('AAA', kim);
return;

this.x = 111;
const Cat = (name) => {
  console.log('Cat>>', this, new.target);
  this.name = name;

  this.bark = function () {
console.log('bark=', new.target, this.name, name);
  };

  this.bark2 = () =>
    console.log('bark2=', this.name, name);

  return this;
}

// const cat = new Cat(''); // error!!
const cat = Cat('Coco');
// const b = cat.bark;
// b();
cat.bark(); // ?
cat.bark2(); // ?
// Cat.bark(); // ?
console.log(typeof cat, cat === this); // ? 
return;


// cf. FunctionEnvironmentRecord.[[ThisValue]]

return;
const Dog = function (name) {
  console.log(this, new.target, this instanceof Dog);
  this.name = name;
  this.bark = function () {
    console.log('bark=', new.target, this.name, name);
  };
  this.bark2 = () => {
    console.log('bark2=', new.target, this.name, name);
  };
};

const dog = Dog('Doggy');
console.log('-------------');
const lucy = new Dog('Lucy');
// Dog.bark(); // ?
lucy.bark(); // ?
lucy.bark2(); // ?
console.log('type=', typeof dog); // ?
console.log('type=', typeof lucy, lucy instanceof Dog); // ?
return;
