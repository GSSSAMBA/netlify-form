import React from 'react';
import './skills.css'

import react from '../images/react.png'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import node from '../images/node.png'
import Mongodb from '../images/Mongodb.png'
import github from '../images/github.png'
import trello from '../images/trello.png'
import sass from '../images/sass.png'

const Skills = () => {
    return (
        <div>
            <div className='phone-content'>
                <h2 id='skills' className='skills'><span className='underline'>SKILLS <i className="fa-solid fa-screwdriver-wrench"></i></span></h2>
                <div className="phone">
                    <div className="phone-mirror">
                        <div className="topWrapper">
                            <div className="camera"></div>
                            <div className="line-rec"></div>
                        </div>
                        <div className="big-container">
                            <div className="box-container">
                                <div className='colonne'>
                                    <div className="box"><img className='img-skill' src={html} alt="imgfond" ></img></div><p className='skill-text'>HTML</p></div>
                                <div className='colonne'>
                                    <div className="box"><img className='img-skill' src={javascript} alt="imgfond" ></img></div><p className='skill-text'>JAVASCRIPT</p></div>
                                <div className='colonne'> <div className="box"><img className='img-skill' src={react} alt="imgfond" ></img></div><p className='skill-text'>REACT</p></div>
                            </div>
                            <div className="box-container">
                                <div className='colonne'> <div className="box"><img className='img-skill' src={node} alt="imgfond" ></img></div><p className='skill-text'>NODE</p></div>
                                <div className='colonne'> <div className="box"><img className='img-skill' src={Mongodb} alt="imgfond" ></img></div><p className='skill-text'>MONGODB</p></div>
                                <div className='colonne'> <div className="box"><img className='img-skill' src={css} alt="imgfond" ></img></div><p className='skill-text'>CSS</p></div>
                            </div>
                            <div className="box-container">
                                <div className='colonne'> <div className="box"><img className='img-skill' src={sass} alt="imgfond" ></img></div><p className='skill-text'>SASS</p></div>
                                <div className='colonne'> <div className="box"><img className='img-skill' src={github} alt="imgfond" ></img></div><p className='skill-text'>GITHUB</p></div>
                                <div className='colonne'> <div className="box"><img className='img-skill' src={trello} alt="imgfond" ></img></div><p className='skill-text'>TRELLO</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;


