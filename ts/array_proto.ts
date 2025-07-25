const hongx = { id: 1, name: 'Hong', dept: 'Server' };
const kimx = { id: 2, name: 'Kim', dept: 'Server' };
const leex = { id: 3, name: 'Lee', dept: 'Client' };
const users = [hongx, leex, kimx];

type PropType = string | number | symbol;
declare global {
  interface Array<T> {
    firstObject: T;
    lastObject: T;
    mapBy<P extends keyof T>(prop: P): T[];
    filterBy<P extends keyof T>(
      prop: P,
      value: T[P],
      isIncludes?: boolean
    ): T[];
    rejectBy<P extends keyof T>(
      prop: P,
      value: T[P],
      isIncludes?: boolean
    ): T[];
    findBy<P extends keyof T>(prop: P, value: T[P]): T;
    sortBy<P extends keyof T | `${keyof T & string}:${'asc' | 'desc'}`>(
      prop: P
    ): T[];
    groupBy<GF extends (a: T) => PropType>(gfn: GF): Record<PropType, T[]>;
  }
}

Array.prototype.mapBy = function (prop: string) {
  return this.map(a => a[prop]);
};
console.log(users.mapBy('id')); // [1, 3, 2];
console.log(users.mapBy('name')); // ['Hong', 'Lee', 'Kim']);

Array.prototype.filterBy = function <T, P extends keyof T>(
  prop: P,
  value: T[P],
  isIncludes = false
) {
  if (isIncludes) {
    return this.filter(
      (a: T) =>
        Array.isArray(a[prop]) ||
        (typeof a[prop] === 'string' &&
          typeof value === 'string' &&
          a[prop]?.includes(value))
    );
  }

  return this.filter(a => a[prop] === value);
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

Array.prototype.findBy = function (prop, value) {
  return this.find(a => a[prop] === value);
};
console.log(users.findBy('name', 'Kim')); //  kim;

Array.prototype.sortBy = function <
  T,
  P extends keyof T | `${keyof T & string}:${'asc' | 'desc'}`
>(prop: P) {
  const [key, direction = 'asc'] = (
    typeof prop === 'string' && prop.includes(':') ? prop.split(':') : [prop]
  ) as [keyof T, 'asc' | 'desc'];

  const dir = direction.toLowerCase() === 'desc' ? -1 : 1;
  return this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
};
console.log(users.sortBy('name:desc')); //  [lee, kim, hong];
console.log(users.sortBy('name')); // [hong, kim, lee]

Array.prototype.groupBy = function <T, GF extends (a: T) => PropType>(gfn: GF) {
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

Object.defineProperties(Array.prototype, {
  firstObject: {
    get<T>(this: T[]) {
      return this[0];
    },
    set<T>(this: T[], value: T) {
      this[0] = value;
    },
  },
  lastObject: {
    get<T>(this: T[]) {
      return this.at(-1);
    },
    set(value) {
      this[this.length - 1] = value;
    },
  },
});

console.log('first/last=', users.firstObject.name, users.lastObject.name); // hong/lee
users.firstObject = kimx;
users.lastObject = hongx;
console.log('first/last=', users.firstObject.name, users.lastObject.name); // kim/hong

export {};
