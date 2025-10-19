import React, { useState, useEffect } from 'react'
import data from '../../assets/json/chunk-text.json'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../../assets/img/lab/isc-logo.png'
import '../../assets/css/Banner.css'

const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="column">
                        <h1>
                            {`Seventh International Workshop on Communication Architectures for
HPC, Big Data, Deep Learning and Clouds at Extreme Scale`}
                        </h1>
                        <p>Workshop Date: Thursday, June 2nd, 2022</p>
                        
                        
                    </Col>
                    <Col xs={12} md={6} xl={5} className="img-col">
                        <img src={headerImg} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
