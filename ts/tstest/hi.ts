export const hi = (time: string) => `Hi~ ${firstUpperCase(time)}!`;
export const good = (time: string) => `Good ${firstUpperCase(time)}!`;

export function firstUpperCase(str: string) {
  const [first, ...rests] = [...str];
  return `${first.toUpperCase()}${rests.join('')}`;
}
