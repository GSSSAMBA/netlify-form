import React, { useState } from "react";
import "./rideau.css";
// import codex1 from './images/codex1.jpg'
// import sauvage from './images/sauvage.jpg'
import sauvage from '../images/sauvage.jpg'

function Rideau() {
    const [anim, setAnim] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const classToggle = () => {
        setAnim(!anim);
        setButtonClicked(true);
    };

    let classeAnim = "";
    if (anim) {
        classeAnim += " animclasse";
    } else {
        classeAnim = "box";
    }

    let classeAnim2 = "";
    if (anim) {
        classeAnim2 += " animclasse2";
    } else {
        classeAnim2 = "box";
    }

    return (
        <div className="home">
            <div className="ensemble"></div>
            <div className="content">


                {!buttonClicked && (
                    <div>
                        <h4 id='aboutme' className="aboutme titre-hobbies">
                            <span className="underline3">KNOWLEDGE <i className="fa-solid fa-code"></i></span>
                        </h4>

                        <div className="aboutme2 titre-hobbies2">Désireux d'en savoir plus ??</div>
                        <div className="aboutme3 titre-hobbies3">Clique et découvre quelque une de mes compétences techniques</div>
                    </div>
                )}

                <div className="globe">
                    {/* <img className='water' src={codex1} alt=''></img> */}
                    <img className='water' src={sauvage} alt=''></img>

                    <div className="globe-box">
                        {/* <img className='codex' src={sauvage} alt=''></img> */}
                        <div className="globe-text">Requete API <i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Creation API<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">FETCH/AXIOS<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Cryptage MDP<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">COOKIES<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">token<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Creer des bases de donnees<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Import/export BDD<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Creer un serveur<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Normes RGPD<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">GET/POST/UPDATE/DELETE<i className="fa-solid fa-check-to-slot green"></i></div>
                    </div>
                    <div className="globe-box">
                        {/* <img className='codex' src={sauvage} alt=''></img> */}
                        <div className="globe-text">Hook React<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Responsive design<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Flexbox/Grid<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">REGEX<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">REDUX/STORE<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Media-queries<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Utilisation du terminal<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">GITHUB<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Deploiement<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Netlify/Heroku/Ionos<i className="fa-solid fa-check-to-slot green"></i></div></div>
                    <div className="globe-box">
                        {/* <img className='codex' src={sauvage} alt=''></img> */}
                        <div className="globe-text">Github Pages/FireBase<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">OPERATEUR TERNAIRE<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Rendu conditionnelle<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Algorithmie J-S <i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Postman<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">ChatGpt<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">STACK-OVERFLOW<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">CRUD<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">MERN<i className="fa-solid fa-check-to-slot green"></i></div>
                        <div className="globe-text">Envoi de formulaire<i className="fa-solid fa-check-to-slot green"></i></div>
                    </div>
                </div>

                {buttonClicked ? null : (
                    <button className="change" onClick={classToggle}>
                        COMPETENCES TECHNIQUES
                    </button>
                )}

                <div className={`box ${classeAnim2}`} />
                <div className={`box ${classeAnim}`} />
            </div>
        </div>
    );
}

export default Rideau;
