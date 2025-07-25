import React from "react";
import "../styles/restaurant/Review.css";

const ReviewLayout = ({ title, reviews, ratingStats }) => {
  return (
    <div className="review-root">
      {/* 헤더 */}
      <header className="main-header">
        <button className="back-btn"></button>
        <span className="title">{title}</span>
      </header>

      {/* 평점 요약 */}
      <section className="review-summary">
        <div className="summary-left">
          <div className="summary-score">4.3</div>
          <div className="summary-stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <div className="summary-count">(1,029)</div>
        </div>
        <div className="summary-right">
          {ratingStats.map(stat => (
            <div className="stat-row" key={stat.star}>
              <span className="stat-star">{stat.star}</span>
              <div className="stat-bar-bg">
                <div
                  className="stat-bar"
                  style={{ width: `${stat.percent}%` }}
                ></div>
              </div>
              <span className="stat-percent">{stat.percent}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* 리뷰 리스트 */}
      <section className="review-list">
        {reviews.map((r, idx) => (
          <div className="review-item" key={idx}>
            <div className="review-row">
              <span className="review-user">{r.user}</span>
              <div className="review-star">
                <span>★</span>
                <span className="actual-score">{Number(r.rating).toFixed(1)}</span>
                </div>
              <span className="review-date">{r.date}</span>
            </div>
            <div className="review-text">
              {r.text.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
            {r.images.length > 0 && (
              <div className="review-images">
                {r.images.map((img, i) => (
                  <img src={img} alt="" key={i} />
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default ReviewLayout;