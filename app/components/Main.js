import React from 'react';
import { Route , Switch , withRouter } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import Signin from './auth/signin';
import Signup from './auth/signup';
import Nav from './Nav';
import BookAdder from './BookAdder';
import AlertMsg from'./stateless/AlertMsg';
import Profile from './Profile';
import {connect} from 'react-redux';
import * as actions from '../actions/book_actions';
import require_Auth from './auth/require_Auth';

class Main extends React.Component {
    
    closeMsg() {
        this.props.alertMsg('');
    }

    render() {
        return (
                <div>
                    <Nav></Nav>
                     <AlertMsg close={this.closeMsg.bind(this)} show={this.props.handleBooks.alertMsg.length > 0 ? true : false} msg={this.props.handleBooks.alertMsg} ></AlertMsg>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/signin' component={Signin}></Route>
                        <Route path='/signup' component={Signup}></Route>
                        <Route path='/books' component={Books}></Route>
                        <Route path='/bookAdder' component={BookAdder}></Route>
                        <Route path='/profile' component={Profile}></Route>
                    
                        
                    </Switch>
                                        
                </div>
            
        )
    }
};
function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps , actions)(Main));


