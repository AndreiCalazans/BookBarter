import React from 'react';
import { Route , Router } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import Signin from './auth/signin';
import Signup from './auth/signup';
import Nav from './Nav';
class Main extends React.Component {


    render() {
       
        return (
                <div>
                    <Nav></Nav>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/signin' component={Signin}></Route>
                    <Route path='/signup' component={Signup}></Route>
                    <Route path='/books' component={Books}></Route>
                                        
                </div>
            
        )
    }
};

export default Main;


