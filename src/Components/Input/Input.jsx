import React from 'react';
import classnames from 'classnames';

import style from './style.module.css';
import { toCamelCase } from '../../Utils/utils';

const Input = ( { type = 'text', value, placeholder, name, onChange, inline, block, autocomplete} ) => {
    return (
        <div className={classnames(style.defaultWrap, { [style.block]: block, [style.inline]: inline})}>
            <label id='montserrat'  htmlFor={name}> 
                <p> { placeholder } </p>
            </label>
            <input id={name}
                   name={name}
                   type={type} 
                   value={value} 
                   onChange={onChange} 
                   autoComplete={autocomplete}
                   min={0}
            />
        </div>
    );
}

export default Input;