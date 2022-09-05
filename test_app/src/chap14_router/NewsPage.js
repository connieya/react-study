import React from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";

const NewsPage = ({ match }) => {
  // 카테고리가 선택되지 않았으면 기본값 all 로 사용
  const category = match.params.category || "all";
  console.log("뉴스 페이지 = ", category);
  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
