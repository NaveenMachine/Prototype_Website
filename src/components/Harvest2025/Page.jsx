// src/components/Exacomm2015/Page.jsx
import React from "react";
import Banner from "./Banner.jsx";
import { Container } from "react-bootstrap";
import About from "./About.jsx";
import Keynotes from "./Keynotes.jsx";
import Images from "./Images.jsx";
import Footer from "../Footer.jsx";

export default function Harvest2025Page() {
  return (
    <>
      <Banner />
      <section className="body">
        <Container>
          <About/>
          <Keynotes/>
          <Images/>
        </Container>
      </section>
      <Footer/>
    </>
  );
}
