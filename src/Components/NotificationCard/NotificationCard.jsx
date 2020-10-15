import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';

import style from './style.module.css';

const NotificationCard = ( { userType } ) => {
    return (
        <div className={classnames(style.wrap, {[style.contact]: userType === 'contact'})}>
         { userType !== 'contact' && (<div className={style.header}>
                <p id='montserrat'> Great! Thanks For Submitting Your Details.</p>
            </div>)}
            <div className={style.defaultWrap}>
                <div className={style.redBorder}>
                    <p id='montserrat'> You'll receive details to the email you entered shortly. </p>
                </div>
                <div className={style.mainContent}>
                    <p id='montserrat'>
                        Your assigned Inventory Agent will contact you
                        to confirm your information before arrival.
                    </p>
                    <p id='montserrat'>
                        For any questions, please call
                    </p>
                    <p id='montserrat'>
                        +972 (58) - 545 - 4060
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotificationCard;