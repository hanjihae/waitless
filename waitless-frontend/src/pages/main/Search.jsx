import React, { useState } from "react";
import MobileLayout from "../../components/MobileLayout";
import FooterLayout from "../../components/FooterLayout";

const Search = () => {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState(["마리스그릴", "오브셀라"]);
  const [results, setResults] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    // 실제 검색 로직에 따라 결과를 업데이트
    if (value === "마") {
      setResults([
        {
          id: 1,
          image: "/img/sample/restaurant1.png",
          name: "마리스그릴",
          category: "이탈리아 음식",
          rating: 4.3,
          reviewCount: 1028,
        },
        {
          id: 2,
          image: "/img/sample/restaurant2.png",
          name: "마라러버",
          category: "마라탕",
          rating: 4.5,
          reviewCount: 144,
        },
      ]);
    } else {
      setResults([]);
    }
  };

  return (
    <MobileLayout>
      <style>{`
    .search-header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 40px 48px 40px 32px;
      background: #fff;
      font-weight: 700;
      font-size: 40px;
      height: 180px;
    }
    .search-bar-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 32px 0 24px 0;
    }
    .search-bar {
      width: 100%;
      max-width: 850px;
      min-width: 300px;
      display: flex;
      align-items: center;
      background: #fff;
      border-radius: 100px;
      background: #F5F5F5;
      padding: 0 24px;
      height: 110px;
      flex-shrink: 0;
    }
    .search-bar-icon {
      width: 50px;
      height: 50px;
      background-image: url('/img/icon/search-icon-gray.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin: 0 18px;
    }
    .search-bar-input {
      border: none;
      outline: none;
      font-size: 32px;
      flex: 1;
      background: transparent;
      color: #757575;
    }
    .recent-search {
      padding: 60px 130px 0 120px;
      background: #fff;
    }
    .recent-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      font-size: 35px;
      font-weight: 800;
    }
    .recent-title .clear-all {
      color: #b3b3b3;
      cursor: pointer;
      font-size: 23px;
    }
    .recent-title .clear-all:hover {
      color: #6253D3;
    }
    .recent-search ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .recent-search li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      color: #757575;
      font-size: 28px;
    }
    .recent-search li:last-child {
      border-bottom: none;
    }
    .recent-search li .remove {
      color: #b3b3b3;
      cursor: pointer;
      font-size: 35px;
      margin-left: 10px;
    }
    .no-recent {
      width: 100%;
      max-width: 850px;
      margin: 0 auto;
      padding: 200px 48px 0 48px;
      text-align: center;
      color: #888;
      font-size: 30px;
    }
    .search-results {
      margin: 40px 0 0 0;
      padding: 0 0 0 0;
    }
    .result-item {
      display: flex;
      align-items: center;
      padding: 40px 0;
      border-bottom: 2px solid #eee;
      margin: 0 80px;
    }
    .result-item:last-child {
      border-bottom: none;
    }
    .result-item img {
      width: 120px;
      height: 140px;
      border-radius: 20px;
      object-fit: cover;
      margin-right: 45px;
    }
    .result-info {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .result-name {
      font-size: 45px;
      font-weight: 700;
      color: #222;
      margin-bottom: 8px;
    }
    .result-star {
      color: #FFC107;
      font-size: 28px;
      margin-left: 4px;
      margin-right: 4px;
      vertical-align: middle;
    }
    .result-rating {
      font-size: 32px;
      font-weight: 700;
      color: #222;
      margin-right: 4px;
    }
    .result-review {
      font-size: 25px;
      color: #888;
    }
    .result-category {
      font-size: 35px;
      color: #444;
    }
    .reservation-arrow {
      background-image: url('/img/icon/next-arrow-icon.png');
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin-left: 24px;
    }
    .no-results {
      width: 100%;
      max-width: 850px;
      margin: 0 auto;
      padding: 200px 48px 0 48px;
      text-align: center;
      color: #888;
      font-size: 30px;
    }
    .result-meta {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .result-star,
    .result-rating,
    .result-review {
      line-height: 1;
      vertical-align: middle;
      display: inline-block;
    }
        `}</style>
      <header className="search-header">
        <span className="title">검색</span>
      </header>
      <div className="search-bar-container">
        <div className="search-bar">
          <span className="search-bar-icon"></span>
          <input
            className="search-bar-input"
            type="text"
            placeholder="매장을 검색해보세요."
            value={query}
            onChange={handleInput}
          />
        </div>
      </div>

      {query === "" ? (
        // 검색어가 없을 때
        recent.length > 0 ? (
          <div className="recent-search">
            <div className="recent-title">
              최근 검색어
              <span className="clear-all" onClick={() => setRecent([])}>
                모두 지우기
              </span>
            </div>
            <ul>
              {recent.map((word, idx) => (
                <li key={idx}>
                  {word}
                  <span className="remove" onClick={() => setRecent(recent.filter((_, i) => i !== idx))}>×</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="no-recent">최근 검색어가 없습니다.</div>
        )
      ) : results.length > 0 ? (
        // 검색 결과가 있을 때
        <div className="search-results">
          {results.map((r) => (
            <div className="result-item" key={r.id}>
              <img src={r.image} alt={r.name} />
              <div className="result-info">
                <div>
                  <div className="result-meta">
                    <span className="result-name">{r.name}</span>
                    <span className="result-star">★</span>
                    <span className="result-rating">{r.rating}</span>
                    <span className="result-review">({r.reviewCount.toLocaleString()})</span>
                  </div>
                </div>
                <div className="result-category">{r.category}</div>
              </div>
              <span className="reservation-arrow"></span>
            </div>
          ))}
        </div>
      ) : (
        // 검색 결과가 없을 때
        <div className="no-results">검색 결과가 없습니다.</div>
      )}

      <FooterLayout active="search" />
    </MobileLayout>
  );
};

export default Search;
