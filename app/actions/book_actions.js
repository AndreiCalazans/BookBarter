import { GET_BOOKS , ADD_BOOK , ALERT_MSG , GET_TRADES , DELETE_BOOK  , BOOKS_ON_TRADE} from './types';
import axios from 'axios';
import history from '../history';
const ROOT_URL = 'https://andrei-bookbarter.herokuapp.com';


    // *********************************
    // *         HANDLING BOOKS        *
    // *                               *
    // *                               *
    // *********************************



export function getBooks() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/getAllBooks`)
            .then( response => {
                return dispatch({
                    type: GET_BOOKS,
                    books: response.data
                });
            })
            .catch((res) => {
                dispatch(alertMsg('Error with fetching books'))
            })
    }
};


export function addBook(book) {
    return function(dispatch) {
        // book must be an object with info the book!
        axios({
            method:'POST',
            url:`${ROOT_URL}/addBook`,
            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token},
            data: book
        })
            .then( response => {
                // not making a second dispatch returning action directly from here ...
                history.push('/books');
                return dispatch({
                    type: ADD_BOOK,
                    alertMsg: 'Book Saved!'
                })
            })
            .catch( response => {
               return dispatch(alertMsg('There was an error with adding this book!'))
            })
    }
}


export function alertMsg(alertMsg) {
    return {
        type: ALERT_MSG,
        alertMsg
    }
}

export function deleteBook(id) {
    
    return function(dispatch) {
        axios({
            method:'POST',
            url:`${ROOT_URL}/deleteBook`,
            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token},
            data: {
                id
            }
        })
            .then((res) => {
                dispatch({
                    type: DELETE_BOOK,
                    id
                });
               return dispatch(alertMsg(res.data));
            })
            .catch((res) => {
                dispatch(alertMsg("Couldn't delete this book!"));
            })
    }
}


    // *********************************
    // *         HANDLING TRADES       *
    // *                               *
    // *                               *
    // *********************************




//request trade must send info on the book in an object form!!!
// book must be an object containing info from the book like
// book = {
//     name,
//     img_url,
//     rating,
//     createdBy,
//     createdById
// }
export function requestTrade(book) {
    return function(dispatch) {
        axios({
            method:'POST',
            url:`${ROOT_URL}/requestTrade`,
            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token},
            data: book
        })
            .then((res) => {
                // should return an text with success.
                //get books on trade again to update the dom
                dispatch(getBooksOnTrade());               
                return dispatch(alertMsg(res.data));
            })
            .catch((res) => {
                dispatch(alertMsg('There was a problem with making this request'));
            });
    }
}

export function acceptTrade(idOfTrade) {
    return function(dispatch) {
        axios({
            method:'POST',
            url:`${ROOT_URL}/acceptTrade`,
            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token},
            data: {
                id: idOfTrade
            }
        })
            .then((res) => {
                //get books on trade again to update the dom                
                dispatch(getBooksOnTrade());                
                return dispatch(alertMsg(res.data));
            })
            .catch((res) => {
                return dispatch(alertMsg(res.data));
            });

    }
}

export function deleteTrade(idOfTrade) {
    return function(dispatch) {
        axios({
            method:'POST',
            url:`${ROOT_URL}/deleteTrade`,
            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token},
            data: {
                id: idOfTrade
            }
        })
            .then((res) => {
                //get books on trade again to update the dom                
                dispatch(getBooksOnTrade());
                return dispatch(alertMsg(res.data));
            })
            .catch((res) => {
                return dispatch(alertMsg(res.data));
            });
    }
}

export function getBooksOnTrade() {
    return function(dispatch) {
        axios({
            method:'GET',
            url:`${ROOT_URL}/booksOnTrade`,
            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token}
        })
            .then((res) => {
                return dispatch(booksOnTrade(res.data));
            })
            .catch((res) => {
                return dispatch(alertMsg(res.data));
            });
    }
}

export function booksOnTrade(trades) {
    return {
        type: BOOKS_ON_TRADE,
        trades
    }
}


