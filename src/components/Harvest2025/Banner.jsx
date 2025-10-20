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
            <h1>
                            {`First International Workshop on Applications of HPC and AI in Agriculture`}
                        </h1>
                        <h2>Workshop Date: September 9-10, 2025</h2>
                        <h2>Location: The Catamaran Resort Hotel, San Diego, CA</h2>
                        <p>In Cooperation with <a href='https://icpp2025.sdsc.edu/'>The 54th International Conference on Parallel Processing (ICPP), 2025</a></p>
            </Container>
        </section>
    )
} 

export default Banner
