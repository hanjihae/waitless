import React, { useState } from "react";
import FooterLayout from "../../components/FooterLayout";
import "../../styles/main/Search.css";

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
    <div className="mobile-root">
      <header className="search-header">
        <span className="title">검색</span>
      </header>
      <div className="search-container">
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
                    <span
                      className="remove"
                      onClick={() =>
                        setRecent(recent.filter((_, i) => i !== idx))
                      }
                    >
                      ×
                    </span>
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
                      <span className="result-review">
                        ({r.reviewCount.toLocaleString()})
                      </span>
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
      </div>

      <FooterLayout active="search" />
    </div>
  );
};

export default Search;
