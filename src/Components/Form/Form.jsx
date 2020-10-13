import React from 'react';
import classnames from 'classnames';


import Input from '../Input/Input';
import style from './style.module.css';
import Button from '../Buttons/Button';
import BUTTON_TYPES from '../Buttons/Constants';
import FormValidation from '../../Components/FormValidation/FormValidation';
import { take, toSentenceCase } from '../../Utils/utils';
import { useEffect } from 'react';
import { isMobile, isTablet } from '../../Utils/matchDevice';


const Form = ( { children, errors, callback, userType } ) => {
    useEffect( () => {
        Object.keys(errors)
            .forEach( ( error ) => {
                const elem = take(`input[name="${error}"]`);
                if ( elem ) {
                    if ( !errors[error].valid ) {
                        elem.classList.add( style.inputError );
                    } else {
                        elem.classList.remove( style.inputError );
                    }
                }
            }
        )
    }, [errors])

    return (
        <div className={classnames(style.defaultWrap, {[style.formContact]: userType === 'contact'})}>
            <div className={style.formContent}>
                <div className={classnames(style.formContainer, 'container')}>
                    <div className={classnames(style.formWrap)}>
                        <form onSubmit={callback}>
                            {children}
                        </form>
                    </div>
                    { !isTablet() && !isMobile() && (
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
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Form;