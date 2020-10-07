import React, { useState } from 'react';
import classnames from 'classnames';

import ContactForm from '../../Containers/ContactForm/ContactForm';
import Text from '../Text/Text';
import types from '../Text/Constants';
import style from './style.module.css';

export default () => {
  const [focused, setFocused] = useState(false);

  const handleClick = _ => setFocused(true);


  return (
    <div className={classnames("reviewLeft", {
      [style.formFocused]: focused
    })}>
      <div className="contactFormWrap">
        <div className="contactFormTitle">
          <Text type={types.LARGE} white bold>
            Leave Your Information Below To Get Started
          </Text>
        </div>
        <div className="contactForm">
          <ContactForm handleClick={handleClick} userType='contact' />
        </div>
        <div className="contactFormFooter">
          <Text type={types.SMALL} white bold> Get Started Right Away By Giving Us A Call  </Text>
          <Text type={types.SMALL} white bold> +972 ( 58 ) - 545 - 4060 </Text>
        </div>
      </div>
    </div>
  );
}