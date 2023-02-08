import React from 'react';
import './about.css'

import location from '../images/location.png'
// import robot from '../images/robot.png'

const About = () => {
    return (
        <div>
            <div id='home' className="about-container">
                <div className='centrer-present'>
                    <div className='about-name'>
                        <p className='tr1 survol'>G</p>
                        <p className='tr2 survol'>A</p>
                        <p className='tr3 survol'>U</p>
                        <p className='tr4 survol'>T</p>
                        <p className='tr5 survol'>H </p>
                        <p className='tr6 survol'>I</p>
                        <p className='tr7 survol'>E</p>
                        <p className='tr8 survol'>R</p>
                        <i className="fa-solid fa-boxes-packing redhot"></i>
                        {/* <img className='android' src={robot} alt="" ></img> */}
                    </div>
                    <p className='name'>Developper Web</p>
                    <div className='small-paraph'>
                        <p>  <img className='location' src={location} alt="" ></img>Paris - Vannes / Openclassroom - O'clock</p>
                    </div>
                    <div className='title-icon'>
                        <div className='icon-direction1 slide1'><i className="fa-brands fa-codepen andjaro"></i><p>Créer</p></div>
                        <div className='icon-direction slide2'><i className="fa-solid fa-code-compare andjaro"></i><p>Developper</p></div>
                        <div className='icon-direction slide3'> <i className="fa-solid fa-users andjaro"></i><p>Echanger</p></div>

                    </div>
                </div>
                <a href='#skills'>
                    <button className='btn-about'><span>EN SAVOIR PLUS <i className="fa-solid fa-arrow-right"></i></span></button></a>
            </div>
        </div >
    )
}
export default About