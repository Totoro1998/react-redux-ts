import { getTodayTodoList } from '@/api/user';
import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    getTodayTodoList();
  }, []);
  return <div>user</div>;
};
export default About;
