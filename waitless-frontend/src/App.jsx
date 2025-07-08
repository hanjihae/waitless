import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import BusinessSignUpPage from './pages/BusinessSignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup-business" element={<BusinessSignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;