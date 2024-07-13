import {HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation';
import Register from './pages/register/register';
import Login from './pages/login/login';
import ForgotPassword from './pages/forgot_password/forgot_password';
import OtpPage from './pages/otp/otp_page';
import ChangePassword from './pages/change_password/change_password';
import HomePage from './pages/home_page/home_page';
import Guidance from './pages/guidance_page/guidance';
import ViewProfessionals from './pages/professional_pages/view_professionals_page/view_professionals';
import DoctorProfile from './pages/professional_pages/doctor_profile/doctor_profile';
import ScrollToTop from './ScrollToTop/scroll_top';
import ShoeMakerProfile from './pages/professional_pages/shoe_maker_profile/shoe_maker_profile';
import UserProfile from './pages/user/user_profile/user_profile';
import TimeSlot from './pages/professional_pages/doctor_profile/time_slots/time_slots';
import Appointment from './pages/professional_pages/doctor_profile/appointment_page/appointment';
import ShoemakerRequest from './pages/professional_pages/shoe_maker_profile/make_request/make_request';
import ViewRequest from './pages/professional_pages/shoe_maker_profile/view_quotation/view_quotation';
import Accessories from './pages/accessories/accessories';
import SingleAccessorie from './pages/accessories/view_single_accessorie';
import UserNotifications from './pages/user/user_notifications/notifications';
import AboutUs from './pages/about_us/about';
import Services from './pages/services_page/services_page';
import ChatPage from './pages/chat_page/chat_page';
import ChatUser from './pages/professional_pages/chatUI/chat_page';
import ChatShoemaker from './pages/professional_pages/shoe_maker_profile/make_request/chatUI/chat_page';

function App() {
  return (
    <HashRouter>
    <ScrollToTop />
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/enter-otp" element={<OtpPage />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/professionals" element={<ViewProfessionals />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
          <Route path="/shoemaker-profile" element={<ShoeMakerProfile />} /> 
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/doctor-time-slots" element={<TimeSlot />} />
          <Route path="/doctor-appointments" element={<Appointment />} /> 
          <Route path="/shoemaker-request" element={<ShoemakerRequest />} />
          <Route path="/viewshoemaker-request" element={<ViewRequest />} /> 
          <Route path="/accessories" element={<Accessories />} />        
          <Route path="/shoe-accessories" element={<SingleAccessorie />} /> 
          <Route path="/user-notifications" element={<UserNotifications />} /> 
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/chat-user" element={<ChatUser />} /> 
          <Route path="/shoemaker-request/chat" element={<ChatShoemaker />} /> 
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
