const EMAIL_REGEX = /\S+@\S+\.\S+/;
const STR_REGEX = /[0-9]/;


const validText = ( str ) =>  !(STR_REGEX.test( str ))

const validEmail = ( str ) => EMAIL_REGEX.test( str );

const validTelephone = ( str ) => {
    const size = str.split(/\s*/).join('').length

    return !validText( str ) && size >= 10 && size <= 14;
}


export const validate = ( key, str ) => {
    switch ( key ) {
        case 'firstName':
        case 'lastName':
        case 'tenantName': {
            return { [key]: validText( str )  };
        }
        case 'telephoneNumber': {
            return { [key]: validTelephone( str ) };
        }
        case 'emailAddress': {
            return { [key]: validEmail( str ) };
        }
        case 'numberOfBedrooms': {
            return { [key]: !validText( str ) }
        }
    }
}

