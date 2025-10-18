// src/components/Exacomm2015/Page.jsx
import React from "react";
import Banner2015 from "./Banner.jsx";
import { Container } from "react-bootstrap";

export default function Exacomm2015Page() {
  return (
    <>
      <Banner2015 />
      <section className="body">
        <Container>
          <h2>ExaComm 2015 Highlights</h2>
          <p>Include description, speakers, or gallery here.</p>
        </Container>
      </section>
    </>
  );
}
