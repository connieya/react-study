import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>로그인 페이지</h1>
      <button
        onClick={() => {
          if (window.confirm('로그인 하시겠습니까?')) {
            navigate('/home');
          } else {
            navigate('/sub');
          }
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;
