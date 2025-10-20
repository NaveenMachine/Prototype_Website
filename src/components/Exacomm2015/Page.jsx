// src/components/Exacomm2015/Page.jsx
import React from "react";
import Banner from "./Banner.jsx";
import { Container } from "react-bootstrap";
import About from "./About.jsx";
import Keynotes from "./Keynotes.jsx";
import Projects from "./Projects.jsx";
import Footer from "../Footer.jsx";

export default function Exacomm2015Page() {
  return (
    <>
      <Banner />
      <section className="body">
        <Container>
          <About/>
          <Keynotes/>
          <Projects/>
        </Container>
      </section>
      <Footer/>
    </>
  );
}
