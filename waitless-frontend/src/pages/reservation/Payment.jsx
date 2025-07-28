import React from "react";
import "../../styles/reservation/Payment.css";

const Payment = () => {
  return (
    <div class="mobile-root">
      <header class="payment-header">
        <button class="payment-back-btn"></button>
        <img class="payment-logo" src="/img/waitless-logo.png" alt="Waitless Logo" />
      </header>

      <section class="payment-restaurant-info">
        <img
          src="/img/sample/restaurant1.png"
          alt="식당 이미지"
          class="payment-restaurant-image"
        />
        <div class="payment-restaurant-details">
          <div class="category">이탈리아 음식</div>
          <div class="name">마리스그릴</div>
          <div class="desc">망원동 시장 근처 맛있고 분위기 좋은 이탈..</div>
        </div>
      </section>

      <section class="payment-menu-section">
        <div class="section-title">메뉴 선택</div>
        <ul class="menu-list">
          <li>
            <span>새우바질크림파스타 x1</span>
            <span>12,900원</span>
          </li>
          <li>
            <span>베이컨오븐토마토리조또 x1</span>
            <span>11,900원</span>
          </li>
          <li>
            <span>마르게리따 피자 x1</span>
            <span>16,900원</span>
          </li>
          <li>
            <span>펩시 제로 x2</span>
            <span>4,000원</span>
          </li>
        </ul>
        <div class="total">
          합계 <strong>45,700원</strong>
        </div>
      </section>

      <section class="discount-section">
        <div class="section-title">할인 · 적립</div>
        <div class="point-box">
          <span>잔여 포인트</span>
          <span>1,100 P</span>
          <button class="apply-btn">적용</button>
        </div>
        <div class="coupon-box">
          <span>쿠폰</span>
          <select>
            <option>적용가능한 쿠폰 확인하기</option>
          </select>
        </div>
      </section>

      <footer class="footer">
        <div class="total-payment">
          총 결제 금액 <span>44,600원</span>
        </div>
        <button class="pay-btn">결제하기</button>
      </footer>
    </div>
  );
};

export default Payment;
