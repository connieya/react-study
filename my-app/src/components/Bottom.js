import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { increase, decrease } from '../store';
const Bottom = (props) => {
  const { addNumber, subNumber } = props;
  const dispatcher = useDispatch();
  return (
    <div className="sub_container">
      <h1>bottom</h1>
      <div>
        <button onClick={addNumber}>증가 vol.1</button>
        <button onClick={subNumber}>감소 vol.1</button>
      </div>
      <div>
        <button onClick={() => dispatcher(increase('건희'))}>증가 vol.2</button>
        <button onClick={() => dispatcher(decrease('거니'))}>감소 vol.2</button>
      </div>
    </div>
  );
};

export default Bottom;
