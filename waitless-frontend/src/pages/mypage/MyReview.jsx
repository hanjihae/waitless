import React from "react";
import ReviewLayout from "../../components/ReviewLayout";

const reviews = [
  {
    user: "마리스그릴",
    rating: 5.0,
    date: "오늘",
    text: "별로 기대 안하고 갔는데 생각보다 맛있고 가성비도 좋았어요! 번창하세요!!!!!",
    images: ["/img/sample/restaurant1.png", "/img/sample/restaurant2.png"],
  },
  {
    user: "별빛",
    rating: 5.0,
    date: "오늘",
    text: "굿굿\n옆테이블에서 소개팅했음",
    images: ["/img/sample/restaurant3.png"],
  },
  {
    user: "커비",
    rating: 5.0,
    date: "오늘",
    text: "제 입맛에는 좀 짜긴 했는데 양 많고 ㅋ☆\n담에는 슴슴하게 해달라고 요청하려고요~~~",
    images: [
      "/img/sample/restaurant1.png",
      "/img/sample/restaurant2.png",
      "/img/sample/restaurant3.png",
    ],
  },
  {
    user: "소점",
    rating: 5.0,
    date: "오늘",
    text: "무난 양 많았음",
    images: [],
  },
];

const ratingStats = [
  { star: 5, percent: 92 },
  { star: 4, percent: 5 },
  { star: 3, percent: 3 },
  { star: 2, percent: 0 },
  { star: 1, percent: 0 },
];

const MyReview = () => {
  return (
    <ReviewLayout
      title="내가 작성한 리뷰"
      reviews={reviews}
      ratingStats={ratingStats}
    />
  );
};

export default MyReview;
