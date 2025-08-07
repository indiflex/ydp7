import { add } from 'exctx';

export const hi = (time: string) => `Hi~ ${firstUpperCase(time)}!`;
export const good = (time: string) => `Good ${firstUpperCase(time)}!`;

export function firstUpperCase(str: string) {
  const [first, ...rests] = [...str];
  return `${first.toUpperCase()}${rests.join('')}`;
}

const two = add(1, 2);
console.log('🚀 two:', two);
