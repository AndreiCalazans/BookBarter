import React from 'react';
import {Field , reduxForm} from 'redux-form';
import {renderField} from './renderField';


const validate = values => {
    const errors = {};
    const names = ['name', 'email', 'password', 'address', 'city', 'state', 'country'];
    names.forEach((e) => {
        if(!values[e]) { errors[e] = 'Required'}
    })

    if(values.email) {
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = 'Invalid email address';
        }
    }

    if(values.password) {
        if((values.password.length || 10) < 5) {
            errors.password = 'Minimum 5 characters please!'
        }
    }

    return errors;
}



class Signup extends React.Component {

    submit(values) {
        console.log(values);
    }

    render() {
        const {handleSubmit} = this.props;
        

        return (
            <div className='forms'>
                <form onSubmit={handleSubmit(this.submit)} className="form-horizontal col-sm-8 col-sm-offset-2">
                    <Field name='email' type='email' component={renderField} label='Email' />
                    <Field name='password' type='password' component={renderField} label='Password'/>
                    <Field name='name' type='text' component={renderField} label='Name' />
                    <Field name='address' type='local' component={renderField} label='Address' />
                    <Field name='city' type='local' component={renderField} label='City' />
                    <Field name='state' type='local' component={renderField} label='State' />
                    <Field name='country' type='local' component={renderField} label='Country' />
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Signup = reduxForm({
    form: 'signup',
    validate
})(Signup);


export default Signup;