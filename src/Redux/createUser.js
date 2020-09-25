import {store} from '../index';
import {toSnakeCase} from '../Utils/utils';

const BASE_PATH = 'http://localhost:3000';

const createUser = async ( user ) => {
    store.dispatch({
        type: 'user/loading',
        payload: {
            loading: true
        }
    })
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify({
            lead: Object.keys(user).reduce( ( acc, c ) => {
                acc[toSnakeCase(c)] = user[c]
                return acc;
            }, {})
        })
    }
    try {
        const req  =  await fetch(BASE_PATH + '/leads/create', options);
        const data =  await req.json();
        if ( data ) {
            store.dispatch( {
                type: 'user/new',
                payload: {...data, loading: false}
            } );
        } 
    } catch(e) {
        store.dispatch({
            type: 'user/error',
            payload: {...e, loading: false}
        })
    }
}

export default createUser;