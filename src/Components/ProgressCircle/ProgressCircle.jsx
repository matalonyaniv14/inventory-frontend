import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import style from './style.module.css';

const cx = classnames;

const ProgressCircle = ({ percent, message }) => {
    const [ percentVal, setPercentVal ] = useState(0)
    const styles = percent === 26 ? style.twentySix : style.thirtySix;

    useEffect( () => {
           if ( percentVal < percent ) {
              let timeout = (2000 / percent);
              window.setTimeout(() => setPercentVal(percentVal + 1), timeout);
           }
        
    },[percentVal])

    return (
        <div className={style.defaultWrap}>
            <div className={style.percentWrap}>
            <div className={style.circular}>
                <div className={style.inner}>
            </div>
            <div className={style.outer}></div>
            <div className={style.numb}>
                <p id='montserrat'>{percentVal}%</p>
            </div>
                <div className={style.circle}>        
                    <div className={cx(style.bar, style.left)}>
                        <div className={cx(style.progress, styles) } ></div>
                    </div>
                    <div className={cx(style.bar,style.right)}>
                        <div className={style.progress}> </div>
                    </div>
                 </div>
            </div>

            </div>
            <div className={style.percentContent}>
                <p id='montserrat'>
                     {message}
                </p>
            </div>
        </div>
    );
}


export default ProgressCircle;