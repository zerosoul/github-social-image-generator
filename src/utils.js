import URLSearchParams from '@ungap/url-search-params';

export function getTimeFormated(count, zh = false) {
  return zh
    ? `${String(Math.floor(count / 60))}分${String(count % 60)}秒`
    : `${String(Math.floor(count / 60)).padStart(2, '0')}:${String(count % 60).padStart(2, '0')}`;
}

export function getDateFormatted(date = null) {
  const obj = date ? new Date(date) : new Date();
  let year = obj.getFullYear();
  let m = String(obj.getMonth() + 1).padStart(2, '0');
  let d = String(obj.getDate()).padStart(2, '0');
  return `${year}-${m}-${d}`;
}
export function getQueryValue(key = '') {
  const params = new URLSearchParams(location.search);
  const val = params.get(key) || '';
  return val;
}
export function getRepo(url = '') {
  if (!url) return null;
  try {
    let tmp = new URL(url);
    let isOrigin = tmp.host == 'github.com';
    let isHttp = tmp.protocol.indexOf('http') > -1;
    let isPath = tmp.pathname.split('/').length === 3;
    // eslint-disable-next-line no-unused-vars
    let [unused, owner = '', name = ''] = tmp.pathname.split('/');
    let isFull = owner && name;
    if (isOrigin && isHttp && isPath && isFull) {
      return { owner, name };
    }
  } catch (error) {
    return null;
  }

  return null;
}
