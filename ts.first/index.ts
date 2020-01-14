function hu(n) {
  let i: number = n;
  let m: number = 0;
  while (i > 0) {
    m = m * 10 + i % 10;
    i /= 10;
  }
  return m == n;
}
function wen() {
  let a: number = 484;
  let b: Boolean;
  b = hu(a);
  if (b)
    console.log(true);
  else
    console.log(false);
}