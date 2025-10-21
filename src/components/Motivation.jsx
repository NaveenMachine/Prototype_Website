import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/About.css';
import data from '../assets/json/chunk-text.json';

const images = import.meta.glob('../assets/img/lab/*.{png,jpg,jpeg,svg,avif}', { eager: true });

const Motivation = () => {

  return (
//     <section className="about" id="about">
//       <h2>Motivation, Impact, and Expected Outcomes</h2>
//       <Row className="left-align">
//         <Col xs={12} lg={12}>
//         <p>
// The rapid growth of computer vision (CV) and artificial intelligence (AI) is reshaping agriculture, offering new approaches to challenges in food security, climate resilience, and sustainability. Scaling these technologies requires bridging core CV research with domain-specific data infrastructures and practical user needs. Key applications include crop and soil monitoring, pest and disease detection, yield forecasting, and resource optimization. Yet, these tasks are hindered by heterogeneous field data, limited labeled datasets—especially in edge environments—and the demand for models that are both scalable and interpretable.
// </p>

// <p>
// Recognizing these challenges, we launched the HARVEST workshop series (<a href="https://icicle-ai.github.io/harvest/">the first hosted at 54th International Conference on Parallel Processing in San Diego, CA</a>, supported by the <a href="https://icicle.osu.edu/">NSF ICICLE AI Institute</a> led by the Ohio State University) to build community and cyberinfrastructure at the intersection of AI, HPC, and agriculture. The event showcased high-profile keynote speakers, and engaged around 30 participants from academia, national labs, and industry. Our agenda included technical talks, panels, and hands-on demonstrations. Through a partnership with <a href="https://aiinstitutes.org/">NSF AI Institutes Virtual Organization</a>, we were able to secure travel awards for 12 rising academic researchers, many of whom are now part of a growing expert network community of computer scientists and agricultural experts.
// </p>

// <p>
// Bringing this momentum to WACV, our HARVEST-Vision workshop directly aligns with the community’s focus on impactful real-world CV: agricultural cyberinfrastructure is an urgent, societally relevant application space for advances in robust perception, domain adaptation, scalable datasets, and explainable, deployable AI. By fostering interdisciplinary collaborations, catalyzing new datasets, benchmarks, and reproducible pipelines, and supporting diversity via travel awards, our workshop will expand WACV’s reach, accelerating knowledge transfer and enabling high-impact computer vision research for agriculture and beyond.
// </p>

//         </Col>
//       </Row>
//     </section>
<section id="about">
  <h2>About</h2>

  <ul>
    <li>By 2050, the global population is projected to reach <strong>9.8 billion</strong>, with accelerating climate extremes and a halving of arable land per capita (vs. 1985), making food security and sustainability urgent.</li>
    <li><strong>HARVEST-Vision</strong> addresses this need by democratizing digital agriculture and translating end-to-end AI pipelines from the <strong>NSF ICICLE AI Institute</strong> community into accessible tools for:
      <ul>
        <li>Small and large farms</li>
        <li>Agricultural research</li>
        <li>Staple and specialty crops</li>
        <li>Underrepresented communities</li>
      </ul>
    </li>
    <li>The workshop strengthens the agricultural workforce by training future engineers, computer scientists, and data scientists through:
      <ul>
        <li>Inclusive posters and demos</li>
        <li>Lightning talks</li>
        <li>ICICLE-backed travel awards for students and early-career researchers</li>
      </ul>
    </li>
    <li>Ethical safeguards include:
      <ul>
        <li>Privacy-preserving data governance</li>
        <li>Fairness across geographies and crop types</li>
        <li>Explainable decision support for safety-critical settings</li>
      </ul>
    </li>
    <li>Tangible outcomes:
      <ul>
        <li>Public reference pipelines</li>
        <li>Datasets and benchmarks for domain shift and rare events</li>
        <li>Deployment templates that reduce inputs, improve yields, and advance sustainable, equitable agriculture</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>The rapid growth of <strong>computer vision (CV)</strong> and <strong>artificial intelligence (AI)</strong> is transforming agriculture, tackling challenges in:
      <ul>
        <li>Food security</li>
        <li>Climate resilience</li>
        <li>Sustainability</li>
      </ul>
    </li>
    <li>Scaling these technologies requires bridging core CV research with domain-specific data infrastructures and real-world user needs.</li>
    <li>Key applications include:
      <ul>
        <li>Crop and soil monitoring</li>
        <li>Pest and disease detection</li>
        <li>Yield forecasting</li>
        <li>Resource optimization</li>
      </ul>
    </li>
    <li>Major challenges include heterogeneous field data, limited labeled datasets (especially on the edge), and the need for scalable, interpretable models.</li>
  </ul>

  <ul>
    <li>The <strong>HARVEST Workshop Series</strong> was launched to build community and cyberinfrastructure at the intersection of AI, HPC, and agriculture.</li>
    <li>The first workshop was hosted at the <strong>54th International Conference on Parallel Processing</strong> in San Diego, CA, supported by the NSF ICICLE AI Institute led by <strong>The Ohio State University</strong>.</li>
    <li>The event featured:
      <ul>
        <li>High-profile keynote speakers</li>
        <li>Technical talks, panels, and hands-on demonstrations</li>
        <li>~30 participants from academia, national labs, and industry</li>
      </ul>
    </li>
    <li>Through collaboration with the NSF AI Institutes Virtual Organization, travel awards were secured for 12 rising academic researchers — many now part of a growing expert network connecting computer scientists and agricultural specialists.</li>
  </ul>

  <ul>
    <li>Building on this momentum, the <strong>HARVEST-Vision Workshop at WACV</strong> aligns with the community’s focus on impactful real-world CV applications.</li>
    <li>Agricultural cyberinfrastructure offers a high-impact space for advances in:
      <ul>
        <li>Robust perception</li>
        <li>Domain adaptation</li>
        <li>Scalable datasets</li>
        <li>Explainable and deployable AI</li>
      </ul>
    </li>
    <li>By fostering interdisciplinary collaborations, creating new datasets and benchmarks, and supporting diversity through travel awards, the workshop expands WACV’s reach — accelerating knowledge transfer and enabling impactful CV research for agriculture and beyond.</li>
  </ul>
</section>

  );
};

export default Motivation;
