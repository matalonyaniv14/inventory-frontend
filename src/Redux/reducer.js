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
        loading: false,
        networkError: false
}


// actions 
export const userInput   = ( input )   => ( { type: USER_INPUT, payload: input } )
export const userLoading = ( loading ) => ( { type: USER_LOADING, payload: { loading } } );
export const userCreated = ( user )    => ( { type: ADD_USER, payload: { ...user, loading: false } } );
export const userError   = ( error )   => ( { type: USER_ERROR, payload: { networkError: true, loading: false }  } );

// selectors 
export const qouteSelector =   ( state ) => state.qoute;
export const contactSelector = ( state ) => state.contact;


// reducer
const reducer = ( state = defaultState, action ) => {
    console.log(state, action);
    switch ( action.type ) {
        case USER_LOADING:
        case ADD_USER: {
            return {
                ...state,
                ...action.payload,
                errors: { ...state['errors'] , ...action['payload']['errors']}
            }
        }
        case USER_ERROR: {
            return {
                ...state,
                networkError: {...action.payload }
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