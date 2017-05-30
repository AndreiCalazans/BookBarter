import React from 'react';
import BookHolder from './stateless/BookHolder';
import {connect } from 'react-redux';
import * as actions from '../actions/book_actions';


class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterToShow: 'all'
        }
    }

    componentWillMount() {
        this.props.getBooks();
        this.props.getBooksOnTrade();
    }

    deleteBook(bookId) {
        this.props.deleteBook(bookId);
        // delete book from the state as well .
        
    }

    changeFilter(display) {
        //control of view 
        if(display == 'all') {
            this.refs.all.classList.add('filter_active');
            this.refs.trades.classList.remove('filter_active');
        } else {
            this.refs.trades.classList.add('filter_active');
            this.refs.all.classList.remove('filter_active');
        }
        this.setState({
            filterToShow: display
        })
    }

    deleteTrade(tradeId) {
        console.log('deleteTrade: ' , tradeId);
        this.props.deleteTrade(tradeId);
    }
    
    acceptTrade(tradeId){
        console.log('accept trade: ' , tradeId);
        this.props.acceptTrade(tradeId);
    }

    render() {
        // get all the books by mapping  ....
            const allBooks = this.props.handleBooks.books ?  this.props.handleBooks.books.map((e , i) => {
            let currentUser = this.props.auth.authenticated ? this.props.auth.user.id : 'annonymous';
            return <BookHolder 
                onTrade={e.onTrade} 
                createdBy={e.createdBy} 
                createdById={e.createdById}  
                key={e._id} name={e.name} 
                id={e._id}
                img_url={e.img_url} 
                rating={e.rating}
                currentUser={currentUser}
                delete={this.deleteBook.bind(this)}
                authed={this.props.auth.authenticated}
                handleRequest={this.props.requestTrade}
                />
        }): null;

        //get all the books on trade
        const booksOnTrade = (this.props.trades && this.props.auth.authenticated) ? this.props.trades.map((e , i) =>{
            let currentUser = this.props.auth.user.id;
            return <BookHolder
                type='trade'  
                onTrade={e.onTrade} 
                createdBy={e.createdBy} 
                createdById={e.createdById}
                requestedBy={e.requestedBy} 
                requestedById={e.requestedById}   
                key={i} 
                name={e.name} 
                id={e._id}
                img_url={e.img_url} 
                rating={e.rating}
                currentUser={currentUser}
                delete={this.deleteBook.bind(this)}
                authed={this.props.auth.authenticated}
                handleRequest={this.props.requestTrade}
                handleDeleteOfTrade={this.props.deleteTrade.bind(this)}
                handleAcceptTrade={this.props.acceptTrade.bind(this)}
                />
        }) :
            <div>
                <h3>Please log in to see your trades</h3>
            </div>
        ;
       

        return (
            <div>
                <div className="nav_filter">
                    <p ref='all' onClick={() => { this.changeFilter('all')}} className='filter_active'>All</p>
                    <p ref='trades' onClick={() => { this.changeFilter('trades')}}>Your Trades <span className="badge">{this.props.trades.length}</span></p>
                </div>

                {this.state.filterToShow === 'all' ?  
                    <div className="container book_container">
                        {allBooks}
                    </div>  :

                     <div className="container book_container">
                       {booksOnTrade}
                    </div>
                }

                
            
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

Books = connect(mapStateToProps, actions)(Books);

export default Books;