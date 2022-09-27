import React from 'react'
import Logo from '../../assets/logo/logo.png'

function Nav() {
    return (
        <>
            <div className="Nav" id='nav'>
                <img src={Logo} className="Logo" alt="" />
                <div className="Routes" id='menu'>
                    <button className='Route'>Home</button>
                    <button className='Route'>About</button>
                    <button className='Route'>Careers</button>
                </div>
                <p className="Saying">"Not just an office, we're honest"</p>
            </div>
        </>
    )
}

export default Nav