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
    <div>
      <svg className={svgClass} aria-hidden="true">
        <use xlinkHref={iconName} />
      </svg>
    </div>
  );
};
export default SvgIcon;
