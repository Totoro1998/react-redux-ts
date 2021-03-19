import { RouteItemConfig } from '@/types/app';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import { pathToRegexp } from 'path-to-regexp';
import filter from 'lodash/filter';

const getMeunMatchKeys = (flatMenuKeys: string[], paths: string[]) => {
  return reduce(
    paths,
    (matchKeys: string[], path: string) =>
      matchKeys.concat(filter(flatMenuKeys, item => pathToRegexp(item).test(path))),
    [],
  );
};

const getFlatMenuKeys = (menuData: RouteItemConfig[]) =>
  reduce(
    menuData,
    (keys: string[], item) => {
      keys.push(item.path);
      if (item.children) {
        return keys.concat(getFlatMenuKeys(item.children));
      }
      return keys;
    },
    [],
  );

export const urlToList = url => {
  if (url) {
    const urlList = url.split('/').filter(i => i);
    return map(urlList, (urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`);
  }
  return [];
};
export const formatMenuPath = (data: RouteItemConfig[], parentPath = '/') =>
  map(data, item => {
    const result = {
      ...item,
      path: `${parentPath}${item.path}`,
    };
    if (item.children) {
      result.children = formatMenuPath(item.children, `${parentPath}${item.path}/`);
    }
    return result;
  });

export const formatSelectedKeys = (fullPathMenu, pathname) =>
  getMeunMatchKeys(getFlatMenuKeys(fullPathMenu), urlToList(pathname));
