import React from 'react';
import './navbar.css'
import { useState } from 'react';
import buf from '../images/buf.png'
// import détouré from '../images/détouré.png'


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }


    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <a href='#home'>
                <img className='lion' src={buf} alt="imgfond" ></img></a>


            <ul className='navbar__links'>

                <li ><a href='#home' className='navbar__item slideInDown-1 nav-link navbar__link effet refonte1' onClick={handleShowLinks}>HOME</a>
                    {/* <li ><a href='#home' className='navbar__item slideInDown-1 nav-link navbar__link effet' onClick={handleShowLinks}><i className="fa-solid fa-house"></i></a> */}
                </li>
                {/* <li ><a href='#hello' className='navbar__item slideInDown-1 nav-link navbar__link effet' onClick={handleShowLinks}><i className="fa-solid fa-address-card"></i></a>
                </li> */}
                {/* <li ><a href='#work' className='navbar__item slideInDown-1 nav-link navbar__link effet' onClick={handleShowLinks}><i className="fa-solid fa-briefcase"></i></a>
                </li> */}
                <li ><a href='#skills' className='navbar__item slideInDown-1 nav-link navbar__link effet refonte1' onClick={handleShowLinks}>SKILLS</a>
                </li>
                {/* <li ><a href='#skills' className='navbar__item slideInDown-1 nav-link navbar__link effet' onClick={handleShowLinks}><i className="fa-solid fa-screwdriver-wrench"></i></a>
                </li> */}
                <li ><a href='#work' className='navbar__item slideInDown-1 nav-link navbar__link effet refonte1' onClick={handleShowLinks}>WORK</a>
                    {/* <li ><a href='#work' className='navbar__item slideInDown-1 nav-link navbar__link effet' onClick={handleShowLinks}><i className="fa-solid fa-briefcase"></i></a> */}
                </li>
                <li>
                    <a href='#contact'><div className=" btn refonte1" onClick={handleShowLinks}>CONTACT</div></a>
                    {/* <a href='#contact'><div className="btn" onClick={handleShowLinks}>Contact</div></a> */}
                </li>
            </ul>




            <button className='navbar__burger' onClick={handleShowLinks}>
                <span className='burger-bar'></span>
            </button>

        </nav>
    );
};

export default Navbar;