import React from 'react';
import classnames from 'classnames';

import { formatRowStyle } from '../../Utils/utils';
import style from './style.module.css';


const ResponsiveList = ( { items = [], rows, render, children, large } ) => {
    const rowCountStyle = rows ? { gridTemplateColumns: formatRowStyle(rows) } : {};

    return (
        <div className={classnames(style.faqWrapResponsive, style.large)} style={ rowCountStyle }>
            {  
                typeof render === 'function' 
                      ? items.map( ( item, k ) => render( item, k ) )
                      : children
            }
        </div>
    );
}

export default ResponsiveList;