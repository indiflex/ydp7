class Animal {
  constructor(name) {
    console.log('Animal>>', name);
  }
  eat(food) {
    console.log(`Animal eat ${food}`, this.name);
  }
}

const dog = new Animal('Dog');

function CF() {
  console.log('CF>>', new.target);
  if (!new.target) throw new Error('Call with new keyword!!');
}

new CF();

class Dog extends Animal {
  name;
  #age;
  constructor(name, age = 3) {
    super(); // this
    this.name = name;
    this.#age = age;
  }
  eat(food) {
    console.log(`Dog eat ${food}`, this.name);
  }
  bark() {
    console.log('bow wow', this.name);
  }

  getName() {
    return this.name;
  }

  // getter
  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }
}
console.log(':>>', Dog.constructor === Animal.constructor);
console.log(':>>', Dog.constructor.name, Animal.constructor.name);

const obj = {
  id: 1,
  eat() {
    console.log('eat', this.id);
  },
};
obj.eat();

const lucy = new Dog('Lucy', 7);
lucy.eat('사료');
console.log(':>>', lucy.constructor.name, Animal.constructor.name);
// Dog.prototype.eat.call(lucy, 'Apple');
console.log('lucy.name=', lucy.name, lucy.getName(), lucy.age);

console.log('AP>>', Animal.prototype);
console.log('DP>>', Dog.prototype);
console.log('🚀 lucy:', lucy, lucy.__proto__);
