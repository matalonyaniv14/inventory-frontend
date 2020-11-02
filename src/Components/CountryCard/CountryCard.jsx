import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import { formatID, formatPlurality , regulateIntervalSpeed } from '../../Utils/utils';
import { isMobile, isTablet } from '../../Utils/matchDevice';
import style from './style.module.css';


const CountryCard = ( { country, flag, companyCount } ) => {
    const [ count, setCount ] = useState(0);
    const [ animationRendered, setAnimationRendered ] = useState(false)


    const incrementCount = ( c ) => setCount(count + c);


    useEffect( () => {
       if ( count < companyCount ) {
           const [ c, speed  ] = regulateIntervalSpeed(companyCount - count)
           window.setTimeout( () =>  incrementCount( c ), speed);
       } else {
          window.setTimeout( () => setAnimationRendered(true), 2000 );
       }
    }, [ count ])

    // isMobile()

    if ( isTablet() || isMobile() ) {
        return (
            <div className={classnames( style.tabletWrap, { [style.mobileWrap]: false })} id={style[formatID(country)]}>
                <div className={style.countryFlag}>
                    <img src={flag} alt="country flag"/>
                </div>
                <div className={style.statsWrap}>
                    <div id='raleway' className={style.countryStats}>
                        <p>{count}</p>
                        <p> { formatPlurality('INVENTORY COMPANIES', companyCount) } </p>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className={classnames(style.defaultWrap, {[style.active]: animationRendered})} id={style[formatID(country)]}>
            <div className={style.header}>
                <div className={style.countryName}>
                    <p id='raleway'>{ country }</p>
                </div>
                <div className={style.countryFlag}>
                    <img src={flag} alt="country flag"/>
                </div>
            </div>
            <div className={style.statsWrap}>
                <div id='raleway' className={style.countryStats}>
                    <p>{count}</p>
                    <p> { formatPlurality('INVENTORY COMPANIES', companyCount) } </p>
                </div>
            </div>
        </div>
    );
};



export default CountryCard;