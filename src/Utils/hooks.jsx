import React, { useEffect, useState } from 'react';

import { take } from '../Utils/utils';

const useScrollRender = ( anchors ) => {
    const [ scrolled, setScrolled ] = useState(false);
    

    const handleIntersection = ( e ) => {
        const {
            target: { id },  
            isIntersecting
        } = e[0];

        if ( isIntersecting ) {
            setScrolled(id);
        }
    }

    useEffect( () => {
        anchors.forEach( ( e ) => {
            const intersectionObserverOptions = {
                root: null,
                threshold: 1
            };
            const observer = new IntersectionObserver(
                handleIntersection, 
                intersectionObserverOptions
            );

            observer.observe(take(e));
        } )
    }, [] )

    return scrolled;

}

export default useScrollRender;