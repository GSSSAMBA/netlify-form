import React from 'react';
// import './skills.css'
import './deal.css'

// import react from '../images/react.png'
// import html from '../images/html.png'
// import css from '../images/css.png'
// import javascript from '../images/javascript.png'
// import node from '../images/node.png'
// import Mongodb from '../images/Mongodb.png'
// import github from '../images/github.png'
// import trello from '../images/trello.png'
// import sass from '../images/sass.png'

const Skills = () => {
    return (
        <div>
            <div className='big-deal-container'>
                <h4 id='skills' className="work"><span className="underline">SKILLS <i class="fa-solid fa-screwdriver-wrench"></i></span> </h4>
                <div className='big-deal'>
                    <div className='deal-container'>
                        <div className='deal-container1'>
                            <i class="fa-brands fa-react turn andjaro"></i>
                            <div className='deal-content'>
                                <div className='small-content'>
                                    <div className='small-content'>
                                        <p className='react'>REACT JS</p>
                                    </div>
                                </div>
                            </div>
                            <p className='p'>"Framework de prédilection pour réaliser des interfaces dynamiques."</p>
                        </div>
                    </div>
                    <div className='deal-container'>
                        <div className='deal-container1'>
                            <i class="fa-brands fa-square-js turn andjaro"></i>
                            <div className='deal-content'>
                                <div className='small-content'>
                                    <div className='small-content'>
                                        <p className='react'>JAVASCRIPT</p>
                                    </div>
                                </div>
                            </div>
                            <p className='p'>"Indispensable et incontournable."</p>
                        </div>
                    </div>
                    <div className='deal-container'>
                        <div className='deal-container1'>
                            <i class="fa-brands fa-node turn andjaro"></i>
                            <div className='deal-content'>
                                <div className='small-content'>
                                    <div className='small-content'>
                                        <p className='react'>NODE JS</p>
                                    </div>
                                </div>
                            </div>
                            <p className='p'>"Sans lui mon backend n'existerait pas."</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='big-deal-container'>
                <div className='big-deal'>
                    <div className='deal-container'>
                        <div className='deal-container1'>
                            <i class="fa-brands fa-html5 turn andjaro"></i>
                            <div className='deal-content'>
                                <div className='small-content'>
                                    <div className='small-content'>
                                        <p className='react'>HTML</p>
                                    </div>
                                </div>
                            </div>
                            <p className='p'>"Sans fondateur, pas de fondations."</p>
                        </div>
                    </div>
                    <div className='deal-container'>
                        <div className='deal-container1'>
                            <i class="fa-brands fa-css3-alt turn andjaro"></i>
                            <div className='deal-content'>
                                <div className='small-content'>
                                    <div className='small-content'>
                                        <p className='react'>CSS</p>
                                    </div>
                                </div>
                            </div>
                            <p className='p'>"Des paillettes dans ma vie."</p>
                        </div>
                    </div>
                    <div className='deal-container'>
                        <div className='deal-container1'>
                            <i class="fa-brands fa-sass turn andjaro"></i>
                            <div className='deal-content'>
                                <div className='small-content'>
                                    <div className='small-content'>
                                        <p className='react'>SCSS</p>
                                    </div>
                                </div>
                            </div>
                            <p className='p'>"Trop d'imbrication tue l'imbrication."</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='big-deal-container'>
                <div className='big-deal'>
                    <div className='deal-container'>
                        <div className='deal-container1'>
                            <i class="fa-solid fa-database turn andjaro"></i>
                            <div className='deal-content'>
                                <div className='small-content'>
                                    <div className='small-content'>
                                        <p className='react'>MONGO.DB</p>
                                    </div>
                                </div>
                            </div>
                            <p className='p'>"DATA? DATA...DATA !"</p>
                        </div>
                    </div>
                    <div className='deal-container'>
                        <div className='deal-container1'>
                            <i class="fa-brands fa-github turn andjaro"></i>
                            <div className='deal-content'>
                                <div className='small-content'>
                                    <div className='small-content'>
                                        <p className='react'>GITHUB</p>
                                    </div>
                                </div>
                            </div>
                            <p className='p'>"Je versionne, tu versionnes, il versionne, et ....push."</p>
                        </div>
                    </div>
                    <div className='deal-container'>
                        <div className='deal-container1'>
                            <i class="fa-brands fa-trello turn andjaro"></i>
                            <div className='deal-content'>
                                <div className='small-content'>
                                    <div className='small-content'>
                                        <p className='react'>TRELLO</p>
                                    </div>
                                </div>
                            </div>
                            <p className='p'>"L'organisation de la tache facile."</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='big-deal-container'>
                <div className='big-deal'>
                    <div className='deal-container'>
                        <div className='deal-container1'>
                            <i class="fa-brands fa-php turn andjaro"></i>
                            <div className='deal-content'>
                                <div className='small-content'>
                                    <div className='small-content'>
                                        <p className='react'>PHP</p>
                                    </div>
                                </div>
                            </div>
                            <p className='p'>"La base"</p>
                        </div>
                    </div>
                    <div className='deal-container'>
                        <div className='deal-container1'>
                            <i class="fa-solid fa-table turn andjaro"></i>
                            <div className='deal-content'>
                                <div className='small-content'>
                                    <div className='small-content'>
                                        <p className='react'>MYSQL</p>
                                    </div>
                                </div>
                            </div>
                            <p className='p'>"Indispensable"</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;


