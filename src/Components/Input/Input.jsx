import React from 'react';
import classnames from 'classnames';

import style from './style.module.css';
import { toCamelCase } from '../../Utils/utils';

const Input = ( { type = 'text', value, placeholder, name, onChange, inline, block} ) => {
    return (
        <div className={classnames(style.defaultWrap, { [style.block]: block,
                                                        [style.inline]: inline})}>
            <label id='montserrat'  htmlFor={name}> 
                <p> { placeholder } </p>
            </label>
            <input id={name}
                   name={name}
                   type={type} 
                   value={value} 
                   onChange={onChange}
            />
        </div>
    );
}

export default Input;