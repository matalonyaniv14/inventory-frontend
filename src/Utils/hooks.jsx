import React, { useEffect, useState } from 'react';

const useScrollRender = () => {
    const [ scrolled, setScrolled ] = useState(false);


    const checkScrolled = ( ref, scrollOn = 0.25 , callback) => {
        const { height, top } = ref.getBoundingClientRect();
        const scrollPercentage = -( height * scrollOn );

        if ( top <= scrollPercentage ) {
            setScrolled( true );
            callback();
        }

    }

    return [ scrolled, checkScrolled  ];
}

export default useScrollRender;