import React from 'react';
import './newwork.css'

import tablette from '../images/tablette.jpeg'
import mur from '../images/mur.jpg'


const NewWork = () => {
    return (
        <div>
            <div className='work-container'>
                <div className='small-container'>
                    <div className='top1'><img className='' src={tablette} alt="imgfond" ></img>
                        <div className='top3'><img className='img-mur' src={mur} alt="imgfond" ></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default NewWork;
// import React from 'react';
// import './newwork.css'

// import tablette from '../images/tablette.jpeg'


// const NewWork = () => {
//     return (
//         <div>
//             <div className='work-container'>
//                 <div className='small-container'>
//                     <div className='top1'><img className='img-top' src={tablette} alt="imgfond" ></img>
//                         <div className='top3'><img className='img-top' src={tablette} alt="imgfond" ></img>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>

//     );
// };

// export default NewWork;