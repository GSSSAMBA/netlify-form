import React from 'react';
import './about.css'

import location from '../images/location.png'
// import robot from '../images/robot.png'

const About = () => {
    return (
        <div>
            <section>
                <a href='https://www.linkedin.com/in/gauthier-samba-seale-b6286b247/?originalSubdomain=fr'>  <div className='social'>LinkedIn <i className="fa-brands fa-linkedin"></i></div></a>
                <a href='https://github.com/GSSSAMBA'>  <div className='social1'>Github <i className="fa-brands fa-github"></i></div></a>
                <a href="mailto:gauthieredc@gmail.com">   <div className='social2'>E-mail <i className="fa-regular fa-envelope"></i></div></a></section>
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
                {/* <a href='#skills'>
                    <button className='btn-about'><span>EN SAVOIR PLUS <i className="fa-solid fa-arrow-right"></i></span></button></a> */}
                <a href='#aboutme'>
                    <button className='bouton'><span>Wsh Orphé click <i className="fa-solid fa-arrow-right"></i></span></button>
                </a>
                {/* <a href='#work'>
                    <button className='bouton'><span>PROJETS <i className="fa-solid fa-arrow-right"></i></span></button>
                </a> */}
            </div>
        </div >
    )
}
export default About