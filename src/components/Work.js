
// import { useRef, useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import React from 'react';
// import './Work1.css'
// import './work.css'

// import work from './work.css'



// import netflix from '../images/netflix.png'
// import booki1 from '../images/booki1.png'
// import invader2 from '../images/invader2.png'

// const Work1 = () => {

//     const { ref: myRef, inView: myElementIsVisible } = useInView();
//     const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();

//     return (
//         <div className='contenant'>
//             <h4 id='work' className="work"><span className="underline">Work</span> <i className="fa-solid fa-code"></i></h4>

//             <div className='petit-contenant'>
//                 <div className='small-box'>
//                     <img className='image-size' src={invader2} alt="imgfond"></img>
//                     <div className='top-box'></div>
//                     <p className='contenu'>
//                         <div className='text-contenu'>
//                             <p>Clone de space invader<br />WWWWNNNNN
//                                 <br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN
//                             </p>
//                         </div></p>
//                 </div>


//                 <div className='small-box'><img className='image-size' src={netflix} alt="imgfond" ></img>
//                     <div className='top-box'></div><p className='contenu'> <div className='text-contenu'>
//                         <p>Clone de space invader<br />WWWWNNNNN
//                             <br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN
//                         </p>
//                     </div></p>
//                 </div>
//                 <div className='small-box'><img className='image-size' src={booki1} alt="imgfond" ></img>
//                     <div className='top-box'></div><p className='contenu'> <div className='text-contenu'>
//                         <p>Clone de space invader<br />WWWWNNNNN
//                             <br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN
//                         </p>
//                     </div></p>
//                 </div>
//             </div>
//             <div className='petit-contenant'>
//                 <div className='small-box1'><img className='image-size' src={invader2} alt="imgfond" ></img>
//                     <div className='top-box'></div><p className='contenu'> <div className='text-contenu'>
//                         <p>Clone de space invader<br />WWWWNNNNN
//                             <br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN
//                         </p>
//                     </div></p></div>
//                 <div className='small-box1'><img className='image-size' src={netflix} alt="imgfond" ></img>
//                     <div className='top-box'></div><p className='contenu'> <div className='text-contenu'>
//                         <p>Clone de space invader<br />WWWWNNNNN
//                             <br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN
//                         </p>
//                     </div></p></div>
//                 <div className='small-box1'><img className='image-size' src={booki1} alt="imgfond" ></img>
//                     <div className='top-box'></div><p className='contenu'> <div className='text-contenu'>
//                         <p>Clone de space invader<br />WWWWNNNNN
//                             <br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN
//                         </p>
//                     </div></p></div>
//             </div>
//             <div className='petit-contenant'>
//                 <div className='small-box2'><img className='image-size' src={invader2} alt="imgfond" ></img>
//                     <div className='top-box'></div>
//                     <div className='contenu'>
//                         <div className='text-contenu'>
//                             <p>Clone de space invader<br />WWWWNNNNN
//                                 <br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='small-box2'><img className='image-size' src={netflix} alt="imgfond" ></img>
//                     <div className='top-box'></div><div className='contenu'> <div className='text-contenu'>
//                         <p>Clone de space invader<br />WWWWNNNNN
//                             <br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN
//                         </p>
//                     </div></div></div>
//                 <div className='small-box2'><img className='image-size' src={booki1} alt="imgfond" ></img>
//                     <div className='top-box'></div><div className='contenu'> <div className='text-contenu'>
//                         <p>Clone de space invader<br />WWWWNNNNN
//                             <br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN<br />WWWWNNNNN
//                         </p>
//                     </div></div></div>

//             </div>
//         </div>



//     );
// };

// export default Work1;