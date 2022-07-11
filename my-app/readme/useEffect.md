# useEffect 

-  useEffect Hook을 이용하여 우리는 React에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지를 말합니다.
- App() 함수가 최초로 실행 될 때 실행 된다. (마운트 될 때)
- 첫 번째 인자로 callback 함수, 두 번째 인자로 dependency list가 들어간다.
- 상태 변수가 변경될 때 실행 된다.
  

```javascript
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState(0);

  const download = () => {
    let downloadData = 5;
    setData(downloadData);
  };

  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  });
  return (
    <div>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}
```

더하기 버튼을 눌려도 증가했다가 다시 5로 변한다. 

왜냐하면 더하기 버튼을 눌려서 값이 1 증가 했는데
이때 상태 변수가 변경 되었기 때문에 useEffect 가 실행된다.
useEffect 안에 download 함수가 있어 값이 5가 된다.

즉, 상태 변수가 변경되어서 => useEffect가 실행되었기 때문이다.

그러면 최초로 한 번 만 실행 되고 더 이상 실행 되지 않게 하려면 어떻게 해야할까?

```javascript

import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState(0);

  const download = () => {
    let downloadData = 5;
    setData(downloadData);
  };

  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, []);
  return (
    <div>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;

```

useEffect 두번째 인자에 defendency list 가 들어간다고 했다.

대괄호 '[]' 안에 data 를 넣으면 data 상태 변수에 의존한다는 것이고

위와 같이 빈 대괄호를 넣으면 아무한테도 의존하지 않는다는 뜻이기 때문에,

더하기 버튼을 눌러서 상태 변수가 변해도  useEffect는 아무데도 의존하지 않기 때문에
실행 되지 않는다.

만약 의존하는 데이터가 있다면 ??

```javascript
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  console.log('App 실행됨');
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    let downloadData = 5;
    setData(downloadData);
  };

  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]);
  return (
    <div>
      <h1>검색 : {search}</h1>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색 하기
      </button>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;

```

useEffect 는 search 에 의존한다.

그래서 더하기를 누르다가 검색 버튼을 누르면 

useEffect 가 실행되고 , 값이 5로 바뀐다.

하지만 한 번 더 검색을 누르면 그 이후에는 useEffect 가 실행 되지 않는다.

왜냐하면 검색 버튼을 클릭하면 search 데이터를 2로 변경하는 로직이기 때문에

검색 버튼을 아무리 많이 눌러도 search 데이터는 2로 변하지 않기 때문에 

useEffect 는 한 번만 실행되고 그 뒤로는 실행 되지 않는다.