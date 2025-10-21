import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/CallForPosters.css';
import data from '../assets/json/chunk-text.json';
import hari from '../assets/img/lab/Hari.png'
import scott from '../assets/img/lab/Shearer-Scott2.png'


const images = import.meta.glob('../assets/img/lab/*.{png,jpg,jpeg,svg,avif}', { eager: true });

const OrganizersTab = () => {
 

  return (
    <section className="call-for-posters" id="about">
      
      <Row className="section-box">
        <h3>Organizing Committee</h3>
        <Col xs={12} lg={6}>
            <p>
            <a href="https://cse.osu.edu/people/subramoni.1"><strong>Hari Subramoni</strong></a>
            , The Ohio State Unveristy. <code>subramoni.1@osu.edu</code>
            </p>
        </Col>
        <Col xs={12} lg={6}>
            <p><a href="https://fabe.osu.edu/our-people/scott-shearer"><strong>Scott Shearer</strong></a>
            , The Ohio State Unveristy. <code>shearer.95@osu.edu</code> 
            
            </p>
        </Col>
      </Row>
    </section>
  );
};

export default OrganizersTab;
