// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles'; // Ensure GlobalStyle is imported
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import ContactUs from './pages/ContactUs';
import JoinUs from './pages/JoinUs';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
