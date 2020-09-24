import React from 'react';
import classnames from 'classnames';

import style from './style.module.css';

const Review = ( { author, content, left } ) => {

    return (
        <div className={style.defaultWrap}>
            <div className={style.content}>
                <p id='montserrat'> {content} </p>
            </div>
            <div className={classnames( style.author, { [style.left]: left } )}>
                <p id='montserrat'> -{author} </p>
            </div>
        </div>
    );

}

export default Review;