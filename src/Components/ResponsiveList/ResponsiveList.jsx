import React from 'react';

import { formatRowStyle } from '../../Utils/utils';
import style from './style.module.css';


const ResponsiveList = ( { items = [], rows, render, children } ) => {
    const rowCountStyle = rows ? { gridTemplateColumns: formatRowStyle(rows) } : {};

    return (
        <div className={style.faqWrapResponsive} style={ rowCountStyle }>
            {  
                typeof render === 'function' 
                      ? items.map( ( item, k ) => render( item, k ) )
                      : children
            }
        </div>
    );
}

export default ResponsiveList;