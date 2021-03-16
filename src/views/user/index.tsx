import { getTodayTodoList } from '@/api/user';
import React, { useEffect } from 'react';

import './index.less';

const About: React.FC = () => {
  useEffect(() => {
    getTodayTodoList();
  }, []);
  return <div>user</div>;
};
export default About;
