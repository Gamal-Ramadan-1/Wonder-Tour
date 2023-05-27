import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './Slider.scss'
import { Pagination, Autoplay } from "swiper";
import Scale3d from '../Buttons/Scale3d'
const Slider = () => {
    return (
        <>
            <Swiper
                direction={"vertical"}
                autoplay={{ delay: 4500, disableOnInteraction: false, }}
                spaceBetween={0}
                pagination={{ clickable: true, }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='slider-img-1'>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-12 text-light">
                                <h6 className='text-uppercase'>Enjoy the Best Destinations with Our Travel Agency</h6>
                                <h1 className='text-capitalize'>explore <span>the world</span></h1>
                                <Scale3d Text="get in touch" Classes="text-light px-5 py-3 mt-4 border-btn" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider-img-2'>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-12 text-light">
                                <h6 className='text-uppercase'>A team of professional Travel Experts</h6>
                                <h1 className='text-capitalize'>trust <span>our experience</span></h1>
                                <Scale3d Text="get in touch" Classes="text-light px-5 py-3 mt-4 border-btn" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider-img-3'>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-12 text-light">
                                <h6 className='text-uppercase'>Build your Next Holiday Trip with Us</h6>
                                <h1 className='text-capitalize'>create <span>your tour</span></h1>
                                <Scale3d Text="get in touch" Classes="text-light px-5 py-3 mt-4 border-btn" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider