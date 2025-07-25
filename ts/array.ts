const hongx = { id: 1, name: 'Hong', dept: 'Server' };
const kimx = { id: 2, name: 'Kim', dept: 'Server' };
const leex = { id: 3, name: 'Lee', dept: 'Client' };
const users = [hongx, leex, kimx];

type PropType = string | number | symbol;

declare global {
  interface Array<T> {
    firstObject: T;
    lastObject: T;
    mapBy<P extends keyof T>(prop: P): T[P][];
    filterBy<P extends keyof T>(prop: P, val: T[P], isIncludes?: boolean): T[];
    rejectBy<P extends keyof T>(prop: P, val: T[P], isIncludes?: boolean): T[];
    findBy<P extends keyof T>(prop: P, val: T[P]): T;
    sortBy<P extends keyof T | `${keyof T & string}:${'asc' | 'desc'}`>(
      prop: P
    ): T[];
    groupBy<GF extends (a: T) => PropType>(gfn: GF): Record<PropType, T[]>;
  }
}

Array.prototype.groupBy = function <T, GF extends (a: T) => PropType>(
  this: Array<T>,
  gfn: GF
) {
  const ret: Record<PropType, T[]> = {};
  for (const a of this) {
    const k = gfn(a);
    ret[k] ||= [];
    ret[k].push(a);
  }

  return ret;
};
console.log(users.groupBy(({ dept }) => dept));
/*
Server: [
  { id: 1, name: 'Hong', dept: 'Server' },
  { id: 2, name: 'Kim', dept: 'Server' },
],
Client: [
  { id: 3, name: 'Lee', dept: 'Client' }
],
*/

Array.prototype.mapBy = function (prop) {
  return this.map(a => a[prop]);
};
console.log(users.mapBy('id')); // [1, 3, 2];
console.log(users.mapBy('name')); // ['Hong', 'Lee', 'Kim']);

Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  return this.filter(
    isIncludes ? a => a[prop]?.includes(value) : a => a[prop] === value
  );
};
console.log(users.filterBy('id', 2)); // [kim]);
console.log(users.filterBy('name', 'i', true)); // [kim]

Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  return this.filter(
    isIncludes ? a => !a[prop]?.includes(value) : a => a[prop] !== value
  );
};
console.log(users.rejectBy('id', 2)); // [hong, lee]
console.log(users.rejectBy('name', 'i', true)); // [hong, lee]

// findBy<P extends keyof T>(prop: P, val: T[P]): T;
Array.prototype.findBy = function (prop, value) {
  return this.find(a => a[prop] === value);
};

console.log(users.findBy('name', 'Kim')); //  kim;

function isSortDirection(prop: string[]): prop is [string, 'asc' | 'desc'] {
  return (
    Array.isArray(prop) &&
    prop.length === 2 &&
    prop[0] != undefined &&
    prop[0].length > 0 &&
    (prop[1] === 'asc' || prop[1] === 'desc')
  );
}

Array.prototype.sortBy = function <T, P>(prop: P) {
  // const [key, direction = 'asc'] = String(prop).split(':');

  const [key, direction = 'asc'] = (
    typeof prop === 'string' && prop.includes(':') ? prop.split(':') : [prop]
  ) as [keyof T, 'asc' | 'desc'];

  // let key: string;
  // let direction: 'asc' | 'desc' = 'asc';

  // if (prop && typeof prop === 'string') {
  //   const props = prop.split(':');
  //   if (isSortDirection(props) && typeof props[0] === 'string') {
  //     [key, direction] = props;
  //   } else {
  //     key = prop;
  //   }
  // }

  const dir = direction.toLowerCase() === 'desc' ? -1 : 1;
  return this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
};
console.log(users.sortBy('name:desc')); //  [lee, kim, hong];
console.log(users.sortBy('name')); // [hong, kim, lee]

Object.defineProperties(Array.prototype, {
  firstObject: {
    get<T>(): T {
      return this[0];
    },
    set<T>(value: T) {
      this[0] = value;
      // this.with(0, value); // pure fn
    },
  },
  lastObject: {
    get<T>(): T {
      return this.at([-1]);
    },
    set<T>(value: T) {
      this[this.length - 1] = value;
      // this.with(-1, value);
    },
  },
});

console.log('first/last=', users.firstObject.name, users.lastObject.name); // hong/lee
users.firstObject = kimx;
users.lastObject = hongx;
console.log('first/last=', users.firstObject.name, users.lastObject.name); // kim/hong

export {};
