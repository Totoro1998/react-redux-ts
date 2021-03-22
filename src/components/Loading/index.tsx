import 'nprogress/nprogress.css';
import { Spin } from 'antd';
import NProgress from 'nprogress'; // progress bar
import React, { useEffect } from 'react'; // progress bar style
import Style from './index.module.less';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const Loading = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={Style.container}>
      <Spin />
    </div>
  );
};

export default Loading;
