import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import BusinessSignUp from './pages/auth/BusinessSignUp';
import MyPage from './pages/mypage/MyPage';
import EditMyInfo from './pages/mypage/EditMyInfo';
import ReservationList from './pages/mypage/ReservationList';
import ReservationDetails from './pages/mypage/ReservationDetails';
import WaitingList from './pages/mypage/WaitingList';
import FavoriteList from './pages/mypage/FavoriteList';
import MyReview from './pages/mypage/MyReview';
import Map from './pages/main/Map';
import Search from './pages/main/Search';
import Coupon from './pages/main/Coupon';
import RestaurantDetails from './pages/restaurant/RestaurantDetails';
import Review from './pages/restaurant/Review';
import Payment from './pages/reservation/Payment';
import Waiting from './pages/reservation/Waiting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-business" element={<BusinessSignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit-myinfo" element={<EditMyInfo />} />
        <Route path="/mypage/reservation-list" element={<ReservationList />} />
        <Route path="/mypage/reservation-details" element= {<ReservationDetails />} />
        <Route path="/mypage/waiting-list" element={<WaitingList />} />
        <Route path="/mypage/favorite-list" element= {<FavoriteList />} />
        <Route path="/mypage/review" element= {<MyReview />} />
        <Route path="/main/" element= {<Map />} />
        <Route path="/main/search" element= {<Search />} />
        <Route path="/main/coupon" element= {<Coupon />} />
        <Route path="/restaurant/" element={<RestaurantDetails />} />
        <Route path="/restaurant/review" element={<Review />} />
        <Route path="/reservation/payment" element={<Payment />} />
        <Route path="/reservation/waiting" element={<Waiting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;