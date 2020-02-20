import React from 'react';
import ClassicLayout from '../layouts/ClassicLayout';
import Login from '../src/pages/Login/index';
import './../less/style.less';

const LoginPage = props => (
  <ClassicLayout>
    <Login></Login>
  </ClassicLayout>
);

export default LoginPage;
