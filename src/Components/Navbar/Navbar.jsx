import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import style from './style.module.css';
import Button from '../Buttons/Button';
import BUTTON_TYPES from '../Buttons/Constants';
import QouteForm from '../../Containers/QouteForm/QouteForm';
import ResponsiveList from '../ResponsiveList/ResponsiveList';
import Faq from '../Faq/Faq';
import Modal from '../Modal/Modal';
import {q} from '../../App';
import useScrollRender from '../../Utils/hooks';

const OptionCard = ( { text, focused, anchor, ...rest } ) => (
        <div 
            onClick={() => ( window.location.href = anchor )} 
            {...rest} 
            className={classnames( style.optionCard,{ [style.focused]: focused } )}
            >
            <p id='montserrat'> {text} </p>
        </div>
)


// NAVBAR
const Navbar = ( props ) => {
    const [ active, setActive ] = useState({
        toggle: false,
        qoute: false
    })
    const breakpoints = [
        '#bigDealAnchor', 
        '#hdtwAnchor', 
        '#wwmriAnchor', 
        '#countriesAnchor'
    ];
    const scrolled = useScrollRender(breakpoints);

    const shouldFocus = ( id ) => id === scrolled;

    const handleClick = ( e ) => {
        const { currentTarget: { id } } = e;

        if ( id )  setActive(  { [id]: !active[id] } );
    }    


    const { toggle, qoute } = active
    const styles = [
        style.defaultWrap,
        {
            [style.expandedWrap]: toggle,
            [style.expandedWrapQoute]: qoute,
        }
    ]

    return (
            <div className={classnames(styles)}>
                <div style={{position: 'relative', height: '100%'}}>
                    <div onClick={handleClick} className={style.navToggle} id='toggle'></div>
                    
                    {  qoute && <QouteForm userType={'qoute'} />  }

                    {
                        toggle && (
                            <div className={style.options}>
                            <div className={style.contactInfo}> 
                                <p id='montserrat'>+972 ( 58 ) - 545 - 4060</p> 
                            </div>
                            <div className={classnames(style.ctaButtons, style.flexColumn)}>
                                <div onClick={handleClick} id='qoute' className={style.qoute}>
                                        <Button text='Get A Qoute' type={BUTTON_TYPES.TRANSPARENT}/>
                                </div>
                                <Modal 
                                    initiatorText={"FAQ"} 
                                    title={"Frequently Asked Questions"}
                                    buttonType={BUTTON_TYPES.TRANSPARENT}
                                    >
                                    <ResponsiveList  
                                        rows={2} 
                                        items={q} 
                                        render={ (data, key) => <Faq key={key} {...data}/> } 
                                    />
                                </Modal>
                            </div>
                            <div className={style.seperatorCircle}></div>
                            <div className={classnames(style.flexColumn, style.breadcrumbs)}>
                                <OptionCard id={style.big} anchor={'#bigDealAnchor'} text='Whats The Big Deal?' focused={'bigDealAnchor' === scrolled}/>
                                <OptionCard id={style.work} anchor={'#hdtwAnchor'} text='How Does This Work?' focused={'hdtwAnchor' === scrolled}/>
                                <OptionCard id={style.report} anchor={'#wwmriAnchor'} text='What Will My Report Incude?' focused={'wwmriAnchor' === scrolled}/>
                                <OptionCard id={style.heard} anchor={'#countriesAnchor'} text='Why Haven’t I Heard About This Before?' focused={'countriesAnchor' === scrolled}/>
                            </div>
                        </div>  
                        )
                    }
                </div>
            </div>
        );
    

}

export default Navbar;
