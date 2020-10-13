import React, { useEffect, useRef, useState } from 'react';

const ScrollByRender = ( { children } ) => {
    const [ scrolled, setScrolled ] = useState(false);
    const childRef = useRef(null);


    const handleIntersection = ( e ) => {
        try {
            if ( !scrolled ) {
                e[0].isIntersecting && setScrolled(true);
            }
        } catch {
            setScrolled(true);
        }

    }

    useEffect( () => {
        const intersectionObserverOptions = {
            root: null,
            threshold: 1
        };
        const observer = new IntersectionObserver(
            handleIntersection, 
            intersectionObserverOptions
        );
        const { current: ref } = childRef
        ref && observer.observe( ref );
    }, [])


    return (
        <div ref={childRef}>
           {
               scrolled && children
           }
        </div>
    );
}

export default ScrollByRender;