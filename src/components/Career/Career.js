import React from 'react'
import CareerPhoto from '../../assets/photos/career.jpg'

function Career() {
    return (
        <>
            <div className="Careers" name="Career" data-aos="flip-up" data-aos-duration="1200">
                <div className="CareerBlock" data-aos="slide-up" data-aos-duration="900">
                    <div className="CareerPhotoBlock">
                        <img src={CareerPhoto} alt="" className='CareerImage' />
                        <img src={CareerPhoto} alt="" className='CareerImage2' />
                        <div className="Circle">&#10003;</div>
                        <div className="CareerDescription">
                            <h1>With Record breaking company culture...</h1>
                        </div>
                    </div>
                    <div className="CareerPhotoBlock">
                    </div>
                </div>
                <div className="CareerPoints" data-aos="fade-left" data-aos-duration="1800">
                    <ul>
                        <h1>Stats</h1>
                        <h3><li><bold>Ninety-two percent</bold> of CEOs report their organization is empathetic. However, only 50% of employees say their CEO is empathetic.</li></h3>
                        <h3><li>Employees aren’t feeling properly engaged through recognition. Only <bold>one in three</bold> U.S. workers say they received recognition for.</li></h3>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Career