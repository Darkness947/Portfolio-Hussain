import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Bot from './components/Bot';

function App() {
  return (
    <>
    <Router>
      <div className='d-flex flex-column min-vh-100 bg-dark text-white'>
      <Navbar />
      <div className='container flex-grow-1 mt-4'>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
      </div>
      <Footer />
      <Bot />
      </div>
    </Router>

    </>
    
  );
}

export default App;
// This code sets up the main application structure with routing, navigation, footer, and a chatbot.
