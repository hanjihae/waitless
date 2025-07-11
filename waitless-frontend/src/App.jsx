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
import Search from './pages/main/Search';

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
        <Route path="/main/search" element= {<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;