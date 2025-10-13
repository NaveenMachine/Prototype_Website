import React from 'react';
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
  const links = ['Home', 'Committee', 'Program', 'Past Events']; // You can modify this as needed

  return (
    <div className="App">
      <NavBar links={links} />
      
      {/* Offset content to avoid being hidden under the fixed AppBar */}
      {/* <div style={{ paddingTop: '80px' }}> */}
      <div>
        <Banner />
        <section className="body">
          <Container className="box">
            <About />
            <Motivation />
            <Organizers />
            <Committee />
            <Experience />
            <Speakers />
            <Attendees />
            <Journal />
            <SocialImpact />
          </Container>
        </section>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
