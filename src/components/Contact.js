// import React from 'react';
// import './contact.css'

// import github from '../images/github.png'
// import linkedin from '../images/linkedin.png'
// import phone from '../images/phone.png'
// import mail1 from '../images/mail1.png'

// const Contact = () => {
//     const handleClick = (e) => {
//         e.preventDefault();
//         const form = document.querySelector(".global-contact");
//         const projectText = document.querySelector(".project");
//         const contactContainer = document.querySelector(".contact-container");
//         projectText.style.display = "none";
//         form.style.display = "block";
//         contactContainer.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <div id="contact" className="contact-container">
//             <div className="small-container">
//                 <p className="project">Vous avez un projet ?</p>

//                 <a href="contactid" onClick={handleClick}>
//                     <p className="discuss">
//                         <span className="under">Discutons en.</span>
//                     </p>
//                 </a>
//             </div>

//             <div id='contactid' className="global-contact" style={{ display: "none" }}>
//                 <div id="contact-form" className="contact">
//                     <form
//                         name="contact"
//                         method="post"
//                         className="contact__form"
//                         data-netlify="true"
//                         onSubmit="submit"
//                     >
//                         <input
//                             className="champ"
//                             type="hidden"
//                             name="form-name"
//                             value="contact"
//                         />
//                         <label className="form-color" for="name">
//                             Nom:
//                         </label>
//                         <input className="champ" type="text" name="name" />

//                         <label className="form-color" for="email">
//                             Email:{" "}
//                         </label>
//                         <input className="champ" type="email" name="email" />

//                         <label className="form-color" for="message">
//                             Message:{" "}
//                         </label>
//                         <textarea className="area" name="message"></textarea>

//                         <div className="center-btn">
//                             <button className="send" type="submit">
//                                 Envoyer
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="footer-img">
//                     <a href="tel:06.61.50.50.55" alt="phone-number">
//                         <img className="footer-icon" src={phone} alt="imgfond"></img>
//                     </a>
//                     <a href="https://github.com/GSSSAMBA">
//                         <img className="footer-icon" src={github} alt="imgfond"></img>
//                     </a>
//                     <a href="mailto:gauthieredc@gmail.com">
//                         <img className="footer-icon" src={mail1} alt="imgfond"></img>
//                     </a>
//                     <a
//                         a
//                         href="https://www.linkedin.com/in/gauthier-samba-seale-b6286b247/?originalSubdomain=fr"
//                     >
//                         <img
//                             className="footer-icon phone1"
//                             src={linkedin}
//                             alt="imgfond"
//                         ></img>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;

import React, { useState } from 'react';
import './contact.css';

import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import phone from '../images/phone.png';
import mail1 from '../images/mail1.png';

const Contact = () => {
    const handleClick = (e) => {
        e.preventDefault();
        const form = document.querySelector(".global-contact");
        const projectText = document.querySelector(".project");
        const contactContainer = document.querySelector(".contact-container");
        projectText.style.display = "none";
        form.style.display = "block";
        contactContainer.scrollIntoView({ behavior: "smooth" });
    };

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // validation des champs
        const nameRegex = /^[a-zA-ZàâäéèêëïîôöùûüçÀÂÄÉÈËÏÎÔÖÙÛÜÇ\s'-]+$/;
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        // const messageRegex = /^.{1,300}$/;

        let isValid = true;
        if (!nameRegex.test(formState.name)) {
            isValid = false;
            alert('Veuillez entrer un nom valide.');
        }
        if (!emailRegex.test(formState.email)) {
            isValid = false;
            alert('Veuillez entrer une adresse e-mail valide.');
        }
        // if (!messageRegex.test(formState.message)) {
        //     isValid = false;
        //     alert('Veuillez entrer un message valide (maximum 300 caractères).');
        // }

        if (isValid) {
            // envoi du formulaire
            const form = document.querySelector('.global-contact');
            const projectText = document.querySelector('.project');
            const contactContainer = document.querySelector('.contact-container');
            projectText.style.display = 'none';
            form.style.display = 'block';
            contactContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="contact" className="contact-container">
            <div className="small-container">
                <p className="project">Vous avez un projet ?</p>

                <a href="contactid" onClick={handleClick}>
                    <p className="discuss">
                        <span className="under">Discutons en.</span>
                    </p>
                </a>
            </div>

            <div id="contact-form" className="global-contact" style={{ display: 'none' }}>
                <div className="contact">
                    <form
                        name="contact"
                        method="post"
                        className="contact__form"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                    >
                        <input className="champ" type="hidden" name="form-name" value="contact" />
                        <label className="form-color" htmlFor="name">
                            Nom:
                        </label>
                        <input
                            className="champ"
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                        />

                        <label className="form-color" htmlFor="email">
                            Email:{' '}
                        </label>
                        <input
                            className="champ"
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                        />

                        <label className="form-color" htmlFor="message">
                            Message:{' '}
                        </label>
                        <textarea
                            className="area"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                        ></textarea>
                        <div className="center-btn">
                            <button className="send" type="submit">
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
                <div className="footer-img">
                    <a href="tel:06.61.50.50.55" alt="phone-number">
                        <img className="footer-icon" src={phone} alt="imgfond"></img>
                    </a>
                    <a href="https://github.com/GSSSAMBA">
                        <img className="footer-icon" src={github} alt="imgfond"></img>
                    </a>
                    <a href="mailto:gauthieredc@gmail.com">
                        <img className="footer-icon" src={mail1} alt="imgfond"></img>
                    </a>
                    <a
                        a
                        href="https://www.linkedin.com/in/gauthier-samba-seale-b6286b247/?originalSubdomain=fr"
                    >
                        <img
                            className="footer-icon phone1"
                            src={linkedin}
                            alt="imgfond"
                        ></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
