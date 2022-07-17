import React from 'react';
import history from './history';

const Login = () => {
  return (
    <div>
      <h1>로그인 페이지</h1>
      <button
        onClick={() => {
          if (window.confirm('로그인 하시겠습니까?')) {
            history.push('/home');
          } else {
            history.push('/edit');
          }
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;
