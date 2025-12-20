import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Bot from './components/Bot';

function AppContent() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <div className='flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--color-neon-blue)] selection:text-black'>
        <Navbar />
        <main className='flex-grow container mx-auto px-4 mt-20 md:mt-24 relative z-10'>
          <AppContent />
        </main>
        <Footer />
        <Bot />
      </div>
    </Router>
  );
}

export default App;
// This code sets up the main application structure with routing, navigation, footer, and a chatbot.
