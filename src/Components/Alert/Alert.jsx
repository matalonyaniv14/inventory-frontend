import React from 'react';

import style from './style.module.css';
import Text from '../Text/Text';
import types from '../Text/Constants'

const Alert = ( { message, error } ) => {
    return (
        <div className={style.alertWrap}>
            <Text type={types.MEDIUM} white bold >
                { message }
            </Text>
        </div>
    )
}

export default Alert;