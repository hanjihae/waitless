import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import BusinessSignUpPage from './pages/auth/BusinessSignUpPage';
import MyPage from './pages/mypage/MyPage';
import EditMyInfo from './pages/mypage/EditMyInfo';
import ReservationList from './pages/mypage/ReservationList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup-business" element={<BusinessSignUpPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit-myinfo" element={<EditMyInfo />} />
        <Route path="/mypage/reservation-list" element={<ReservationList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;