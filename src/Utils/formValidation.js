import { toSentenceCase } from "./utils";

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const STR_REGEX = /[0-9]/;
const ISR_PHONE_REGEX = /^((\+972|972)|0)( |-)?([1-468-9]( |-)?\d{7}|(5|7)[0-9]( |-)?\d{7})$/;


const formatMessage = ( valid, key ) => {
    const [ type, message ] = valid ?  ['success', 'valid'] : ['error', 'invalid']
    return {
        message: `${toSentenceCase(key)} is ${message}`,
        type,
    }
}

const validText = ( str ) =>  !(STR_REGEX.test( str ))

const validEmail = ( str ) => EMAIL_REGEX.test( str );

const validDate = ( str ) => +new Date( str ) > +new Date();

const validTelephone = ( str ) => {
    return !validText( str ) && ISR_PHONE_REGEX.test( str );
}


export const validate = ( key, str ) => {
    switch ( key ) {
        case 'firstName':
        case 'lastName':
        case 'landlordName': {
            let valid = validText( str );
            return { [key]: { valid, ...formatMessage(valid, key) } };
        }
        case 'telephoneNumber': {
            let valid =  validTelephone( str );
            return { [key]: { valid, ...formatMessage(valid, key) }};
        }
        case 'emailAddress': {
            let valid = validEmail( str );
            return { [key]: { valid, ...formatMessage(valid, key) } };
        }
        case 'numberOfBedrooms': {
            let valid = !validText( str ) && parseInt(str, 10) > 0;
            return { [key]: { valid, ...formatMessage(valid, key) } }
        }
        case 'propertyAddress': {
            let valid = str.length > 0;
            return { [key]: { valid, ...formatMessage(valid, key) } }
        }
        case 'contactMe': {
            let valid = typeof str === 'boolean' && str.toString() === 'true';
            return { [key]: { valid, ...formatMessage(valid, key) } }
        }
        case 'moveInDate': {
            let valid = validDate( str );
            return { [key]: { valid, ...formatMessage(valid, key) } }

        }
    }
}


