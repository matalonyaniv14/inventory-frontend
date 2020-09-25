import React, { useState } from 'react';
import classnames from 'classnames';

import style from './style.module.css';
import Button from '../Buttons/Button';
import BUTTON_TYPES from '../Buttons/Constants';
import QouteForm from '../../Containers/QouteForm/QouteForm';

const OptionCard = ( { text, focused } ) => (
        <div className={classnames( style.optionCard,{ [style.focused]: focused } )}>
            <p id='montserrat'> {text} </p>
        </div>
)



const ToggledNav = ({ callback }) =>  (
    <div className={style.options}>
        <div className={style.contactInfo}> 
            <p id='montserrat'>+972 ( 58 ) - 545 - 4060</p> 
        </div>
        <div className={classnames(style.ctaButtons, style.flexColumn)}>
        <div onClick={callback} id='qoute'>
                <Button text='Get A Qoute' type={BUTTON_TYPES.TRANSPARENT}/>
        </div>
            <Button text='FAQ' type={BUTTON_TYPES.TRANSPARENT}/>
        </div>
        <div className={style.seperatorCircle}></div>
        <div className={classnames(style.flexColumn, style.breadcrumbs)}>
            <OptionCard text='Whats The Big Deal?' focused/>
            <OptionCard text='How Does This Work?' />
            <div onClick={callback} id='report' >
                <OptionCard text='What Will My Report Incude?' />
            </div>
            <OptionCard text='Why Haven’t I Heard About This Before?' />
        </div>
    </div>  
);


const ReportNav = () =>  (
    <h1>REPORT</h1>
);

const QouteNav = () => (
    <h1>QOUTE</h1>
);



// NAVBAR
const Navbar = ( props ) => {
    const [ active, setActive ] = useState({
        toggle: false,
        report: false,
        qoute: false
    })

    const handleClick = ( e ) => {
        const { currentTarget: { id } } = e;

        if ( id )  setActive(  { [id]: !active[id] } );
    }


    
    const { toggle, qoute, report } = active

    return (
            <div className={classnames(style.defaultWrap, {
                                       [style.expandedWrap]: toggle,
                                       [style.expandedWrapQoute]: qoute,
                                       [style.expandedWrapReport]: report
            })}>
                <div style={{position: 'relative', height: '100%'}}>
                    <div onClick={handleClick} className={style.navToggle} id='toggle'></div>

                    {   toggle &&   <ToggledNav callback={handleClick} /> }

                    {  report && <QouteForm />  }

                    {  qoute && <QouteForm />  
                    }
                </div>
            </div>
        );
    

}

export default Navbar;
