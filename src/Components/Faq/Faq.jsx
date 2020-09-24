import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import style from './style.module.css';


const Faq = ( props ) => {
    const [ answerShown, setAnswerShown ] = useState(false);
    const [ content, setContent ] = useState({_style: '', text: ''});
  
  
    const handleClick = () => setAnswerShown(!answerShown)

    useEffect( () => {
        let current = answerShown ? 'answer' : 'question';
        let _content = {
            _style: style[current],
            text: props[current]
        }
       setContent( _content );
    }, [answerShown])

    return (
        <div className={classnames( style.defaultWrap, content._style )} id='raleway'>
            <p> { content.text } </p>
            <div onClick={handleClick} className={style.questionMarkSquare} >
                <p>?</p>
            </div>
        </div>
    )
}


export default Faq;