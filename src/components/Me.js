import React from 'react';
import './Me.css'
import "./rideau.css";
// import cvpic from './images/cvpic.jpg'
import cvpic from '../images/cvpic.jpg'
// import détouré from './images/détouré.png'
// import sobre from './images/sobre.jpg'

const Me = () => {
    return (
        <div>
            <div className='global-me'>
                <h4 id='aboutme2' className="aboutme4">
                    <span className="underline2">ABOUT ME <i className="fa-solid fa-address-card"></i></span>
                </h4>
                <div className='me-container'>
                    <div className='between'>
                        <div className='me-me'>
                            <img className='pic-me' src={cvpic} alt="detour" />
                        </div>
                        <div className='me-me2 rotate1'>
                            <p className='hob'>ABOUT ME</p>
                            <p className='hob-para'>Passioné d'informatique de multimédia et de nouvelles technologies je me consacre
                                à plein temps au developpement web et à la création de site.<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='me-container2'>
                    <div className='me-me2 radius  '>
                        <p className='hob marge2'>CV EN BREF</p>
                        <p className='hob-para'>
                            Par le passé j'ai été directeur de plusieurs restaurants.
                            <br />J'ai égalemment eu la chance de lancer un atelier cycle avec une démarche eco-citoyenne, projet
                            qui à recu le soutien de la region Ile-de-france.
                        </p>
                    </div>
                    <div className='me-me2 radius '>
                        <p className='hob'>FORMATION DANS LE WEB</p>
                        <p className='hob-para1'>
                            <a href='https://openclassrooms.com/fr/'>  <span className='forma-box'> OPENCLASSROOM  </span><br /></a>
                            <a href='https://oclock.io/'> <span className='forma-box'>  O'CLOCK</span></a>
                            <br />
                        </p>
                    </div>
                    <div className='me-me3 radius '>
                        <p className='hob marge'>PENDANT MON TEMPS LIBRE</p>
                        <p className='hob-para'>
                            Course à pied, vélo, football,handball cinéma, théatre et surtout refaire le monde entre amis.
                            <br />En bon père de famille evidemment les balades en foret.
                        </p>
                    </div>
                </div>
                {/* <div className='me-me'></div>
                <div className='me-me'></div> */}
            </div>
        </div>
    );
};

export default Me;