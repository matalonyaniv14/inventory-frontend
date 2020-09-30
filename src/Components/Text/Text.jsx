import React from 'react';
import classnames from 'classnames';


import sizes from './Constants';
import style from './style.module.css';

const cx = classnames;

const TYPES = {
    [sizes.XSMALL]: style.xSmall,
    [sizes.SMALL]: style.small,
    [sizes.MEDIUM]: style.medium,
    [sizes.LARGE]: style.large,
    [sizes.XLARGE]: style.xLarge
}

const Text = ( { children, type, black, white, grey, bold, ...rest } ) => {
    return (
        <div
            {...rest}
            className={cx(TYPES[type], {
            [style.black]: black,
            [style.grey]: grey,
            [style.white]: white,
            [style.bold]: bold
        })}>
            <p id='montserrat'>{children}</p>
        </div>
    );
}
export default Text;