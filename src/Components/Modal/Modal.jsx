import React, { useState } from 'react';
import { useEffect } from 'react';
import { take } from '../../Utils/utils';

import Button from '../Buttons/Button';
import BUTTON_TYPES from '../Buttons/Constants';
import style from './style.module.css';


const { PURPLE } = BUTTON_TYPES;

const Modal = ( { initiatorText = 'View All', exitText = 'View Less', buttonType=PURPLE, title, children } ) => {
    const [ active, setActive ] = useState(false);

    const handleClick = _  => setActive(!active); 


    useEffect( () => {
        const body = take('body');
        if ( body ) {
            body.style.overflow = active ? 'hidden' : ''
        }

        return () => body.style.overflow = '';
    }, [ active ])


    
    if ( !active ) {
        return (
            <div onClick={handleClick} >
                <Button text={initiatorText} type={buttonType} block />
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
// 

export default Modal;