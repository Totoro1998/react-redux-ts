import intersection from 'lodash/intersection';

export function getQueryVariable(url: string, variable: string) {
  const query = url.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}
export function hasAuth(roles1: string[], roles2: string[]) {
  return intersection(roles1, roles2).length > 0;
}
