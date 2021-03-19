export interface RouteItemConfig {
  children?: RouteItemConfig[];
  hideChildrenInMenu?: boolean;
  hideInMenu: boolean;
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  icon: string;
  title: string;
  key?: string;
  disabled?: boolean;
  path: string;
  parentKeys?: string[];
  exact: boolean;
  auth: string[];
  [key: string]: any;
}
declare module 'react-custom-scrollbars';
