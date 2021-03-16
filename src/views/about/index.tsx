import './index.less';
import { useSelector } from 'react-redux';
import { userState } from '@/model/slice/userSlice';
import React from 'react';

const About: React.FC = () => {
  const userInfo = useSelector(userState);
  return <div>{userInfo.name}</div>;
};
export default About;
