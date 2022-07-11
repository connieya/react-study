# 함수형 컴포넌트


## props

`App.js`

```javascript
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;

```

MyComponent.js

```javascript
import React from "react";

const MyComponent = (props) => {
  return <div>안녕하세요 , 제 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;

```


### 태그 사이의 내용을 보여주는 children


`App.js`

```javascript
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent>리액트</MyComponent>
    </>
  );
}

export default App;

```


`MyComponent.js`

```javascript
import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      안녕하세요 , 제 이름은 {props.name}입니다. <br />
      children 값은 리액트 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;

```

```javascript
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent name={3} favoriteNumber={1}>
        리액트
      </MyComponent>
    </>
  );
}

export default App;

```


```javasript
import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  //   const { name, children } = props;

  return (
    <div>
      안녕하세요 , 제 이름은 {name}입니다. <br />
      children 값은 {children} 입니다. <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.prototype = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;

```


# 클래스형 컴포넌트 

`App.js`

```javascript

import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent name={3} favoriteNumber={1}>
        리액트
      </MyComponent>
    </>
  );
}

export default App;

```


`MyComponent.js`

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요 , 제 이름은 {name} 입니다. <br />
        children 값은 {children} 입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

export default MyComponent;

```