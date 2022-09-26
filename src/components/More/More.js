import React, { useState, useEffect } from 'react'
import MorePhoto from '../../assets/photos/morephoto.jpg'

function More() {
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [bio, setBio] = useState('')

    const handleName = (e) => {
        const { value } = e.target
        setName(value)
    }

    const handleJob = (e) => {
        const { value } = e.target
        setJob(value)
    }

    const handleBio = (e) => {
        const { value } = e.target
        setBio(value)
    }

    const handleClick = () => {
        setName('')
        setJob('')
        setBio('')
    }
    return (
        <>
            <div className="More" id="More" data-aos="slide-up" data-aos-duration="1000">
                <div className="MoreTitle">
                    <h2>Ready for a Career With <em>My<strong>Office</strong>?</em></h2>
                </div>
                <div className="Inputs" data-aos="flip-up" data-aos-duration="1400">
                    <input type="text" placeholder='Name...' value={name} onChange={handleName} />
                    <input type="text" placeholder='Job Desc...' value={job} onChange={handleJob} />
                    <input type="text" placeholder='Bio...' value={bio} onChange={handleBio} />
                </div>
                <div className="MoreButton">
                    <button onClick={handleClick}>Submit</button>
                </div>
                <div className='Contact'>
                    Contact HR at <strong>HR@myoffice.com</strong>
                </div>
                <img src={MorePhoto} alt="" className="MorePhoto" />
            </div>
        </>
    )
}

export default More