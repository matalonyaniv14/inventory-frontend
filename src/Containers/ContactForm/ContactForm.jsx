import React, { useState } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import AlgoliaPlaces from 'algolia-places-react';


import Form from '../../Components/Form/Form';
import Input from '../../Components/Input/Input';
import Alert from '../../Components/Alert/Alert';
import style from './style.module.css';
import Button from '../../Components/Buttons/Button';
import NotificationCard from '../../Components/NotificationCard/NotificationCard';
import BUTTON_TYPES from '../../Components/Buttons/Constants';
import createUser, { updateUserField } from '../../Redux/createUser';
import { qouteSelector } from '../../Redux/qouteReducer';
import { store } from '../../index';

const mapStateToProps = ( state ) => ( { ...state.contact } )

const mapDispatchToProps = ( dispatch ) => ({
  updateUserField,
  createUser,
});



const ContactForm = ( props ) => {
    const {
        userType,
        networkError,
        errors,
        status,
        loading, 
        handleClick,
        updateUserField, 
        createUser,
        firstName,
        lastName,
        telephoneNumber,
        emailAddress,
        propertyAddress,
        movingCompanyNeeded,
        contactMe
    } = props;


    const handleSubmit = ( e ) => {
        e.preventDefault();
        createUser({ ...props},userType);
    }

  

    if ( handleClick && Object.keys(errors).length > 0 ) handleClick();

    return (
        status === 200 ? <NotificationCard userType={userType} />
                       : 
            <div className={classnames(style.defaultWrap)} >
              {  networkError && <Alert message='An error has occurred . . . Make sure you have a valid internet connection and try again.' />}
                <Form callback={(e) => handleSubmit(e, userType)} errors={errors} userType={userType}> 
                    <div className={style.row}>
                        <Input  required
                                value={firstName} 
                                placeholder={'First Name'} 
                                name={'firstName'} 
                                onChange={(e) => updateUserField(e, userType)} 
                        />
                        <Input  required
                                value={lastName} 
                                placeholder={'Last Name'} 
                                name={'lastName'} 
                                onChange={(e) => updateUserField(e, userType)} 
                        />
                    </div>
                    <div className={style.row}>
                        <Input 
                                required
                                type='tel'
                                value={telephoneNumber} 
                                placeholder={'Telephone Number'}
                                name={'telephoneNumber'} 
                                onChange={(e) => updateUserField(e, userType)} 
                        />
                        <Input  required
                                value={emailAddress} 
                                placeholder={'Email Address'} 
                                name={'emailAddress'} 
                                onChange={(e) => updateUserField(e, userType)} 
                        />
                    </div>
                    <div id='algolia-wrap'>
                        <label id='montserrat' htmlFor={'propertyAddress'}> 
                            <p> Property Address </p>
                        </label>
                        <AlgoliaPlaces
                            id='propertyAddress'
                            options={{
                                appId: 'plX599H8JSHS',
                                apiKey: '530099727c2199d8f2ce4eb1bdd8b6b2',
                                type: 'address',
                            }}  
                            onChange={({ suggestion }) => {
                                    updateUserField({
                                        currentTarget: {
                                            id: 'propertyAddress',
                                            value: suggestion.value
                                        },
                                    },
                                    userType
                                    )
                                }
                            }
                            onSuggestions={({ query }) => 
                                updateUserField({
                                    currentTarget: {
                                        id: 'propertyAddress',
                                        value: query
                                        },
                                    },
                                    userType
                                ) 
                            } 
                        />
                    </div>
                    <Input  type='checkbox' 
                            value={movingCompanyNeeded}
                            name={'movingCompanyNeeded'}
                            placeholder={'I’m in need of a moving company'} 
                            onChange={(e) => updateUserField(e, userType)} 
                            inline 
                            block 
                    />
                    <Input  required
                            type='checkbox' 
                            value={contactMe}
                            name={'contactMe'}
                            placeholder={'I agree to be contacted for a Tenant Inventory'} 
                            onChange={(e) => updateUserField(e, userType)} 
                            inline 
                            block 
                    />
                    <div className={style.submit}>
                        <label htmlFor="submit">
                            <Button type={BUTTON_TYPES.RED} 
                                    text={ 'Submit' }
                                    loading={loading}
                            />
                            <input type="submit" 
                                    id='submit' 
                                    style={{display: 'none'}}
                            />
                        </label>
                    </div>
                </Form>
            </div> 
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
