import React, { useState, useEffect } from 'react'
import data from '../assets/json/chunk-text.json'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/lab/stock_image.png'
import '../assets/css/Banner.css'

const Banner = () => {
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12} className="column">
                        <h1>
                            {`HARVEST 2026`}
                        </h1>
                        <h2>
                            {`HARVEST-Vision: Second International Workshop on Applications of CV and HPC in Agriculture`}
                        </h2>
                        <h3>March 6th, 2026 | The Catamaran Resort Hotel, San Diego, CA</h3>
                        <p>In Cooperation with  <a href="https://icpp2025.sdsc.edu/home" target="_blank">The 54th International Conference on Parallel Processing (ICPP), 2025</a></p>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
