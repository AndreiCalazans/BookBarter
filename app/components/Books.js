import React from 'react';
import BookHolder from './stateless/BookHolder';
import {connect } from 'react-redux';
import * as actions from '../actions/book_actions';


class Books extends React.Component {

    componentWillMount() {
        this.props.getBooks();
    }

    deleteBook(bookId) {
        this.props.deleteBook(bookId);
        // delete book from the state as well .
        
    }

    render() {
            const booksDB = this.props.handleBooks.books ?  this.props.handleBooks.books.map((e , i) => {
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
                />
        }): null;

        return (
            <div>
                <h1>Books section</h1>
              <hr/>
                    <div className="container book_container">
                        {booksDB}
                    </div>
                
            
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

Books = connect(mapStateToProps, actions)(Books);

export default Books;