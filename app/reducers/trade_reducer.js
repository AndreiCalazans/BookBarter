import { BOOKS_ON_TRADE } from '../actions/types';

export default function(state=[], action) {
    switch(action.type) {
     case BOOKS_ON_TRADE: 
        return action.trades
    }

    return state;
}