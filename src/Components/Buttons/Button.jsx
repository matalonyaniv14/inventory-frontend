import React from 'react';
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


const Button = ( { text, type, block } ) => {
    const _type = BUTTONS[type];

    return (
            <div className={classnames(style.defaultWrap, _type, { [style.block]: block })}>
                <p  id='montserrat' className={style.text}>
                    { text }
                </p>
            </div>
    )
}

export default Button;