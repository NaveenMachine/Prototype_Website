import React, { useState, useEffect } from 'react'
import data from '../assets/json/chunk-text.json'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/lab/stock_image.png'
import '../assets/css/MiniBanner.css'

const MiniBanner = () => {
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12} className="column">
                        <h2>
                            {`HARVEST 2026`}
                        </h2>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MiniBanner
