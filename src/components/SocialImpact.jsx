import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/About.css';
import data from '../assets/json/chunk-text.json';

const images = import.meta.glob('../assets/img/lab/*.{png,jpg,jpeg,svg,avif}', { eager: true });

const SocialImpact = () => {
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
      <h2>Social Impact of the Workshop</h2>
      <Row className="align-items-center">
        <Col xs={12} lg={12}>
            <p>
                By 2050, a projected 9.8B people, accelerating climate extremes, and a halving of arable land per capita (vs. 1985) make food security and sustainability urgent, demanding wide gains in crop management efficiency. 
                <strong>HARVEST-Vision</strong> directly addresses this need by democratizing digital agriculture by translating end-to-end pipelines built by the 
                <a href="https://icicle.osu.edu/" target="_blank" rel="noopener noreferrer">NSF ICICLE AI Institute</a> 
                community (edge-to-HPC data movement, semi-supervised labeling, scalable training, in-field inference) into accessible AI tools for big and small farms, agricultural research needs, staple and specialty crops, and underrepresented communities. 
                The workshop will strengthen the agricultural workforce by training the next generation of engineers, computer scientists, and data scientists through inclusive posters/demos, lightning talks, and ICICLE-backed travel awards prioritizing students and early-career researchers, and establish ethical peer-reviewed safeguards such as privacy-preserving data governance policies, fairness across geographies and crop types, and explainable decision support to provide solutions that are trustworthy in safety and livelihood-critical settings. 
                Tangible outcomes include public reference pipelines, datasets/benchmarks for domain shift and rare events, and deployment templates that measurably reduce inputs, improve yields, and advance sustainable, equitable agriculture.
            </p>


        </Col>
      </Row>
    </section>
  );
};

export default SocialImpact;
