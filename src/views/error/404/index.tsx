import { Button, Col, Row } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import React from 'react';
import errImg from '@/assets/404-images/404.png';
import Style from './index.module.less';

const NotFound: React.FC<RouteComponentProps> = ({ history }) => {
  const goHome = () => history.replace('/');
  return (
    <Row className={Style['not-found']}>
      <Col span={12}>
        <img src={errImg} alt="404" />
      </Col>
      <Col span={12} className={Style.right}>
        <h1>404</h1>
        <h2>抱歉，你访问的页面不存在</h2>
        <div>
          <Button type="primary" onClick={goHome}>
            回到首页
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default withRouter(NotFound);
