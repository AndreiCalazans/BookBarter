import axios from 'axios';
import history from '../history';
import {alertMsg} from './book_actions';
import {AUTH_USER, AUTH_ERROR , UNAUTH_USER } from './types';

const ROOT_URL = 'https://andrei-bookbarter.herokuapp.com';


export function signinUser({email , password}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin` , {email , password})
            .then( response => {
                // if req is good
                localStorage.setItem('user' , JSON.stringify(response.data));
                //push back home
                history.push('/');
               return dispatch({type : AUTH_USER , payload : response.data })
            })
            .catch( () => {

                dispatch(alertMsg('bad login info'));
            
            })
    }
}


export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error

    }
}

export function authUser(userInfo) {
    localStorage.setItem('user' , JSON.stringify(userInfo));    
    return { 
        type: AUTH_USER , 
        payload: userInfo
    }
}

export function signoutUser() {
    localStorage.removeItem('user');
    return function(dispatch) {
        dispatch(alertMsg('You are signed out!'));
        return { type: UNAUTH_USER}
    }
}

export function signupUser({email , password , name , address, city , state , country }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup` , {email , password , name , address, city , state , country })
            .then( response => {
                localStorage.setItem('user' , JSON.stringify(response.data));
                //push back home
                history.push('/');
                return dispatch({type : AUTH_USER , payload : response.data })
            })
            .catch( () => {
                dispatch(authError('bad login info'));                
            })
    }
}

export function updateUser(user) {
    return function(dispatch) {
        axios({
            method:'POST',
            url:`${ROOT_URL}/updateUser`,
            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token},
            data: user
        })
        .then((res) => {
            dispatch(authUser(res.data));
            return dispatch(alertMsg('User was updated'));
        })
        .catch((res) => {
            return dispatch(alertMsg(res.data));
        });
    }
}