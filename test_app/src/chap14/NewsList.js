import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import usePromise from "./lib/usePromise";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  maring-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-rignt: 1rem;
  }
`;

const API_KEY = "5379520c5e8e4b4faedb29acf95bcb65";

const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === "all" ? "" : `&category=${category}`;
  //       const FETCH_URL = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=`;
  //       const response = await axios.get(`${FETCH_URL}${API_KEY}`);
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);

  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    const FETCH_URL = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=`;
    return axios.get(FETCH_URL);
  }, category);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생 !</NewsListBlock>;
  }

  {
    console.log("res = ", response);
  }
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
