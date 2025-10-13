import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/About.css';
import data from '../assets/json/chunk-text.json';
import resume from '../assets/resume.pdf';
import hari from '../assets/img/lab/Hari.png'
import scott from '../assets/img/lab/Shearer-Scott2.png'


const images = import.meta.glob('../assets/img/lab/*.{png,jpg,jpeg,svg,avif}', { eager: true });

const Organizers = () => {
  const about_text = data.about;
  const toRotate = Object.values(images).map(module => module.default);

  const [opacity, setOpacity] = useState(0);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [opacity, loopNum, isDeleting, delta]); // added missing dependencies

  const tick = () => {
    let newOpacity = isDeleting ? opacity - 0.1 : opacity + 0.1;
    newOpacity = Math.min(1, Math.max(0, newOpacity)); // clamp between 0 and 1

    if (!isDeleting && newOpacity >= 1) {
      setDelta(2000);
      setIsDeleting(true);
    } else if (isDeleting && newOpacity <= 0) {
      setIsDeleting(false);
      setLoopNum(prev => (prev + 1) % toRotate.length);
      setDelta(100);
    } else if (isDeleting) {
      setDelta(50);
    }

    setOpacity(newOpacity);
  };

  return (
    <section className="about" id="about">
      <h2>Brief Bios of Organizers</h2>
      <Row className="align-items-center">
        <Col xs={12} lg={6} className="img-col">
          <img
            className="abt-img"
            src={hari}
            alt="Hari"
          />
        </Col>
        <Col xs={12} lg={5}>
            <p>
            <strong>Hari Subramoni</strong>, The Ohio State Unveristy. <code>subramoni.1@osu.edu</code><br/> 
            <a href="https://cse.osu.edu/people/subramoni.1">https://cse.osu.edu/people/subramoni.1</a><br/>
            Hari Subramoni is an Assistant Professor in the Department of Computer Science and Engineering at OSU. His research interests include HPC,
            high-performance networks, distributed deep/machine learning, digital agriculture, conversational interfaces, and exascale computing. He also leads the digital agriculture thrust in the NSF-funded ICICLE AI institute. He has published over 170 papers in international journals and conferences related to these research areas.
            </p>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col xs={12} lg={6} className="img-col">
          <img
            className="abt-img"
            src={scott}
            alt="Scott"
          />
        </Col>
        <Col xs={12} lg={5}>
            <p>
            <strong>Scott Shearer</strong>, The Ohio State Unveristy. <code>shearer.95@osu.edu</code> <br/> 
            <a href="https://fabe.osu.edu/our-people/scott-shearer">https://fabe.osu.edu/our-people/scott-shearer</a><br/>
            Scott Shearer serves as Professor and Chair of Food, Agricultural and Biological Engineering at OSU. Prior to 2011 he was Chair of Biosystems and Agricultural Engineering at the University of Kentucky. His significant contributions include the development of methodologies and controls for metering and spatial applying crop production inputs (seed, fertilizer and pesticides); modeling of agricultural field machinery; autonomous multi-vehicle field production systems; strategies for deployment of UAS in agriculture; and analyses of production agriculture data sets.
            </p>
        </Col>
      </Row>
    </section>
  );
};

export default Organizers;
