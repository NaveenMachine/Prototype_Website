import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // ✅ added Navigate
import NavBar from './components/NavBar.jsx';
import Banner from './components/Banner.jsx';
import About from './components/About.jsx';
import { Container } from 'react-bootstrap';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Motivation from './components/Motivation.jsx';
import Organizers from './components/Organizers.jsx';
import Committee from './components/Committee.jsx';
import SocialImpact from './components/SocialImpact.jsx';
import Speakers from './components/Speakers.jsx';
import Attendees from './components/Attendees.jsx';
import Journal from './components/Journal.jsx';

function App() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Call for Papers', path: '/call-for-papers' },
    { label: 'Call for Posters', path: '/call-for-posters' },
    { label: 'Past Events', path: '/past-events' },
  ];

  return (
    <Router>
      <div className="App">
        <NavBar links={links} />

        <Routes>
          {/* 🏠 Home Page */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <section className="body">
                  <Container className="box">
                    <About />
                    <Organizers />
                    <Committee />
                    <Experience />
                    <SocialImpact />
                  </Container>
                </section>
                <Contact />
                <Footer />
              </>
            }
          />

          {/* 📄 Call for Papers */}
          <Route path="/call-for-papers" element={<Projects />} />

          {/* 🖼️ Call for Posters */}
          <Route path="/call-for-posters" element={<Speakers />} />

          {/* 📚 Past Events */}
          <Route path="/past-events" element={<Journal />} />

          {/* 🔁 Redirect all unknown paths to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
