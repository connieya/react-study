# useRef 

dom를 변경할 때 사용 한다.

```javascript
import { createRef, useRef, useState } from 'react';
import './App.css';

function App() {
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: '길동' },
    { id: 2, name: '꺽정' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());
  return (
    <div>
      <button
        onClick={() => {
          console.log('myRef', myRef);
          // myRef.current.style.backgroundColor = 'red';
          myRefs[1].current.style.backgroundColor = 'red';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}>박스</div>
      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
}

export default App;

```