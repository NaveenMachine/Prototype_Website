import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../assets/css/CallForPosters.css';
import '../assets/css/App.css'
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
    <section className="call-for-posters" id="about">
    <h2></h2>
      <Container >

      <h2>Call for Papers</h2>
      <h3>ICICLE Harvest Workshop 2026</h3>
      {/* <Row className="left-align">
        <Col xs={12} lg={12}>
          <p>{about_text}</p>
        </Col>
      </Row> */}
      <Row className="section-box">
        <Col xs={12} lg={12}>
          <h3>Important Dates</h3>
          <ul>
            <li><b>Workshop Date:</b> To be decided</li>
            <li><b>Paper Submission Deadline: </b>December 07 2025 11:59PM UTC-0</li>
            <li><b>Camera-ready deadline (Hard Deadline):</b>  January 9th, 2026 11:59 PM PST</li>
          </ul>
          <b>Kindly note that if you miss the January 9th deadline, your work will not appear in the official proceedings. This is a hard deadline</b>
        </Col>
      </Row>
      <Row className="section-box">
      <Col xs={12} lg={12}>
          <h3>Topics</h3>
          HARVEST 2026 welcomes original submissions in a range of areas, including but not limited to:
          <ul>
            <li>Domain adaptation and generalization for agricultural vision tasks (across geographies, crops, seasons, and sensing modalities)</li>
            <li>Vision-language alignment, multimodal and low-resource learning for agricultural datasets</li>
            <li>Experiences in collecting and curating data large scale data for agriculture.</li>
            <li>Explainable and interpretable AI for field robotics and decision support in agriculture</li>
            <li>Spatiotemporal analytics and edge/in-situ deployment for precision agriculture</li>
            <li>Novel dataset creation, benchmarking, and evaluation methodologies in real-world or remote sensing agricultural settings</li>
            <li> Robust perception and prediction methods for quality control, phenotyping, livestock, or resource management</li>
          </ul>
          Papers should present original research and should provide sufficient background material to make them accessible to the broader community.
        </Col>
      </Row>
      <Row className="section-box">
        <Col xs={12} lg={12}>
          <h3>Submission Information</h3>
          We accept full-length papers (5-8 pages, WACV template, intended for publication in WACV’s workshop proceedings). Accepted contributions will be presented as orals or posters. All submissions should use the
official WACV template and be submitted via the OpenReview link on the workshop website. Submissions will be
peer-reviewed by our program committee for technical quality and relevance.
        </Col>
      </Row>
      <Row className="section-box">
      <h3>Proceedings Information</h3>
        <Col xs={12} lg={12} className='column-item'>
          The workshop proceedings will be published through IEEE and included in the IEEE Xplore digital library.
        </Col>
        <Col xs={12} lg={12} className='column-item'>
        Each research paper will be taken through a comprehensive peer review process by an internationally recognized group of experts in the field. Papers will be evaluated along the metrics of a) Quality of Presentation; b) Novelty / Originality; c) Relation to State of the Art; d) Technical Strength; e) Significance of Work; f) Relevance to Workshop; and g) Availability and quality of the "Artifact Description Appendix". Every effort will be made to ensure that each paper receives multiple reviews.
        </Col>
        <Col xs={12} lg={12} className='column-item'>
        At least one of the authors of each accepted paper must register as a participant of the workshop and present the paper at the workshop, in order to have the paper published in the proceedings.
        </Col>
        <Col xs={12} lg={12} className='column-item'>
        Please contact the Program Chairs for any questions/clarifications.
        </Col>
      </Row>
      <Row className="section-box">
        <Col xs={12} lg={12}>
          <h3>Workshop Registration</h3>
          We do not have a separate workshop registration. Please register for the workshops on the main conference registration page.
        </Col>
      </Row>
      <Row className="section-box">
        <Col xs={12} lg={12}>
          <h3>Organizing Committee</h3>
          <ul>
            <li><a href='https://cse.osu.edu/people/subramoni.1' target="_blank" rel="noopener noreferrer">Hari Subramoni</a>, The Ohio State University</li>
            <li><a href='https://fabe.osu.edu/our-people/scott-shearer' target="_blank" rel="noopener noreferrer">Scott Shearer</a>, The Ohio State University</li>
          </ul>
        </Col>
      </Row>
      <Row className="section-box">
        <Col xs={12} lg={12}>
          <h3>Technical Program Committee</h3>
          More details will be available soon.
        </Col>
      </Row>


      {/* <Row className='about-section text-center'>

        <Col size={12} className="px-1">
                               
            <button
              onClick={() => window.open("https://www.computer.org/csdl/proceedings/1000040", "_blank")}
>
              <span>Submit</span>
            </button>

        </Col>
      </Row> */}

      </Container>
    </section>
    </>
  );
};

export default CallForPapers;
