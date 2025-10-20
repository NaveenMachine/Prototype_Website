import React from 'react'
import { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from "../assets/img/lab/stock_image.png"
import emailjs from '@emailjs/browser'

import '../assets/css/About.css'

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (key, value) => {
        setFormDetails({
            ...formDetails,
            [key]: value
        })
    }

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        setButtonText('Sending...')

        // Basic validation before sending
        if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.message) {
            setStatus({ success: false, message: 'Please fill in all fields.' });
            setButtonText('Send');
            console.error('Validation Error: Please fill in all fields.');
            return;
        }

        // --- THE FIX IS HERE ---
        // Change import.meta.env.REACT_APP_... to import.meta.env.VITE_...
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;    // <--- Changed to VITE_
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;  // <--- Changed to VITE_
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;    // <--- Changed to VITE_

        // Add a check to ensure they are loaded (good practice)
        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS environment variables are not loaded! Check .env file and VITE_ prefix.");
            setStatus({ success: false, message: 'Configuration error: Email service not set up.' });
            setButtonText('Send');
            return;
        }
        // --- END OF FIX ---


        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log("EmailJS Result:", result.text)
                setStatus({
                    success: true,
                    message: 'Message sent successfully!'
                })
                setButtonText('Send')
                setFormDetails(formInitialDetails)
            }).catch((error => {
                console.error("EmailJS Error:", error.text || error)
                setStatus({
                    success: false,
                    message: 'Something went wrong, please try again!'
                })
                setButtonText('Send')
            }))
    }

    return (
        <section className="about" id="contact">
            <Container>

            <h2>Important Dates</h2>
                <Row className="left-align">
                   
                    <Col size={12} md={12}>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col size={12} sm={12} className="column">
                                    <b>Workshop Date:</b> 6 March 2026
                                </Col> 
                            </Row>
                            <Row>
                                <Col size={12} sm={12} className="column">
                                    <b>General Application Deadline: </b>Dec 07 2025 11:59PM UTC-0
                                </Col> 
                            </Row>
                            <Row>
                                <Col size={12} sm={12} className="column">
                                    <b>Camera-ready deadline:</b>  Jan 09, 2026 11:59 PM PST 
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col size={12} className="px-1">
                                   
                                <button
                                    onClick={() => window.open("https://www.computer.org/csdl/proceedings/1000040", "_blank")}
                                    >
                                    <span>Submit</span>
                                </button>

                                </Col>
                            </Row> */}
                            
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact