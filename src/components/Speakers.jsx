import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/Speakers.css';
import data from '../assets/json/chunk-text.json';

const images = import.meta.glob('../assets/img/lab/*.{png,jpg,jpeg,svg,avif}', { eager: true });

const Speakers = () => {
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
    <section id="invited-speakers" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Tentative Invited Speakers</h2>
      <ul className="list-none space-y-4">
        <li>
          <a
            href="https://ece.illinois.edu/about/directory/faculty/girishc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "var(--code-color, #ff79c6)" }}
          >
            Dr. Girish Chowdhary
          </a>
          , Associate Professor at UIUC. Expert in adaptive autonomy, field robotics, and UAS for agriculture.{" "}
          <em>Topic: Adaptive Autonomy in Unmanned Aerial Systems</em>
        </li>

        <li>
          <a
            href="https://infosci.arizona.edu/person/barney-maccabe"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "var(--code-color, #ff79c6)" }}
          >
            Dr. Arthur "Barney" Maccabe
          </a>
          , Director of the Institute for the Future of Data and Computing, UArizona. Former Division Director at Oak Ridge National Lab.{" "}
          <em>Topic: Large-scale Data Infrastructure for Agriculture</em>
        </li>

        <li>
          <a
            href="https://cahsi.utep.edu/expert/remi-megret/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "var(--code-color, #ff79c6)" }}
          >
            Dr. Rémi Mégret
          </a>
          , Associate Professor at UPR, Río Piedras. Works on computer vision and deep learning for large-scale pollinator monitoring (USDA DeepPollinator PI).{" "}
          <em>Topic: Pipelines for Large-scale Video Monitoring of Pollinators</em>
        </li>

        <li>
          <a
            href="https://eecs.wsu.edu/~ananth/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "var(--code-color, #ff79c6)" }}
          >
            Dr. Ananth Kalyanaraman
          </a>
          , Professor and Boeing Centennial Chair, WSU. Director of NSF-USDA NIFA AgAID AI Institute.{" "}
          <em>Topic: Human-AI Workflows for Precision Agriculture</em>
        </li>
      </ul>
    </section>
  );
};

export default Speakers;
