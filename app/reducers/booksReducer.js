import { GET_BOOKS , ADD_BOOK , ALERT_MSG , GET_TRADES, DELETE_BOOK} from '../actions/types';


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
        case DELETE_BOOK:
            let newState = state.books.filter((book) => {
                return book._id != action.id
            });
            return {
                ...state,
                books: newState
            }
    }
    return state;
};

