import React from 'react';
import { useEffect, useState } from 'react';
const Sub = () => {
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
};

export default Sub;
