import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Exacomm2015Page from './components/Exacomm2015/Page.jsx';
import Exacomm2016Page from './components/Exacomm2016/Page.jsx';



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
          <Route
            path="/call-for-papers"
            element={
              <section className="body">
                <Container>
                  <About />
                </Container>
              </section>
            }
          />

          {/* 🖼️ Call for Posters */}
          <Route
            path="/call-for-posters"
            element={
              <section className="body">
                <Container>
                  <About />
                </Container>
              </section>
            }
          />

          {/* 📚 Past Events main page */}
          <Route
            path="/past-events"
            element={
              <section className="body">
                <Container>
                  <Journal />
                </Container>
              </section>
            }
          />

          {/* 📅 Dynamic Past Event pages (2024, 2023, etc.) */}
          {/* Year-specific ExaComm pages */}
          <Route path="/past-events/2015" element={<Exacomm2015Page />} />
          <Route path="/past-events/2016" element={<Exacomm2016Page />} />

          {/* 🔁 Redirect all unknown paths to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
