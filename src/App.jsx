import React, { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/Dashboard'
import DashboardSetting from './pages/DashboardSetting'
import WebLayout from './components/WebLayout'
import DashboardLayout from './components/DashboardLayout'
import LearnBanner from './components/LearnBanner'
import WhyLearn from './components/WhyLearn'
import Stats from './components/Stats'
import ContactForm from './pages/ContactForm'
import LifetimeAccess from './pages/LifetimeAccess'
import Path from './pages/Path'
import DashboardGrade from './pages/DashboardGrade'
import DashboardAssignment from './pages/DashboardAssignment'
import DashboardMessage from './pages/DashboardMessage'
import Payment from './pages/Payment'
import AdminDashboard from "./pages/AdminDashboard";
import CourseDetail from './pages/CourseDetail'
import AdminLogin from './pages/AdminLogin'


export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      if (location.pathname !== "/") {
        navigate(`/${location.hash}`);
        return;
      }

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location, navigate]);


  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<WebLayout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <LearnBanner />
                <WhyLearn />
                <Stats />
              </>
            }
          />

          <Route path="/lifetime-access" element={<LifetimeAccess />} />
          <Route path="/leaning-paths" element={<Path />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/payment" element={<Payment />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="course" element={<CourseDetail />} />
          <Route path="settings" element={<DashboardSetting />} />
          <Route path="grades" element={<DashboardGrade />} />
          <Route path="assignments" element={<DashboardAssignment />} />
          <Route path="messages" element={<DashboardMessage />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
