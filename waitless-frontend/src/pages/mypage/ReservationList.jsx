import React from "react";
import MyPageListLayout from "../../components/MyPageListLayout";

const reservations = [
  {
    id: 1,
    image: "/img/sample/restaurant1.png",
    name: "마리스그릴",
    date: "2025.07.08(화) 오후 2시 / 2명",
  },
  {
    id: 2,
    image: "/img/sample/restaurant2.png",
    name: "닭밥전문점 희(熙)",
    date: "2025.06.18(수) 오후 12시 / 5명",
  },
];

const ReservationList = () => (
  <MyPageListLayout reservations={reservations} title="예약 내역" />
);

export default ReservationList;
