import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

import style from './style.module.css';

const FormValidation = ( { type, text } ) => {
    const icon = type === 'success' ? faCheck : faTimes;

    return (
        <div className={classnames(style.defaultWrap, style[type])}>
            <div className={style.notifySquare}>
                <FontAwesomeIcon icon={ icon } />
            </div>
            <p className={style.mainText} id='montserrat'> {text} </p>
        </div>
    );
}

export default FormValidation;