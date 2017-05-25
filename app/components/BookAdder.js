import React from 'react';
import {Field , reduxForm } from 'redux-form';
import {renderField } from './auth/renderField';
import {connect } from 'react-redux';
import * as actions from '../actions/book_actions';

import AlertMsg from './stateless/AlertMsg';


class BookAdder extends React.Component {
    constructor(props) {
        super(props);
        this.hideMsg = this.hideMsg.bind(this); 
    }
    
    submit(values) {
        console.log(values);
        console.log(this.props);
        // make the new book object
    let book = {
        name: values.name,
        img_url: values.img_url,
        rating: values.rating,
        onTrade: false,
        createdBy: this.props.auth.user.name,
        createdById: this.props.auth.user.id
    }

    //make action call to state
    this.props.addBook(book);
    this.hideMsg();
    }

    hideMsg() {
        //hide msg after 3 secs.
        // this is a hack to empty the current error msg after a few seconds and hide it.
        setTimeout(() => {
            this.props.alertError('');
        }, 3000)
    }

    render(){
    const {handleSubmit} = this.props;

        return (
        <div className='book_adder'>
            {/*to control the alert check to see the size of the alert msg if 0 then dont show.*/}
            <AlertMsg show={this.props.books.alertMsg.length > 0 ? true : false} msg={this.props.books.alertMsg} ></AlertMsg>
            <p className="title">Add a book!</p>
            <form onSubmit={handleSubmit(this.submit.bind(this))} className='form-horizontal col-sm-8 col-sm-offset-2'>
                <Field name='name' type='text' component={renderField} label='Name' />
                <Field name='img_url' type='text' component={renderField} label='Image Url' />
                <Field name='rating' type='number' min='0' max='5' component={renderField} label='Book Rating' />
            
                 <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Sign in</button>
                        </div>
                    </div>
            </form>
        </div>
    )};
};


function mapStateToProps(state) {
    return {
        books: state.books,
        auth: state.auth
    }
}

BookAdder = reduxForm({
    form: 'BookAdder'
})(connect( mapStateToProps , actions)(BookAdder));


export default BookAdder;
