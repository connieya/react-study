# 클래스형 컴포넌트의 state

`counter.js`

```javascript
import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default counter;

```

`App.js`

```javascript
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;

```


### constrictor 사용하지 않고 state 사용하기

```javascript

import React, { Component } from "react";

class counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default counter;

```

# 함수형 컴포넌트 state


### 배열 비 구조화 할당

```javascript
const array = [1,2];
const one = array[0];
const two = array[1];
```

=>

```javascript
const array = [1,2];
const [one , two] = array
```


`Say.js`

```javascript
import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요 !");
  const onClickLeave = () => setMessage("안녕히 가세요 !");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;

```