import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import AlgoliaPlaces from 'algolia-places-react';


import Form from '../../Components/Form/Form';
import Input from '../../Components/Input/Input';
import style from './style.module.css';
import Button from '../../Components/Buttons/Button';
import NotificationCard from '../../Components/NotificationCard/NotificationCard';
import BUTTON_TYPES from '../../Components/Buttons/Constants';
import createUser, { updateUserField } from '../../Redux/createUser';
import { qouteSelector } from '../../Redux/reducer';


const mapStateToProps = ( state ) => ( { ...state } )

const mapDispatchToProps = ( dispatch ) => ({
  updateUserField,
  createUser,
});



const QouteForm = ( props ) => {
    const {
        networkError,
        errors,
        status,
        loading, 
        updateUserField, 
        createUser,
        firstName,
        lastName,
        telephoneNumber,
        emailAddress,
        numberOfBedrooms,
        landlordName,
        propertyAddress,
        moveInDate,
        movingCompanyNeeded,
        contactMe
    } = props;


    const handleSubmit = ( e ) => {
        e.preventDefault();
        createUser({ ...props, clientType: 'qoute'});
    }

    if ( networkError ) {
        return <h1>ERROR</h1>
    }

    return (
        status === 200 ? <NotificationCard />
                       : 
            <div className={style.defaultWrap}>
                <Form callback={handleSubmit} errors={errors} > 
                    <div className={style.row}>
                        <Input value={firstName} 
                                placeholder={'First Name'} 
                                name={'firstName'} 
                                onChange={updateUserField} 
                        />
                        <Input value={lastName} 
                                placeholder={'Last Name'} 
                                name={'lastName'} 
                                onChange={updateUserField} 
                        />
                    </div>
                    <div className={style.row}>
                        <Input type='tel'
                                value={telephoneNumber} 
                                placeholder={'Telephone Number'}
                                name={'telephoneNumber'} 
                                onChange={updateUserField} 
                        />
                        <Input value={emailAddress} 
                                placeholder={'Email Address'} 
                                name={'emailAddress'} 
                                onChange={updateUserField} 
                        />
                    </div>
                    <div className={style.row}>
                        <Input type='number' 
                                value={numberOfBedrooms} 
                                placeholder={'Number of Bedrooms'} 
                                name={'numberOfBedrooms'} 
                                onChange={updateUserField}
                        />
                        <Input value={landlordName} 
                                placeholder={'Landlord Name'} 
                                name={'landlordName'} 
                                onChange={updateUserField} 
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
                                            }
                                        }
                                    )
                                }
                            }
                            onSuggestions={({ query }) => 
                                ( updateUserField({
                                        currentTarget: {
                                            id: 'propertyAddress',
                                            value: query
                                            }
                                        }
                                    ) 
                                )
                            } 
                        />
                    </div>
        
                    <Input type='date' 
                            value={moveInDate} 
                            placeholder={'Move In date'} 
                            name={'moveInDate'} 
                            onChange={updateUserField} 
                            block 
                    />
                    <Input  type='checkbox' 
                            value={movingCompanyNeeded}
                            name={'movingCompanyNeeded'}
                            placeholder={'I’m in need of a moving company'} 
                            onChange={updateUserField} 
                            inline 
                            block 
                    />
                    <Input  type='checkbox' 
                            value={contactMe}
                            name={'contactMe'}
                            placeholder={'I agree to be contacted for a Tenant Inventory'} 
                            onChange={updateUserField} 
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


export default connect(mapStateToProps, mapDispatchToProps)(QouteForm);
