function findSum(n) {
  if (n <= 1) return n;
  return n + findSum(n - 1);
}
// console.log('🚀 find-sum:', findSum(10000));

let sum = 0;
for (let i = 1; i <= 10000; i += 1) sum += i;

console.log('🚀  sum:', sum, neverOverflowSum(10000));

function neverOverflowSum(n) {
  let tot = 0;
  let curRunN = n;
  function runner(m) {
    if (m % 1000 === 0) console.log('🚀 m:', m);
    curRunN = m;
    if (m <= 1) return m;
    try {
      // 10000 + 9999 + ... + 0
      // 7000 + 6999 + .... + 0
      // 3000 + 2999 + .....
      return m + runner(m - 1);
    } catch (err) {
      return 0;
    }
  }

  while (curRunN > 1) {
    console.log('curRunN=>', curRunN);
    tot += runner(curRunN);
    console.log('tot=', tot, curRunN);
  }

  return tot;
}
