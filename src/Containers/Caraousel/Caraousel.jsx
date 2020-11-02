import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'


import style from './style.module.css';
import StepCard from '../../Components/StepCard/StepCard';

const cx = classnames;

const Components = {
    'StepCard': StepCard,
}

//  <FontAwesomeIcon icon={faChevronCircleLeft} />
//  <FontAwesomeIcon icon={faChevronCircleRight} />

const Carousel = ({ children, component }) => {
    const Component = Components[component];
    const [itemIndex, setItemIndex] = useState(0);
    const { props: { items } } = children;

    const MIN_INDEX = 0
    const MAX_INDEX = items.length - 1;

    const handleClick = (direction) => {
        let newState = itemIndex + (direction);

        if (newState > MAX_INDEX ||
            newState < MIN_INDEX) return;

        setItemIndex(newState)
    }


    return (
        <div style={{ margin: '0px 20%' }}>
            <div className={style.defaultWrap}>
                {<Component {...items[itemIndex]} />}
            </div>

            <div className={style.navWrap}>
                <div onClick={() => handleClick(-1)}
                    className={cx({ [style.disable]: itemIndex === MIN_INDEX })}
                >
                    <FontAwesomeIcon icon={faChevronCircleLeft} />

                </div>
                <div className={style.navigationCircles} >
                    {
                        items.map((_, i) => (
                            <div key={i} className={cx(style.circle, { [style.active]: i === itemIndex })}>
                            </div>
                        ))
                    }
                </div>
                <div onClick={() => handleClick(1)}
                    className={cx({ [style.disable]: itemIndex === MAX_INDEX })}
                >
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                </div>
            </div>
        </div>
    )
}

export default Carousel