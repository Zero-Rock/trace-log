/**
 * Created by Zero<mobius_pan@yeah.net> on 2021/1/3 10:30 下午.
 */
const n = 1315423911;
exports.hash = function hash (t, e) {
  let o;
  let a;
  let r = e || n;
  for (o = t.length - 1; o >= 0; o--) {
    a = t.charCodeAt(o);
    r ^= (r << 5) + a + (r >> 2);
  }
  const i = (2147483647 & r).toString(16);
  return i;
};

