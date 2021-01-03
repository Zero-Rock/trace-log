/**
 * Created by Zero<mobius_pan@yeah.net> on 2021/1/3 10:22 下午.
 */
const obj2param = (obj: any) => {
  let val;
  const result = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      val = `${obj[key]}`;
      const frag = `${key}=${encodeURIComponent(val)}`;
      result.push(frag);
    }
  }

  return result.join('&');
};

export const hash = (content:string, hase = 1315423911):string => {
  let o;
  let a;
  let r = hase;
  for (o = content.length - 1; o >= 0; o--) {
    a = content.charCodeAt(o);
    r ^= (r << 5) + a + (r >> 2);
  }
  const i = (2147483647 & r).toString(16);
  return i;
};

export default {
  hash,
};
