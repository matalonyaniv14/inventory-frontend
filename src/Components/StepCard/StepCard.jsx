import React from 'react';

import style from './style.module.css';


const STEPS = [ 'consultation', 'inventory', 'documentation' ]


const StepCard = ( { id, step, title, content } ) => {
    return (
        <div className={style.stepWrap} id={ style[title.toLowerCase()] }>
            <div className={style.stepHeader} id='montserrat'>
                <div className={style.stepSquare}>
                    <div className={style.squareTitle}>
                        <p>STEP</p>
                    </div>
                   <div className={style.squareNumber}>
                        <p> { step } </p>
                   </div>
                </div>
                <div className={style.stepSubHeader} >
                    <div className={style.bulletPoint}> </div>
                    <p>{ title }</p>
                </div>
            </div>
            <div className={style.stepContent}>
                <p id='raleway'>{ content }</p>
            </div>
        </div>
    );

}

export default StepCard;