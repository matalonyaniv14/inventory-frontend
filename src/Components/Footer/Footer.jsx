import React from 'react';

import style from './style.module.css';

const Footer = () => {
    return (
        <div className={style.defaultWrap}>
            <div className={style.row} id='montserrat'>
                <ul>
                    <li> <p>Helpful Links </p></li>
                    <li> <p>link link link</p></li>
                    <li> <p>link link link</p></li>
                    <li> <p>link link link</p></li>
                    <li> <p>link link link</p></li>
                </ul>
                <ul>
                    <li> <p>Helpful Links </p></li>
                    <li> <p>link link link</p></li>
                    <li> <p>link link link</p></li>
                    <li> <p>link link link</p></li>
                    <li> <p>link link link</p></li>
                </ul>
                <ul>
                    <li> <p>Helpful Links </p></li>
                    <li> <p>link link link</p></li>
                    <li> <p>link link link</p></li>
                    <li> <p>link link link</p></li>
                    <li> <p>link link link</p></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;