import React, { useEffect } from 'react'
import BannerPhoto from '../../assets/photos/banner.jpg'

function Banner() {
    return (
        <>
            <div className="Banner" data-aos="zoom-in-down" data-aos-duration="500">
                <div className="BannerAbout Hover" data-aos='fade-right' data-aos-duration='600'>
                    "We're more than a fortune 500."
                </div>
                <div className="CompanyDescription Hover" data-aos='fade-right' data-aos-duration='700'>
                    <p>With our patented cutting edge tech stacks and developers. Our Mission is to become the largest tech company with the largest impact in the world.</p>
                </div>
                <div className="CompanyDescription2 Hover" data-aos='fade-right' data-aos-duration='900'>
                    <p>Leading our tech space with counter-intuitive yet innovative blockchain tech.</p>
                </div>
                <div className="CompanyDescription3 Hover" data-aos='fade-left' data-aos-duration='1100'>
                    <div>&#10070;</div>
                </div>
                <img src={BannerPhoto} alt="" className='BannerImage' />
            </div>
        </>
    )
}

export default Banner