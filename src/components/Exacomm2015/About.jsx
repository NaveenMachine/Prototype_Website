import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/About.css';

const About = () => {

  return (
    <section className="about" id="about">
      <h2>ExaComm 2015</h2>
      <Row className="left-align">
        <Col xs={12} lg={12}>
            <p>Extreme Scale computing is marked by multiple-levels of hierarchy and heterogeneity ranging from the compute units to storage devices to the network interconnects. Owing to the plethora of heterogeneous communication paths with different cost models expected to be present in extreme scale systems, data movement is seen as the soul of different challenges for exascale computing. On the other hand, advances in networking technologies such as NoCs (like NVLink), RDMA enabled networks and the like are constantly pushing the envelope of research in the field of novel communication and computing architectures for extreme scale computing. The goal of this workshop is to bring together researchers and software/hardware designers from both academy and industry who are involved in creating network-based computing solutions for extreme scale architectures, to share their experiences and to learn the opportunities and challenges in designing next-generation HPC systems and applications.</p>
        </Col>
      </Row>
    </section>
  );
};

export default About;
