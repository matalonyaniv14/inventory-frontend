import { store } from '../index';
import { keysToSnakeCase } from '../Utils/utils';
import { userLoading, userCreated, userError, userInput } from './reducer';

// const { dispatch } = store;
const BASE_PATH = 'http://localhost:3000';

export default async ( user ) => {
    store.dispatch( userLoading(true) );

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify({
            lead: keysToSnakeCase( user )
        })
    }
    try {
        const req  =  await fetch(BASE_PATH + '/leads/create', options);
        const data =  await req.json();
        if ( data ) {
            store.dispatch( userCreated(data) );
        } 
    } catch(e) {
       store.dispatch( userError(e) );
    }
}

export const updateUserField = ( input ) => {
    let { currentTarget: { id, value, type, checked } } = input;
    
      if ( type === 'tel' ) {
        value = value.split(/[^0-9]+/).join('')
      }

      if ( type === 'checkbox' ) {
          value = checked
      }

     store.dispatch(userInput( { [id]: value } ))
}
