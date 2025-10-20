// src/components/Exacomm2015/Page.jsx
import React from "react";
import Banner from "./Banner.jsx";
import { Container } from "react-bootstrap";
import About from "./About.jsx";
import Keynotes from "./Keynotes.jsx";
import Projects from "./Projects.jsx";
import Footer from "../Footer.jsx";

export default function Exacomm2020Page() {
  return (
    <>
      <Banner />
      <section className="body">
        <Container>
          <About/>
          <p><b>Due to the Covid-19 pandemic, ExaComm 2020 was canceled.</b></p>
        </Container>
      </section>
      <Footer/>
    </>
  );
}
