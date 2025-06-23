var gg = 1;
let bb = 2;
function f1(x, y) {
  var gg = 11;
  let bb = 22;
  console.log('f1>', gg, bb, zz, f2, f2.length);
  {
    const xx = 99;
    f2('nest-first');
    var zz = 88;
    let lll = 0;
  }
  function f2(t, u, v) {
    console.log(t, 'inner2', xx, zz, u, v);
  }
  var zz = 800;
  f2('second');
}
function f2(g) {
  console.log(g, 'global f2>', gg, bb, xx, kk); // ?
}
let xx = 9;
if (gg > 0) {
  var kk = 33;
  const yy = 9;
}
f1(1, 2);
console.log(kk); // ? yy is not defined in global scope
f2('third');
