import { validate } from "../Utils/formValidation";

const USER_INPUT   = 'user/input';
const ADD_USER     = 'user/new';
const USER_LOADING = 'user/loading';
const USER_ERROR   = 'user/error';


const defaultState = {   
        firstName: '',
        lastName: '',
        telephoneNumber: '',
        emailAddress: '',
        numberOfBedrooms: '',
        landlordName: '',
        propertyAddress: '',
        moveInDate: '',
        movingCompanyNeeded: false,
        contactMe: false,
        errors: {},
        status: null,
        loading: false
}




const reducer = ( state = defaultState, action ) => {
    console.log( 'in reducer', state, action );
    switch ( action.type ) {
        case ADD_USER: {
            return {
                ...state,
                ...action.payload,
                errors: { ...state['errors'] , ...action['payload']['errors']}
            }
        }
        case USER_LOADING: {
            return {
                ...state,
                ...action.payload,
                errors: { ...state['errors'] , ...action['payload']['errors']},
            }
        }

        case USER_ERROR: {
            return {
                ...state,
                errors: {...action.payload }
            }
        }

        case USER_INPUT: {
            const [ [ key, value ] ] = Object.entries(action.payload);
            return {
                ...state,
                ...action.payload,
                errors: { ...state['errors'], ...validate( key, value )}
            }
        }
        
        default: return state;
    }
}

export default reducer;