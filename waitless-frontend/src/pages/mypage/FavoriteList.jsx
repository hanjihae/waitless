import React from "react";
import MyPageListLayout from "../../components/MyPageListLayout";

const myFavorites = [
  {
    id: 1,
    image: "/img/sample/restaurant1.png", // 실제 이미지 경로로 교체 필요
    name: "마리스그릴",
    date: "이탈리아 음식",
  },
  {
    id: 2,
    image: "/img/sample/restaurant2.png", // 실제 이미지 경로로 교체 필요
    name: "닭밥전문점 희(熙)",
    date: "일식",
  },
];

const FavoriteList = () => (
  <MyPageListLayout reservations={myFavorites} title="즐겨찾기" />
);

export default FavoriteList;
