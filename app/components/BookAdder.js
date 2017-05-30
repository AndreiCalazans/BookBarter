import React from 'react';
import {Field , reduxForm } from 'redux-form';
import {renderField } from './auth/renderField';
import {connect } from 'react-redux';
import * as actions from '../actions/book_actions';
import history from '../history';
import AlertMsg from './stateless/AlertMsg';

var validate = values => {
    const errors = {}
    const inputs = ['name', 'img_url', 'rating'];
    inputs.forEach((e) => {
        if(!values[e]) { errors[e] = 'Required'}
    })


    return errors;
}


class BookAdder extends React.Component {
    constructor(props) {
        super(props);
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
    }

    componentWillMount() {
        if (!this.props.auth.authenticated) {
            this.props.alertMsg('User must be sign in to add a book');
            history.push('/signin');
        }
    }

    render(){
    const {handleSubmit} = this.props;

        return (
        <div className='book_adder'>
            <p className="title container">Add a book!</p>
            <form onSubmit={handleSubmit(this.submit.bind(this))} className='form-horizontal col-sm-8 col-sm-offset-2'>
                <Field name='name' type='text' component={renderField} label='Name' />
                <Field name='img_url' type='text' component={renderField} label='Image Url' />
                <Field name='rating' type='number' min='0' max='5' component={renderField} label='Book Rating' />
            
                 <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Add a book</button>
                        </div>
                    </div>
            </form>
        </div>
    )};
};


function mapStateToProps(state) {
    return state
}

BookAdder = reduxForm({
    form: 'BookAdder',
    validate
})(connect( mapStateToProps , actions)(BookAdder));


export default BookAdder;
