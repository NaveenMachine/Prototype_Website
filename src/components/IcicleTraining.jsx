import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/About.css';
import data from '../assets/json/chunk-text.json';
import hari from '../assets/img/lab/Hari.png'
import scott from '../assets/img/lab/Shearer-Scott2.png'


const images = import.meta.glob('../assets/img/lab/*.{png,jpg,jpeg,svg,avif}', { eager: true });

const IcicleTraining = () => {
 

  return (
    <section className="about" id="about">
      <h2>Learn more about ICICLE materials</h2>
      <Row className="align-items-center">
        <Col xs={12} lg={12}>
            <a href='https://icicle-ai.github.io/training-catalog/' target="_blank"
        rel="noopener noreferrer">ICICLE Training Catalog</a>
        </Col>
      </Row>
    </section>
  );
};

export default IcicleTraining;
