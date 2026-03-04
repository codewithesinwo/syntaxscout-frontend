import React, { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import ProtectedRoute from "./components/ProtectedRoute";
import Hero from './components/Hero'
import Courses from './components/Courses'
import ResetPassword from './pages/ResetPassword'
import PageNotFound from './pages/PageNotFound'
import LearnBanner from './components/LearnBanner'
import WhyLearn from './components/WhyLearn'
import Stats from './components/Stats'
import ContactForm from './pages/ContactForm'
import LifetimeAccess from './pages/LifetimeAccess'
import Path from './pages/Path'
import WebLayout from './components/WebLayout'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import MembersDashboardLayout from './components/MembersDashboardLayout'
import Members from "./pages/Members";
import ProfileSettings from "./pages/ProfileSettings";
import MembershipSubcrib from "./pages/MembershipSubcrib";
import PurchaseHistory from './pages/PurchaseHistory'
import CardAdding from './pages/CardAdding';
import Address from './pages/Address';
import AdminDashboardLayout from "./components/AdminDashboardLayout";
import AdminDashboard from "./components/AdminDashboard";
import AdminCourseCatalog from "./pages/AdminCourseCatalog";
import UsersManagement from "./pages/UsersManagement";
import Analytics from "./pages/Analytics";
import Transactions from "./pages/Transactions";
import SupportTikkets from "./pages/SupportTickets";
import AdminSettings from "./pages/AdminSettings";
import MyCourses from "./pages/MyCourses";
import Mentorship from './pages/Mentorship';
import SkillMastery from './pages/SkillMastery';
import StudyGroup from './pages/StudyGroup';
import Certificates from './pages/Certificates';
import TeamManagement from './pages/TeamManagement';


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
      {/* --- PUBLIC ROUTES --- */}
      <Route path="/" element={<WebLayout />}>
        <Route index element={
          <>
            <Hero />
            <LearnBanner />
            <WhyLearn />
            <Stats />
          </>
        } />
        <Route path="lifetime-access" element={<LifetimeAccess />} />
        <Route path="leaning-paths" element={<Path />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="courses" element={<Courses />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      {/* --- MEMBER ROUTES (Requires 'user' or 'admin') --- */}
      <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
        <Route path="/members" element={<MembersDashboardLayout />}>
          <Route index element={<Members />} />
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="membership-subscriptions" element={<MembershipSubcrib />} />
          <Route path="purchases" element={<PurchaseHistory />} />
          <Route path="credit-card" element={<CardAdding />} />
          <Route path="address" element={<Address />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="mentorship" element={<Mentorship />} />
          <Route path='skills' element={<SkillMastery/>} />
          <Route path='study-group' element={<StudyGroup/>} />
        </Route>
      </Route>

      {/* --- ADMIN ROUTES (Requires 'admin') --- */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UsersManagement />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="support" element={<SupportTikkets />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="courses" element={<AdminCourseCatalog />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="teams" element={<TeamManagement />} />
        </Route>
      </Route>

      {/* --- AUTH & 404 --- */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </ThemeProvider>
);
}