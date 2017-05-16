import axios from 'axios';
import history from '../history';

import {AUTH_USER, AUTH_ERROR , UNAUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3000';


export function signinUser({email , password}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin` , {email , password})
            .then( response => {
                // if req is good
                dispatch({type : AUTH_USER , payload : response.data })
               console.log('it was good');
                localStorage.setItem('user' , JSON.stringify(response.data));
                //push back home
                history.push('/');
            })
            .catch( () => {

                dispatch(authError('bad login info'));
            
            })
    }
}


export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error

    }
}

export function signoutUser() {
    localStorage.removeItem('user');

     return { type: UNAUTH_USER}
}