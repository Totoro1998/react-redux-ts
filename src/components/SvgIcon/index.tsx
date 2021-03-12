import React from 'react';
import './index.less';

export type SvgIconProps = {
  iconClass: string;
  className: string;
};

const SvgIcon: React.FC<SvgIconProps> = ({ iconClass, className }) => {
  const svgClass = className ? `svg-icon '${className}` : 'svg-icon';
  const iconName = `#icon-${iconClass}`;
  return (
    // 不要去掉该span
    <span className="anticon">
      <svg className={svgClass} aria-hidden="true">
        <use xlinkHref={iconName} />
      </svg>
    </span>
  );
};
export default SvgIcon;
