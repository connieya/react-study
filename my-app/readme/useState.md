# useState

### #. 1



```javascript

function App() {
  console.log('APP 실행됨');

  // 다운로드 받음
  const [users, setUsers] = useState([{ id: 5, name: '러브' }]);

  const download = () => {
    let sample = [
      { id: 1, name: '홍길동' },
      { id: 2, name: '임꺽정' },
      { id: 3, name: '장보고' },
      { id: 4, name: '코스' },
    ];
    setUsers([...users, ...sample]);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((user) => (
        <h1>
          {user.id},{user.name}
        </h1>
      ))}
    </div>
  );
}
```

![image](https://user-images.githubusercontent.com/66653324/177591250-ad6eba08-fccb-4088-a119-02db126ee1eb.png)


다운로드 클릭 =>

![image](https://user-images.githubusercontent.com/66653324/177591414-1f86c79a-2b77-4de4-9826-16c09e745b89.png)



### #.2

users 의 다음과 같은 오브젝트 값이 있는데,

다운로드 버튼을 클릭하여 같은 값을 가진 오브젝트를 바인딩한다면

과연 다시 렌더링을 할 것인가?? 



```javascript

function App() {
  console.log('APP 실행됨');

  // 다운로드 받음
  const [users, setUsers] = useState([
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ]);

  const download = () => {
    let sample = [
      { id: 1, name: '홍길동' },
      { id: 2, name: '임꺽정' },
      { id: 3, name: '장보고' },
      { id: 4, name: '코스' },
    ];

    setUsers(sample);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((user) => (
        <h1>
          {user.id},{user.name}
        </h1>
      ))}
    </div>
  );
}
```

답은 다시 리 렌더링 된다.

왜냐하면 값은 같지만 같은 레퍼런스를 참고하지 않기 때문이다.




### #.3

다음의 경우는 어떨까?

sample 이라는 object 를 

useState 에서도 사용하고 

다운로드 버튼을 클릭할 때도 사용한다.

이때는 다시 랜더링이 되는가???

```javascript
function App() {
  console.log('APP 실행됨');

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ];

  // 다운로드 받음
  const [users, setUsers] = useState(sample);
  const download = () => {
    setUsers(sample);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((user) => (
        <h1>
          {user.id},{user.name}
        </h1>
      ))}
    </div>
  );
}
```

답은 다시 렌더링 되지 않는다.

값과 레퍼런스가 같으면 렌더링 되지 않는다.

만약 값은 같은데 다시 렌더링하고 싶으면 어떻게 해야할까??

바로 깊은 복사를 하면된다.


### #.4

깊은 복사를 하면 값이 같아도
참조하는 레퍼런스가 다르기 때문에
렌더링 되지 않는다.

```javascript
function App() {
  console.log('APP 실행됨');

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ];

  // 다운로드 받음
  const [users, setUsers] = useState(sample);
  const download = () => {
    setUsers([...sample]);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((user) => (
        <h1>
          {user.id},{user.name}
        </h1>
      ))}
    </div>
  );
}
```


### #.5

sample 에 push 를 해서 

sample 값이 변경되었는데 리 렌더링이 되지 않는다.

왜??

레퍼런스 변경이 되지 않아서이다.....

이 부분을 잘 이해해야한다.

```javascript
function App() {
  console.log('APP 실행됨');

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ];

  // 다운로드 받음
  const [users, setUsers] = useState(sample);
  const download = () => {
    sample.push({ id: 5, name: '조자룡' });
    console.log(sample);
    setUsers(sample);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((user) => (
        <h1>
          {user.id},{user.name}
        </h1>
      ))}
    </div>
  );
}
```