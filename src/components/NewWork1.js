import React from 'react';
import './newwork1.css'

import mur from '../images/mur.jpg'
import tablette from '../images/tablette.jpeg'
import booki2 from '../images/booki2.jpg'
import ticket from '../images/ticket.png'
import booki from '../images/booki.png'
import invader10 from '../images/invader10.jpg'
import omf from '../images/omf.png'
import world from '../images/world.jpg'
import pupetta from '../images/pupetta.jpeg'
import banniere from '../images/banniere.png'
import KANAP from '../images/KANAP.png'
import media from '../images/media.png'
import piment from '../images/piment.webp'
import grey from '../images/grey.jpg'
import flix1 from '../images/flix1.webp'
import ischia from '../images/ischia.jpg'
import space1 from '../images/space1.webp'
import yanko from '../images/yanko.jpg'
import pastel from '../images/pastel.jpg'
import food from '../images/food.webp'
import dalmata from '../images/dalmata.jfif'
import piment2 from '../images/piment2.jpg'

const NewWork1 = () => {
    return (
        <div>
            <div className='work-container'>
                <div className='taille-box2 rela'><img className='image-une' src={tablette} alt="imgfond" ></img>
                    <img className='image-taille abso' src={ticket} alt="imgfond" ></img>

                    <div className='the-box'></div>
                    <div className='petit-contenu1 gris'>
                        <p className='text-pic1 net-text'>
                            <span className='under1'>NETFLIX CLONE</span>
                        </p>
                        <div className='liste-div1'>
                            <p>
                                <ul className='liste'>
                                    <li className='puce'>Reproduction de l'interface NETFLIX.</li><br></br>
                                    <li className='puce1'>Requete API pour obtenir les données américaine en temps réels.</li><br></br>
                                    <li className='puce'>React JS.</li><br></br>
                                    {/* <li className='puce'>TEXT</li> */}
                                </ul>
                            </p>
                        </div>
                        <img className='fond-gris' src={flix1} alt=''></img>
                    </div>
                    {/* <div className='petit-contenu'>
                        <div className=''>
                            <img className='image-taille' src={mur} alt="imgfond" ></img>

                        </div>
                    </div> */}
                </div>
                <div className='taille-box2'><img className='image-une' src={booki2} alt="imgfond" ></img>
                    <img className='image-taille abso1' src={booki} alt="imgfond" ></img>
                    <div className='the-box'></div>
                    {/* <div className='petit-contenu'>
                        <div className=''>
                            <img className='image-taille' src={mur} alt="imgfond" ></img>
                        </div>
                    </div> */}
                    <div className='petit-contenu white'>
                        <p className='text-pic2 holiday-text'>
                            <span className='under1'>BOOKI</span>
                        </p>
                        <div className='liste-div1'>
                            <p>
                                <ul className='liste'>
                                    <li className='puce'>Site One page de reservation de voyages.</li><br></br>
                                    <li className='puce1'>HTML/CSS.</li><br></br>
                                    {/* <li className='puce'>TEXT</li> */}
                                </ul>
                            </p>
                        </div>
                        <img className='fond-gris' src={ischia} alt=''></img>
                    </div>
                </div>
                <div className='taille-box2'><img className='image-une' src={invader10} alt="imgfond" ></img>
                    <div className='the-box'></div>
                    <div className='petit-contenu1 blue'>
                        <p className='text-pic2 invader-text'>
                            <span className='under1'>SPACE INVADER CLONE</span>
                        </p>
                        <div className='liste-div1'>
                            <p>
                                <ul className='liste refonte '>
                                    <li className='puce'>Reproduction du jeu<br></br> <br></br>SPACE INVADER</li><br></br>
                                    <li className='puce1'>Only Desktop.</li><br></br>
                                    <li className='puce'>JAVASCRIPT.</li><br></br>
                                    {/* <li className='puce'>TEXT</li> */}
                                </ul>
                            </p>
                        </div>
                        <img className='fond-gris' src={space1} alt=''></img>
                    </div>
                    {/* <div className='petit-contenu'>
                        <div className=''>
                            <img className='image-taille' src={space1} alt="imgfond" ></img>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='work-container'>
                <div className='taille-box2'><img className='image-une' src={world} alt="imgfond" ></img>
                    <div className='the-box'></div>
                    <div className='petit-contenu1 blue'>
                        <p className='text-pic2 world-text'>
                            <span className='under1'>ALGORITHME DE TRI</span>
                        </p>
                        <div className='liste-div1'>
                            <p>
                                <ul className='liste puce3'>
                                    <li className='puce'>Tri des nations en fonction du continent et du nombre d'habitants
                                        <br></br>
                                        <br></br>
                                        Requete API pour obtenir l'evolution du nombre d'habitants en temps réel
                                        <br></br>
                                        <br></br>
                                        REACT JS</li>
                                    {/* <li className='puce'>TEXT</li> */}
                                </ul>
                            </p>
                        </div>
                        <img className='fond-gris' src={yanko} alt=''></img>
                    </div>
                    {/* <div className='petit-contenu'>
                        <div className=''>
                            <img className='image-taille' src={space1} alt="imgfond" ></img>
                        </div>
                    </div> */}
                </div>
                <div className='taille-box2'><img className='image-une' src={pupetta} alt="imgfond" ></img>
                    <img className='image-taille abso3' src={omf} alt="imgfond" ></img>
                    <div className='the-box'></div>
                    <div className='petit-contenu1 blue'>
                        <p className='text-pic2
                         food-text'>
                            <span className='under1'>OH MY FOOD</span>
                        </p>
                        <div className='liste-div1'>
                            <p>
                                <ul className='liste puce3'>
                                    <li className='puce'>Réservez vos menu dans vos restaurants préférés
                                        <br></br>
                                        <br></br>
                                        Site dynamique
                                        <br></br>
                                        <br></br>
                                        HTML/CSS</li>
                                    {/* <li className='puce'>TEXT</li> */}
                                </ul>
                            </p>
                        </div>
                        <img className='fond-gris' src={dalmata} alt=''></img>
                    </div>
                    {/* <div className='petit-contenu'>
                        <div className=''>
                            <img className='image-taille' src={space1} alt="imgfond" ></img>
                        </div>
                    </div> */}
                </div>
                <div className='taille-box2'>
                    <img className='image-une' src={banniere} alt="imgfond" ></img>
                    <img className='image-taille abso3' src={KANAP} alt="imgfond" ></img>
                    {/* <div className='the-box'></div> */}
                    <div className='petit-contenu'>
                        <p className='text-pic'>
                            <span className='under2'>KANAP</span>
                        </p>
                        <div className='liste-div marge'>
                            <p>
                                <ul className='liste puce3'>
                                    <li className='puce'>Création d'un site E-commerce de vente de canapé.</li><br></br>
                                    <li className='puce1'>Panier/Formulaire client/Normes de sécurité.</li><br></br>
                                    <li className='puce'>Generation automatisé de N° de commande.</li><br></br>
                                    <li className='puce'>Deploiement à venir.</li><br></br>
                                    <li className='puce1'>JAVASCRIPT</li><br></br>
                                    {/* <li className='puce'>TEXT</li> */}
                                </ul>
                            </p>
                        </div>
                        <img className='fond-gris' src={grey} alt=''></img>
                    </div>

                </div></div>
            {/* </div> */}
            <div className='work-container'>
                <div className='taille-box2'><img className='image-une' src={media} alt="imgfond" ></img>
                    <div className='the-box'></div>
                    <div className='petit-contenu1 black'>
                        <p className='text-pic2 media-text'>
                            <span className='under2'>GROUPOMANIA</span>
                        </p>
                        <div className='liste-div3'>
                            <p>
                                <ul className='liste puce3' >
                                    <li className=''>Réseau social d'entreprise
                                        <br></br>
                                        <br></br>
                                        Discutez entre collaborateurs avec votre propre réseau social
                                        <br></br>
                                        <br></br>
                                        <li className='puce'>Deploiement à venir.</li>
                                        <br></br>
                                        CRUD/MERD
                                        <br></br>
                                        <br></br>
                                        REACT JS/NODE JS</li>
                                    {/* <li className='puce'>TEXT</li> */}
                                </ul>
                            </p>
                        </div>
                        <img className='fond-gris' src={pastel} alt=''></img>
                    </div>
                    {/* <div className='petit-contenu'>
                        <div className=''>
                            <img className='image-taille' src={space1} alt="imgfond" ></img>
                        </div>
                    </div> */}
                </div>
                {/* <div className='taille-box2'><img className='image-une' src={piment} alt="imgfond" ></img>
                    <div className='the-box'></div><div className='petit-contenu'>
                        <div className=''>
                            <img className='image-taille' src={mur} alt="imgfond" ></img>
                        </div>
                    </div>
                </div> */}
                <div className='taille-box2'><img className='image-une' src={piment} alt="imgfond" ></img>
                    <div className='the-box'></div>
                    <div className='petit-contenu1 white'>
                        <p className='text-pic2 piquante-text'>
                            <span className='under2'>PIQUANTE</span>
                        </p>
                        <div className='liste-div4'>
                            <p>
                                <ul className='liste puce3' >
                                    <li className=''>Creation d'une API REST
                                        <br></br>
                                        <br></br>
                                        Authentification utilisateurs/Conformité RGPD
                                        <br></br>
                                        <br></br>
                                        <li className='puce'>Cryptage MDP utilisateurs</li>
                                        <br></br>
                                        Deploiement à venir.
                                        <br></br>
                                        <br></br>
                                        NODE JS
                                        <br></br>
                                        <br></br>
                                    </li>
                                    {/* <li className='puce'>TEXT</li> */}
                                </ul>
                            </p>
                        </div>
                        <img className='fond-gris' src={piment2} alt=''></img>
                    </div>
                    {/* <div className='petit-contenu'>
                        <div className=''>
                            <img className='image-taille' src={space1} alt="imgfond" ></img>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default NewWork1;


// #22f5ff