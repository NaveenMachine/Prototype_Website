import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/About.css';

const About = () => {

  return (
    <section className="about" id="about">
      <h2>Harvest 2025</h2>
      <Row className="left-align">
        <Col xs={12} lg={12}>
            <p>The emergence of modern AI systems powered by high-performance computing (HPC) has revolutionized how we interact with technology, and their combined impact on various science domains like agriculture has yet to be fully explored. Over the past decades, computer scientists, computational scientists, agronomists, and researchers in agriculture have dedicated their efforts towards empowering farmers by ensuring the latest advances in technology are made available to them. However, given the breathtakingly rapid advances, the scientific community is still struggling to see how this can be achieved while benefitting end users. Further, democratizing all this knowledge in combination with AI and HPC presents its own challenges. This workshop aims to bring together researchers and software/hardware designers from academia, industry, and national laboratories who are involved in designing HPC-powered AI-enabled systems for agriculture, and how it can be leveraged to improve efficiency, accuracy, and accessibility for end-users.

The objectives of this workshop will be to share the experiences of the members of this community and to learn the opportunities and challenges in designing HPC-powered AI-enabled systems for agriculture. Through presentations and discussions, participants will gain a comprehensive understanding of the potential for HPC and AI to revolutionize the field of agriculture and the challenges that need to be overcome. The workshop will provide attendees with the opportunity to learn from experts in the field and explore how HPC and AI can be applied to their specific areas of interest within agriculture. The workshop is designed for researchers, practitioners, and developers who are interested in exploring the benefits HPC and AI can bring to agriculture.</p>
        </Col>
      </Row>
    </section>
  );
};

export default About;
