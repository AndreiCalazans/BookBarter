import { GET_BOOKS , ADD_BOOK , ALERT_MSG , GET_TRADES } from '../actions/types';


const preState = {
    books: undefined,
    alertMsg: '',
    trades: undefined
}


export default function ( state = preState , action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.books
            };
        case GET_TRADES:
            return {
                ...state,
                trades: action.payload
            }
        case ADD_BOOK:
            return {
                ...state ,
                alertMsg: action.alertMsg
            }
        case ALERT_MSG: 
            return {
                ...state,
                alertMsg: action.alertMsg
            }
    }
    return state;
};

