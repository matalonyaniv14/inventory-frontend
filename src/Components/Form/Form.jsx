import React from 'react';
import classnames from 'classnames';


import Input from '../Input/Input';
import style from './style.module.css';
import Button from '../Buttons/Button';
import BUTTON_TYPES from '../Buttons/Constants';
import FormValidation from '../../Components/FormValidation/FormValidation';
import { toSentenceCase } from '../../Utils/utils';


const Form = ( { children, errors, callback, userType } ) => {
    return (
        <div className={classnames(style.defaultWrap, {[style.formContact]: userType === 'contact'})}>
            <div className={style.formContent}>
                <div className={classnames(style.formContainer, 'container')}>
                    <div className={classnames(style.formWrap)}>
                        <form onSubmit={callback}>
                            {children}
                        </form>
                    </div>
                    {
                        Object.keys(errors).length > 0 &&
                        <div className={style.errorContainer}>
                            <div className={style.errorWrap}>
                                {
                                    Object.keys(errors).map((error, k) => {
                                        return <FormValidation
                                            key={k}
                                            type={errors[error]['type']}
                                            text={toSentenceCase(errors[error]['message'])}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Form;