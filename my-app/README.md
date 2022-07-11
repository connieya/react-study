# React Study

## npm 의존성

- npm install --save styled-components


## 깊은 복사 !!

(... 스프레드 연산) 을 사용하면 깊은 복사가 된다.

(다른 레퍼런스를 참조하고 값만 복사 되는 것)

```javascript
 const a = [1, 2, 3];
 const b = [...a];
 b.push(4);
 console.log('a = ', a); // [1,2,3]
 console.log('b = ', b); // [1,2,3,4]
```

a를 깊은 복사 했기 때문에  
b에 값을 추가해도 a의 값은 변함이 없다.

## 얕은 복사

값만 복사하는 것이 아니라 같은 곳을 참조하기 때문에
b에 새로운 정수 4를 추가하면 a에도 값이 추가 된다.

```javascript
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log('a = ', a); // [1,2,3,4]
console.log('b = ', b); // [1,2,3,4]
```

## [추가하기 : push & concat ](readme/추가하기.md)



##  [filter & map & forEach](readme/반복하기.md)




## [useState](readme/useState.md)


## [useEffect](readme/useEffect.md)



## [useMemo](readme/useMemo.md)



## [useRef](readme/useRef.md)



## styled-component