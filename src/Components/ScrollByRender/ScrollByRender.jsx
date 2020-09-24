import React, { useEffect, useRef, useState } from 'react';


const ScrollByRender = ( { children, startOn=0.10 } ) => {
    const [ scrolled, setScrolled ] = useState(false);
    const childRef = useRef(null);



    const handleScroll = (e) => {
        const { top,  bottom, height } = childRef.current.getBoundingClientRect();
        const startScrollOn = (startOn * height);
        // console.log(top, height, bottom);
        if ( top <= startScrollOn ) {
            setScrolled(true);
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);


        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    return (
        <div ref={childRef} style={{height: '500px', border: `5px solid ${ scrolled ? 'red' : '' }`}}>
           { scrolled ? <p>ELEMENT HAS BEEN RENDERED</p> : <p>ELEMENT HAS NOT BEEN RENDERED</p> }
        </div>
    );
}

export default ScrollByRender;