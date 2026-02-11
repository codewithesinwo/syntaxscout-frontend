import React, { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
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
import Forum from "./pages/Forum";
import ProfileSettings from "./pages/ProfileSettings";
import MembershipSubcrib from "./pages/MembershipSubcrib";
import PurchaseHistory from './pages/PurchaseHistory'
import CardAdding from './pages/CardAdding';
import Address from './pages/Address';


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
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path='/forum' element={<Forum />} />
        </Route>

          <Route path="/members" element={<MembersDashboardLayout />}>
          <Route index element={<Members />} />
          <Route path='profile' element={<ProfileSettings />} />
          <Route path='membership-subscriptions' element={<MembershipSubcrib />} />
          <Route path='purchases' element={<PurchaseHistory />} />
          <Route path='credit-card' element={<CardAdding />} />
          <Route path='address' element={<Address />} />
        </Route>

          <Route path="/*" element={<PageNotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}
