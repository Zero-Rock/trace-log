/**
 * Created by Zero<mobius_pan@yeah.net> on 2021/1/3 10:34 下午.
 */
interface ICookieOptions {
  expires?: Date;
  domain?: string
}

/**
 * 获取所有上级域名
 */
export const getDomains = (): string[] => {
  const result = [];
  try {
    const hostname = location.hostname;
    const hostSplit = hostname.split('.');
    const len = hostSplit.length;
    if (len > 1) {
      for (let i = 2; i <= len; i++) {
        result.push(hostSplit.slice(len - i).join('.'));
      }
    } else {
      result.push(hostname);
    }
  } catch (e) {}
  return result;
};


export const getCookie = (key:string): string => {
  const result: RegExpMatchArray = document.cookie.match(new RegExp(`(?:^|;)\\s*${key}=([^;]+)`)) || [];
  return result ? result[1] : '';
};


const _setCookie = (key:string, val: string, options: ICookieOptions):string => {
  const expires = options.expires;
  let date = new Date();
  if (expires && (typeof expires === 'number' || expires.toUTCString)) {
    if (typeof expires === 'number') {
      date.setTime(date.getTime() + 24 * expires * 60 * 60 * 1000);
    } else {
      date = expires;
    }
    val += `; expires=${date.toUTCString()}`;
  }
  val += `; domain=${options.domain}`;
  val += '; path=/';
  document.cookie = `${key}=${val}`;
  return getCookie(key);
};

export const setCookie = (key:string, val:string, options:ICookieOptions):void => {
  try {
    if (!options) {
      options = {};
    }
    if (options.domain) {
      _setCookie(key, val, options);
    } else {
      const domains = getDomains();
      for (let i = 0; i < domains.length;) {
        options.domain = domains[i];
        if (_setCookie(key, val, options)) {
          i = domains.length;
        } else {
          i++;
        }
      }
    }
  } catch (e) {}
};
