import { AUTH_USER , UNAUTH_USER, AUTH_ERROR } from '../actions/types';

export default function(state={ error: '' , authenticated: false}, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state , error:'', authenticated: true , user: { ...action.payload }};
        case UNAUTH_USER:
            return { ...state , authenticated: false};
        case AUTH_ERROR:
            return {...state, error: action.payload};
    }

    return state;
}