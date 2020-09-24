import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Form from '../../Components/Form/Form';
import Input from '../../Components/Input/Input';
import style from './style.module.css';
import Button from '../../Components/Buttons/Button';
import BUTTON_TYPES from '../../Components/Buttons/Constants';

const mapStateToProps = ( state ) => ( { ...state } )

const mapDispatchToProps = ( dispatch ) => ({
  updateUserField: ( userInput ) => {
      const { currentTarget: { id, value } } = userInput;
     dispatch( { type: 'user/input', payload: { [id]: value } } )
  },
  createUser: ( user ) => {
      dispatch( { type: 'user/new', payload: {...user} } )
  }
});





const QouteForm = ( props ) => {
    const {
        errors,
        updateUserField, 
        createUser,
        firstName,
        lastName,
        telephoneNumber,
        emailAddress,
        numberOfBedrooms,
        tenantName,
        propertyAddress,
        moveInDate,
        movingCompanyNeeded,
        contactMe
    } = props;


    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log(props);
        createUser(props);
    }


    return (
        <div>
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
                        <Input value={tenantName} 
                               placeholder={'Tenant Name'} 
                               name={'tenantName'} 
                               onChange={updateUserField} 
                        />
                    </div>
                    <Input value={propertyAddress} 
                           placeholder={'Property Address'} 
                           name={'propertyAddress'} 
                           onChange={updateUserField} 
                           block
                    />
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
                                    text='Submit'
                            />
                            <input type="submit" 
                                   id='submit' 
                                   style={{display: 'none'}}
                            />
                        </label>
                    </div>
                </Form>
            </div>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(QouteForm);
