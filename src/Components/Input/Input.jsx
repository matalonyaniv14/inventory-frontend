import React from 'react';
import classnames from 'classnames';

import style from './style.module.css';
import { toCamelCase } from '../../Utils/utils';

const Input = ( { type = 'text', value, placeholder, name, onChange, inline, block,  ...rest} ) => {

    const styles = [
        style.defaultWrap,
        {
            [style.block]: block, 
            [style.inline]: inline
        }
    ]

    return (
        <div className={classnames(styles)}>
            <label id='montserrat'  htmlFor={name}> 
                <p> { placeholder } </p>
            </label>
            <input id={name}
                   name={name}
                   type={type} 
                   value={value} 
                   onChange={onChange} 
                   min={0}
                   style={{fontSize: "16px !important"}}
                   {...rest}
            />
        </div>
    );
}

export default Input;