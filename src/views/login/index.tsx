import { Avatar, Button } from 'antd';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { setCookie } from '@/utils/cookies';
import { getQueryVariable } from '@/utils/common';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import image from '@/assets/icon.png';
import Style from './index.module.less';
import { getUser } from '../../model/slice/userSlice';
import { toggleIsLogin } from '../../model/slice/appSlice';

type ProductType = 'webeye' | 'outer';

const Login: React.FC<RouteComponentProps> = ({ location }) => {
  const dispatch = useDispatch();
  const getGotoUrl = () => {
    let env = '';
    if (
      window.location.origin.includes('dev-gamepub') ||
      window.location.origin.includes('localhost') ||
      window.location.origin.includes('127.0.0.1')
    ) {
      env = `https://dev-gamepub.modooplay.com/cas/before?next=${window.location.origin.replace(
        'localhost',
        '127.0.0.1',
      )}/login`;
    } else {
      env = `https://gamepub.modooplay.com/cas/before?next=${window.location.origin.replace(
        'localhost',
        '127.0.0.1',
      )}/login`;
    }
    return {
      webeye: `${env}`,
    };
  };
  const session = getQueryVariable(location.search, 'session');
  const gotoThirdPartLogin = (type: ProductType) => {
    window.location.href = getGotoUrl()[type];
  };
  useEffect(() => {
    if (session) {
      dispatch(getUser());
    }
  }, [dispatch, session]);
  if (session) {
    let redirect = '';
    dispatch(toggleIsLogin());
    setCookie('session', session);
    if (localStorage.getItem('redirect')) {
      redirect = decodeURIComponent(localStorage.getItem('redirect')!);
      localStorage.removeItem('redirect')!;
      return <Redirect to={redirect} />;
    }
    return <Redirect to="/" />;
  }
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.title}>Harbor Pub</div>
        <div className={Style.image}>
          <Avatar shape="circle" size={120} src={image} />
        </div>
        <div className={Style.buttons}>
          <Button type="primary" onClick={() => gotoThirdPartLogin('webeye')}>
            正式员工飞书登录
          </Button>
          <Button type="primary">外部员工飞书登录</Button>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Login);
