import React from 'react'
import './UpToTop.scss'
const UpToTop = () => {
    const Up = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
            <div className='up' onClick={Up}>
                <i className="fa-solid fa-angles-up"></i>
            </div>
    )
}

export default UpToTop