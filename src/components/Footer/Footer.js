import React from 'react'
import './Footer.scss'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row py-5 gy-4 mt-5">
                        <div className="col-lg-4 col-md-6 col-sm-12 contact-us">
                            <h5 className='text-uppercase text-light mb-4'>contact us</h5>
                            <p className='d-flex align-items-center'>
                                <i className="fa-solid fa-phone me-4"></i>
                                <a href="#">+1 323-913-4688</a>
                            </p>
                            <p className='d-flex align-items-center'>
                                <i class="fa-solid fa-envelope me-4"></i>
                                <a href="#" style={{ letterSpacing: '1.5px' }}>info@demolink.org</a>
                            </p>
                            <p className='d-flex align-items-start'>
                            <i class="fa-solid fa-location-arrow me-4"></i>
                                <a href="#" style={{ letterSpacing: '1.5px' }}>
                                    <span>4730 Crystal Springs Dr,</span>
                                    <br />
                                    <span>Los Angeles, CA 90027</span>
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12"></div>
                        <div className="col-lg-4 col-md-6 col-sm-12"></div>
                    </div>
                </div>

            </footer>
            <div className="copyright">
            </div>
        </>
    )
}

export default Footer