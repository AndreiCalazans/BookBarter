import { GET_BOOKS , ADD_BOOK , ALERT_MSG , GET_TRADES } from './types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';


export function getBooks() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/getAllBooks`)
            .then( response => {
                dispatch({
                    type: GET_BOOKS,
                    books: response.data
                });
            })
            .catch((res) => {
                console.log('There was an error fetching books: ', res);
            })
    }
};


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
            data: id
        })
            .then((res) => {
                dispatch(alertMsg(res.data));
            })
            .catch((res) => {
                dispatch(alertMsg("Couldn't delete this book!"));
            })
    }
}

// book must be an object containing info from the book like
// book = {
//     name,
//     img_url,
//     rating,
//     createdBy,
//     createdById
// }

export function requestTrade(book){
    return function(dispatch) {
        axios({
            method:'POST',
            url:`${ROOT_URL}/requestTrade`,
            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token},
            data: book
        })
            .then((res) => {
                dispatch(alertMsg(res.data));
            })
            .catch((res) => {
                dispatch(alertMsg("Couldn't make this request"));
            });
    }
}

// to delete the trade send id of the element in the db of trade.
export function deleteTrade(id) {
    return function(dispatch) {
        axios({
            method:'POST',
            url:`${ROOT_URL}/deleteTrade`,
            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token},
            data: id
        })
            .then((res) => {
                dispatch(alertMsg('Deleted this trade'));
            })
            .catch((res) => {
                dispatch(alertMsg('There was an problem with deleting this trade'));
            });
    }
}

export function acceptTrade(id) {
    return function(dispatch) {
        axios({
            method:'POST',
            url:`${ROOT_URL}/acceptTrade`,
            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token},
            data: id
        })
            .then((res) => {
                dispatch(alertMsg(res.data));
            })
            .catch((res) => {
                dispatch(alertMsg("Coudn't accept this trade"));
            });
    }
}

export function getBooksOnTrade() {
    return function(dispatch) {
        axios({
            method:'GET',
            url:`${ROOT_URL}/getBooksOnTrade`,
            // get user jwtoken in local storage its inside user , dont forget to parse it.
            headers: {authorization: JSON.parse(localStorage.getItem('user')).token}
        })
            .then((res) => {
                dispatch({
                    type: GET_TRADES,
                    payload: res.data
                })
            })
            .catch((res) => {
                dispatch(alertMsg("Coudln't get books on trade"));
            });
    }
}
