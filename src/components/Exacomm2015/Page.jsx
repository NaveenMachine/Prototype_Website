// src/components/Exacomm2015/Page.jsx
import React from "react";
import Banner from "./Banner.jsx";
import { Container } from "react-bootstrap";

export default function Exacomm2015Page() {
  return (
    <>
      <Banner />
      <section className="body">
        <Container>
          <h2>ExaComm 2015 Highlights</h2>
          <p>Include description, speakers, or gallery here.</p>
        </Container>
      </section>
    </>
  );
}
