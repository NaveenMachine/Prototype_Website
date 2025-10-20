import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/About.css';

const About = () => {

  return (
    <section className="about" id="about">
      <h2>ExaComm 2017</h2>
      <Row className="left-align">
        <Col xs={12} lg={12}>
            <p>Extreme Scale computing in HPC, Big Data, Deep Learning and Clouds are marked by multiple-levels of hierarchy and heterogeneity ranging from the compute units (many-core CPUs, GPUs, APUs etc) to storage devices (NVMe, NVMe over Fabrics etc) to the network interconnects (InfiniBand, High-Speed Ethernet, Omni-Path etc). Owing to the plethora of heterogeneous communication paths with different cost models expected to be present in extreme scale systems, data movement is seen as the soul of different challenges for exascale computing. On the other hand, advances in networking technologies such as NoCs (like NVLink), RDMA enabled networks and the likes are constantly pushing the envelope of research in the field of novel communication and computing architectures for extreme scale computing. The goal of this workshop is to bring together researchers and software/hardware designers from academia, industry and national laboratories who are involved in creating network-based computing solutions for extreme scale architectures. The objectives of this workshop will be to share the experiences of the members of this community and to learn the opportunities and challenges in the design trends for exascale communication architectures.</p>
        </Col>
      </Row>
    </section>
  );
};

export default About;
