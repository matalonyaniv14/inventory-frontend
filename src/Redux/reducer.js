import { validate } from "../Utils/formValidation";

const USER_INPUT = 'user/input';
const ADD_USER = 'user/new'


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
        errors: {}
}




const reducer = ( state = defaultState, action ) => {
    console.log( 'in reducer', state, action );
    switch ( action.type ) {
        case ADD_USER: {
            return {
                ...state,
                user: action.payload,
                added: true,
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