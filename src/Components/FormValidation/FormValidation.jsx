import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

import style from './style.module.css';

const FormValidation = ( { type, text } ) => {
    const [ icon, message ] = type === 'success' ? [ faCheck, 'valid'] 
                                                 : [ faTimes, 'invalid'];

    return (
        <div className={classnames(style.defaultWrap, style[type])}>
            <div className={style.notifySquare}>
                <FontAwesomeIcon icon={ icon } />
            </div>
            <p id='montserrat'> {text} is {message} </p>
        </div>
    );
}

export default FormValidation;