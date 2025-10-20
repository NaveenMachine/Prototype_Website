// src/components/Exacomm2015/Page.jsx
import React from "react";
import Banner from "./Banner.jsx";
import { Container } from "react-bootstrap";
import About from "./About.jsx";
import Images from "./Images.jsx";
import Footer from "../Footer.jsx";
import KeynotesDay1 from "./KeynotesDay1.jsx";
import KeynotesDay2 from "./KeynotesDay2.jsx";

export default function Harvest2025Page() {
  return (
    <>
      <Banner />
      <section className="body">
        <Container>
          <About/>
          <KeynotesDay1/>
          <KeynotesDay2/>
          <Images/>
        </Container>
      </section>
      <Footer/>
    </>
  );
}
