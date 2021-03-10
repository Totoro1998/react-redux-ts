import React from 'react';
import { Button, version } from 'antd';
import './index.less';
import SvgIcon from '@/components/SvgIcon';

const MyButton = () => (
  <div className="MyButton">
    <SvgIcon iconClass="edit" className="MyButton" />
    <h1>antd version: {version}</h1>
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
  </div>
);

export default MyButton;
