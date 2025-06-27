function* fibo() {
  let pre = 0;
  let cur = 1;

  while (true) {
    yield cur;
    [pre, cur] = [cur, pre + cur];
  }
}

const f = fibo();
for (let i = 0; i < 10; i++) console.log(f.next());
