import { toSentenceCase } from "./utils";

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const STR_REGEX = /[0-9]/;
// const ISR_PHONE_REGEX = /^((\+972|972)|0)( |-)?([1-468-9]( |-)?\d{7}|(5|7)[0-9]( |-)?\d{7})$/;
const INT_PHONE_REGEX = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/

const formatMessage = ( valid, key ) => {
    const [ type, message ] = valid ?  ['success', 'valid'] : ['error', 'invalid']
    return {
        message: `${toSentenceCase(key)} is ${message}`,
        type,
    }
}

const validText = ( str ) =>  !(STR_REGEX.test( str )) && str.length > 1

const validEmail = ( str ) => EMAIL_REGEX.test( str );

const validDate = ( str ) => +new Date( str ) > +new Date();

const validPropertyAddress = ( str ) => str.length > 1; 

const validContactMe = ( str ) => typeof str === 'boolean' && str.toString() === 'true';

const validNumberofBedrooms = ( str ) => !validText( str ) && parseInt(str, 10) > 0;

const validTelephone = ( str ) =>  !validText( str ) && INT_PHONE_REGEX.test( str );



const validateAll = ( key, str ) => {
    switch ( key ) {
        case 'firstName':
        case 'lastName':
        case 'landlordName':     return validText( str );
        case 'telephoneNumber':  return  validTelephone( str );
        case 'emailAddress':     return  validEmail( str );
        case 'numberOfBedrooms': return validNumberofBedrooms( str );
        case 'propertyAddress':  return  validPropertyAddress( str );
        case 'contactMe':        return validContactMe( str );
        case 'moveInDate':       return validDate( str );
        default: return true;
    }
}

export const validate = ( key, str ) => {
    let valid = validateAll( key, str )
    return { [key]: { valid, ...formatMessage(valid, key) } };
}


