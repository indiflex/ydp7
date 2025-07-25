const myName: string = 'SeniorCoding';

console.log(`Hello, ${myName}!`);

const arr = [1, 2, 3];
arr[1]?.toFixed();

type FX<F extends (a: number, b: number | string) => void> = number | string;
type FXa1 = FX<typeof add>;
type FXa3 = FX<typeof addNumStr>;

const add = (a: number, b: number | string) => a + +b;
const addNumStr = (a: number, b: number | string) => `${a} - ${b}`;
