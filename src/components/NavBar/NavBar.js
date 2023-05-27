import React, { useState } from 'react'
import './NavBar.scss'
import Scale3d from '../Buttons/Scale3d'
import { Offcanvas } from 'react-bootstrap'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import $ from 'jquery'

const NavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const OtherHomeMob = () => {
        $("#link-home-mob").css("color", 'white')
        $("#link-about-mob").css("color", 'black')
        $("#link-typography-mob").css("color", 'black')
        $("#link-contactus-mob").css("color", 'black')
        $('#home-mob').css({ "background-color": "#01b3a7" })
        $('#about-mob').css("background-color", "transparent")
        $('#typography-mob').css("background-color", "transparent")
        $('#contactus-mob').css("background-color", "transparent")
    }
    const OtherAboutMob = () => {
        $("#link-home-mob").css("color", 'black')
        $("#link-about-mob").css("color", 'white')
        $("#link-typography-mob").css("color", 'black')
        $("#link-contactus-mob").css("color", 'black')
        $('#home-mob').css("background-color", "transparent")
        $('#about-mob').css({ "background-color": "#01b3a7" })
        $('#typography-mob').css("background-color", "transparent")
        $('#contactus-mob').css("background-color", "transparent")
    }
    const OtherTypographyMob = () => {
        $("#link-home-mob").css("color", 'black')
        $("#link-about-mob").css("color", 'black')
        $("#link-typography-mob").css("color", 'white')
        $("#link-contactus-mob").css("color", 'black')
        $('#home-mob').css("background-color", "transparent")
        $('#about-mob').css({ "background-color": "transparent" })
        $('#typography-mob').css("background-color", "#01b3a7")
        $('#contactus-mob').css("background-color", "transparent")
    }
    const OtherContactUsMob = () => {
        $("#link-home-mob").css("color", 'black')
        $("#link-about-mob").css("color", 'black')
        $("#link-typography-mob").css("color", 'black')
        $("#link-contactus-mob").css("color", 'white')
        $('#home-mob').css("background-color", "transparent")
        $('#about-mob').css({ "background-color": "transparent" })
        $('#typography-mob').css("background-color", "transparent")
        $('#contactus-mob').css("background-color", "#01b3a7")
    }
    const ellipsisVertical = () => {
        $("#content").toggle()
    }
    return (
        <>
            <section className="desktop d-lg-inline-block d-none w-100 float-start">
                <div className="container">
                    <div className="row my-4">
                        <div className="col-3 logo">
                            <a href="http//Google.com">
                                <img src={require('../../assets/Imgs/logo-default-450x37.png')} alt='Logo'></img>
                            </a>
                        </div>
                        <div className="col-9" style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                            <div className="clock">
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRight: "1px solid gray", fontSize: '18px' }}
                                    className="mx-2">
                                    <span>
                                        <i className="fa-regular fa-clock"></i>
                                    </span>
                                    <p className="my-0 mx-3">
                                        09:00AM — 05:00PM
                                    </p>
                                </div>
                            </div>
                            <div className="phone-number">
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: '18px' }} className="mx-2">
                                    <span>
                                        <i className="fa-solid fa-phone"></i>
                                    </span>
                                    <p className="my-0 mx-3">
                                        +1 323-913-4688
                                    </p>
                                </div>

                            </div>
                            <Scale3d Text="get a free quote" className="ms-5" />
                        </div>
                    </div>
                </div>
            </section>
            <Menu />
            <div className="mobile d-lg-none d-inline-block w-100 float-start">
                <div className='container'>
                    <div className='row py-3 justify-content-between'>
                        <div className='col-1 pe-0' onClick={handleShow}>
                            <i className="fa-solid fa-bars float-start"></i>
                        </div>
                        <Offcanvas show={show} onHide={handleClose} className='w-75'>
                            <Offcanvas.Header className=''>
                                <Offcanvas.Title>
                                    <div className='py-3'>
                                        <i className="fa-brands fa-facebook-f mx-2"></i>
                                        <i className="fa-brands fa-twitter mx-2"></i>
                                        <i className="fa-brands fa-google-plus-g mx-2"></i>
                                        <i className="fa-brands fa-instagram ms-2"></i>
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul>
                                    <li className='py-3 px-3 my-2 active-mob' id='home-mob' onClick={OtherHomeMob}>
                                        <Link className='text-capitalize' to='/' id='link-home-mob'>
                                            home
                                        </Link>
                                    </li>
                                    <li className='py-3 px-3 my-2' id='about-mob' onClick={OtherAboutMob}>
                                        <Link className='text-capitalize' to='/About' id='link-about-mob'>
                                            About
                                        </Link>
                                    </li>
                                    <li className='py-3 px-3 my-2' id='typography-mob' onClick={OtherTypographyMob}>
                                        <Link className='text-capitalize' to='/Typography' id='link-typography-mob'>
                                            Typography
                                        </Link>
                                    </li>
                                    <li className='py-3 px-3 my-2' id='contactus-mob' onClick={OtherContactUsMob}>
                                        <Link className='text-capitalize' to='/ContactUs' id='link-contactus-mob'>
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <div className='col-9 ps-0'>
                            <img src={require('../../assets/Imgs/logo-default-450x37.png')} alt='Logo'></img>
                        </div>
                        <div className='col-1 position-relative ellipsis-vertical' style={{ display: 'contents' }} onClick={ellipsisVertical}>
                            <i className="fa-solid fa-ellipsis-vertical float-end me-2"></i>
                            <div className='mt-2 p-3' id='content'>
                                <div className="clock-mob d-flex justify-content-start align-items-center my-3">
                                    <div>
                                        <span>
                                            <i className="fa-regular fa-clock me-2" style={{ fontSize: '20px' }}></i>
                                        </span>
                                        <p className="my-0  d-inline-block">
                                            09:00AM — 05:00PM
                                        </p>
                                    </div>
                                </div>
                                <div className="phone-number-mob d-flex justify-content-start align-items-center my-3">
                                    <div className="">
                                        <span>
                                            <i className="fa-solid fa-phone me-2" style={{ fontSize: '20px' }}></i>
                                        </span>
                                        <p className="my-0  d-inline-block">
                                            +1 323-913-4688
                                        </p>
                                    </div>

                                </div>
                                <Scale3d Text="get a free quote" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar