import React from 'react'
import './Menu.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import $ from 'jquery'
function Menu() {
    const OtherHome = () => {
        $('#home').css({ "background-color": "rgba(255,255,255,0.2)" })
        $('#about').css("background-color", "transparent")
        $('#typography').css("background-color", "transparent")
        $('#contact-us').css("background-color", "transparent")
    }
    const OtherAbout = () => {
        $('#about').css({ "background-color": "rgba(255,255,255,0.2)" })
        $('#home').css("background-color", "transparent")
        $('#typography').css("background-color", "transparent")
        $('#contact-us').css("background-color", "transparent")
    }
    const OtherTypography = () => {
        $('#typography').css({ "background-color": "rgba(255,255,255,0.2)" })
        $('#home').css("background-color", "transparent")
        $('#about').css("background-color", "transparent")
        $('#contact-us').css("background-color", "transparent")
    }
    const OtherContactUs = () => {
        $('#contact-us').css({ "background-color": "rgba(255,255,255,0.2)" })
        $('#home').css("background-color", "transparent")
        $('#about').css("background-color", "transparent")
        $('#typography').css("background-color", "transparent")
    }
    return (
        <section className='list-menu d-lg-inline-block d-none w-100'>
            <Container>
                <Row>
                    <Col lg={8} className='d-flex justify-content-start align-items-center'>
                        <ul className='p-0'>
                            <li className='active px-4 py-3' id='home' onClick={OtherHome}>
                                <Link to='/' className='text-capitalize'>home</Link>
                            </li>
                            <li className='px-4 py-3' id='about' onClick={OtherAbout}>
                                <Link to='/About' className='text-capitalize'>about</Link>
                            </li>
                            <li className='px-4 py-3' id='typography' onClick={OtherTypography}>
                                <Link to='/Typography' className='text-capitalize' >typography</Link>
                            </li>
                            <li className='px-4 py-3' id='contact-us' onClick={OtherContactUs}>
                                <Link to='/ContactUs' className='text-capitalize' >contact us</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4} className='d-flex justify-content-end align-items-center'>
                        <i className="fa-brands fa-facebook-f mx-2"></i>
                        <i className="fa-brands fa-twitter mx-2"></i>
                        <i className="fa-brands fa-google-plus-g mx-2"></i>
                        <i className="fa-brands fa-instagram ms-2"></i>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Menu