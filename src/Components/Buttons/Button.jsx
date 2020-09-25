import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import style from './style.module.css';
import BUTTON_TYPES from './Constants';


const BUTTONS = {
    [BUTTON_TYPES.PROCESSING]: style.buttonProcessing,
    [BUTTON_TYPES.TRANSPARENT]: style.buttonWhiteTransparent,
    [BUTTON_TYPES.WHITE]: style.buttonWhite,
    [BUTTON_TYPES.RED_BORDER]: style.buttonWhiteRedBorder, 
    [BUTTON_TYPES.RED]: style.buttonRed,
    [BUTTON_TYPES.PURPLE]: style.buttonPurple
}


const Button = ( { text, type, loading, block } ) => {
    const [ _type, setType ] = useState(BUTTONS[type]);
    
    const handleClick = _ =>{ 
        console.log(loading)
        loading && setType(BUTTONS[BUTTON_TYPES.PROCESSING])
    }

    useEffect( () => {
        loading ? setType(BUTTONS[BUTTON_TYPES.PROCESSING])
                : setType(BUTTONS[type])
    }, [loading])

    return (
            <div onClick={handleClick} className={classnames(style.defaultWrap,
                                                             _type, { 
                                                            [style.block]: block ,
                                                            [style.loading]: loading
                                                            })}>
                <p id='montserrat' className={style.text}>
                    { loading ? 'Processing' : text }
                </p>
            </div>
    )
}

export default Button;