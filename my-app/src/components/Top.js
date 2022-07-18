import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
const Top = (props) => {
  const { number } = props;

  const { num, username } = useSelector((store) => store);
  return (
    <div className="sub_container">
      <h1>Top</h1>
      <p> 번호 vol.1 : {number}</p>
      <p> 번호 vol.2 : {num}</p>
      <p> 이름 : {username}</p>
    </div>
  );
};

export default Top;
