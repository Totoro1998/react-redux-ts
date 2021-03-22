import React from 'react';
import Style from './index.module.less';

export type SvgIconProps = {
  iconClass: string;
};

const SvgIcon: React.FC<SvgIconProps> = ({ iconClass }) => {
  const iconName = `#icon-${iconClass}`;
  return (
    // 不要去掉该span
    <span className="anticon">
      <svg className={Style['svg-icon']} aria-hidden="true">
        <use xlinkHref={iconName} />
      </svg>
    </span>
  );
};
export default SvgIcon;
