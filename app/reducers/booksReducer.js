import { GET_BOOKS , ADD_BOOK , ALERT_ERROR } from '../actions/types';


const preState = {
    books: undefined,
    alertMsg: '',
}


export default function ( state = preState , action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.books
            };
        case ADD_BOOK:
            return {
                ...state ,
                alertMsg: action.alertMsg
            }
        case ALERT_ERROR: 
            return {
                ...state,
                alertMsg: action.alertMsg
            }
    }
    return state;
};

