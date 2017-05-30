import React from 'react';
import {Field , reduxForm } from 'redux-form';
import {renderField} from './renderField';
import * as actions from '../../actions';
import {connect} from 'react-redux';

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required'
    }else if (values.password.length < 5 ) {
        errors.password = 'Minimum 5 characters please'
    }
    return errors
}

class Signin extends React.Component {


    submit(values) {
        this.props.signinUser(values);
    }
    render() {
        const {handleSubmit } = this.props;
        return (
            <div className='forms'>
                <form className="form-horizontal col-sm-8 col-sm-offset-2" onSubmit={handleSubmit(this.submit.bind(this))}>
                    {(this.props.auth.error.length > 0) &&
                        <div className='form-group flex-center-box bg-danger'>
                            <p style={{margin: "12px"}}>{this.props.auth.error}</p>
                        </div>
                    }
                    <Field name='email' type='email' component={renderField} label='Email' />
                    <Field name='password' type='password' component={renderField} label='Password' />                    
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

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}


Signin = reduxForm({
    form: 'signin',
    validate
})(connect(mapStateToProps , actions )(Signin));


export default Signin;