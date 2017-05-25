import { GET_BOOKS , ADD_BOOK , ALERT_ERROR } from './types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';


// export function getBooks() {
//     return function(dispatch) {
//         axios.get(`${ROOT_URL}/getAllBooks`)
//             .then( response => {
//                 return {
//                     type: GET_BOOKS,
//                     books: response.data
//                 }
//             })
//     }
// };


export function addBook(book) {
    return function(dispatch) {
        // book must be an object with info the book!
        console.log( JSON.parse(localStorage.getItem('user')).token);
        axios({
            method:'POST',
            url:`${ROOT_URL}/addBook`,


            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token},
            data: book
        })
            .then( response => {
                // not making a second dispatch returning action directly from here ...
                console.log('success');
                return dispatch({
                    type: ADD_BOOK,
                    alertMsg: 'Book Saved!'
                })
            })
            .catch( response => {
                console.log('error');
               return dispatch(alertError('There was an error with adding this book!'))
            })
    }
}


export function alertError(alertMsg) {
    return {
        type: ALERT_ERROR,
        alertMsg
    }
}