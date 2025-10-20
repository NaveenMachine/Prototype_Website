import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../assets/css/About.css';
import data from '../assets/json/chunk-text.json';
const images = import.meta.glob('../assets/img/lab/*.{png,jpg,jpeg,svg,avif}', { eager: true });

const CallForPapers = () => {
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
    <>
    <section className="banner" id="about">
      <h2>Tentative Call for Papers</h2>
      <Row className="left-align">
        <Col xs={12} lg={12}>
          <p>{about_text}</p>
        </Col>
      </Row>
      <Row className='about-section text-center'>

        <Col size={12} className="px-1">
                               
            <button
              onClick={() => window.open("https://www.computer.org/csdl/proceedings/1000040", "_blank")}
>
              <span>Submit</span>
            </button>

        </Col>
    </Row>

    </section>
    </>
  );
};

export default CallForPapers;
