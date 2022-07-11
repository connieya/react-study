# useMemo

문자를 변경하는 데 

getAddResult를 실행할 필요가 없다.

이때 useMemo 를 사용해서  getAddResult 가 실행 되지 않게 해보자

```javascript
import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('함수 실행됨 ', sum);
    return sum;
  };

  const addResult = useMemo(() => getAddResult(), [list]);

  return (
    <div>
      <button
        onClick={() => {
          setStr('안녕');
        }}
      >
        문자 변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트값 추가
      </button>
      {list.map((i) => (
        <h1>{i}</h1>
      ))}
      {str} : {addResult}
    </div>
  );
}

export default App;

```