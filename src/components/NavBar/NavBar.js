import React from 'react'
import './NavBar.scss'
import Scale3d from '../Buttons/Scale3d'
import { Col, Container, Row } from 'react-bootstrap'

const NavBar = () => {
    return (
        <>
            <section className="desktop d-lg-inline d-none">
                <div className="container">
                    <div className="row my-4">
                        <div className="col-3 logo">
                            <a href="http//Google.com">
                                <img src={require('../../assets/Imgs/logo-default-450x37.png')} alt='Logo'></img>
                            </a>
                        </div>
                        <div className="col-9" style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                            <div className="clock">
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRight: "1px solid gray" }}
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
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="mx-2">
                                    <span>
                                        <i className="fa-solid fa-phone"></i>
                                    </span>
                                    <p className="my-0 mx-3">
                                        +1 323-913-4688
                                    </p>
                                </div>

                            </div>
                            <Scale3d Text="get a free quote" />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default NavBar