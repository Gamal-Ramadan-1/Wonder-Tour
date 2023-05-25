import React from 'react'
import './Footer.scss'
import Scale3d from "../Buttons/Scale3d"
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row py-5 gy-4 mt-5">
                        <div className="col-lg-4 col-md-12 col-sm-12 contact-us">
                            <h5 className='text-uppercase text-light mb-4 text-lg-start text-center'>contact us</h5>
                            <div className='ms-lg-0 ms-5 ps-lg-0 ps-5 content'>
                                <p className='d-flex align-items-center'>
                                    <i className="fa-solid fa-phone me-4"></i>
                                    <a href="http//Google.com">+1 323-913-4688</a>
                                </p>
                                <p className='d-flex align-items-center'>
                                    <i className="fa-solid fa-envelope me-4"></i>
                                    <a href="http//Google.com" style={{ letterSpacing: '1.5px' }}>info@demolink.org</a>
                                </p>
                                <p className='d-flex align-items-start'>
                                    <i className="fa-solid fa-location-arrow me-4 location-icon"></i>
                                    <a href="http//Google.com" style={{ letterSpacing: '1.5px' }}>
                                        <span>4730 Crystal Springs Dr,</span>
                                        <br />
                                        <span>Los Angeles, CA 90027</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pepular-news">
                            <h5 className='text-lg-start text-center mb-4'>pepular news</h5>
                            <div className='ms-lg-0 ms-5 ps-lg-0 ps-5 content '>
                                <p>
                                    <a href='http//Google.com' className='mb-1'>Your Personal Guide to 5 Best <br className='d-lg-block d-inline-block' />  Places to Visit on Earth </a>
                                </p>
                                <p className='date'>may 04,2019</p>
                                <p>
                                    <a href='http//Google.com' className='mb-1'>Top 10 Hotels: Rating by <br className='d-lg-block d-inline-block' /> Wonder Tour Travel Experts </a>
                                </p>
                                <p className="date">may 04,2019</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 quick-links">
                            <h5 className='text-light mb-4'>quick links</h5>
                            <ul className='d-lg-inline-block d-none'>
                                <li className='text-capitalize mb-2 w-50 float-start'><a href="http//Google.com"> about us </a></li>
                                <li className='text-capitalize mb-2 w-50 float-end'><a href="http//Google.com"> gallery </a></li>
                                <li className='text-capitalize mb-2 w-50 float-start'><a href="http//Google.com"> our tours </a></li>
                                <li className='text-capitalize mb-2 w-50 float-end'><a href="http//Google.com"> blog </a></li>
                                <li className='text-capitalize mb-2'><a href="http//Google.com"> our team </a></li>
                            </ul>
                            <ul className='d-lg-none d-inline-block'>
                                <div className="row">
                                    <li className='text-capitalize mb-2 col-4 text-center'><a href="http//Google.com"> about us </a></li>
                                    <li className='text-capitalize mb-2 col-4 text-center'><a href="http//Google.com"> our tours </a></li>
                                    <li className='text-capitalize mb-2 col-4 text-center'><a href="http//Google.com"> our team </a></li>
                                    <li className='text-capitalize mb-2 col-4 text-center'><a href="http//Google.com"> gallery </a></li>
                                    <li className='text-capitalize mb-2 col-4 text-center'><a href="http//Google.com"> blog </a></li>
                                </div>
                            </ul>
                            <Scale3d Text="get in touch" Classes="py-3 px-5 background text-light" />
                        </div>
                    </div>
                </div>

            </footer>
            <div className="copyright">
            </div>
        </>
    )
}

export default Footer