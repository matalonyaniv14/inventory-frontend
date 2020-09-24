import React, { useState } from 'react';

import Button from '../Buttons/Button';
import BUTTON_TYPES from '../Buttons/Constants';
import style from './style.module.css';


const { PURPLE } = BUTTON_TYPES;

const Modal = ( { initiatorText = 'View All', exitText = 'View Less', title, children } ) => {
    const [ active, setActive ] = useState(false);

    const handleClick = _  => setActive(!active); 

    if ( !active ) {
        return (
            <div onClick={handleClick} >
                <Button text={initiatorText} type={PURPLE} block />
            </div>
        );
    }


    return (
        <div className={style.defaultWrap}>
            <div className={style.shadowOverlay}></div>
            <div className={style.modalContent}>
                <div className={style.modalHeader}>
                    <div className={style.headerText}>
                        <p id='montserrat'> { title }</p>
                    </div>
                    <div  onClick={handleClick} className={style.headerAction}>
                        <Button text={ exitText } type={PURPLE} />
                    </div>
                </div>
                <div className={style.contentMain}>
                    { children }
                </div>
            </div>
        </div>
    );
}

export default Modal;