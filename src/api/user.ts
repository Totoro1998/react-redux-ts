import request from '@/utils/request';

/*
 * 获取用户信息
 */
export const getUserInfo = () => request.get<null>('/cas/userinfo');
/**
 * 获取今日要处理列表
 * @param params
 */
export function getTodayTodoList() {
  return request.get<null>('/api/workbench/today/todo/list');
}
