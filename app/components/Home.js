import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Books from './Books';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='container'>
            <h1><span className='logo_intro'>Book Barter</span> Trade your books and never stop reading.</h1>
           <div className='nav_filter see_all '>
              <NavLink to='/books'>See all</NavLink>
            </div>
           <div className="outer_holder">
                
            <Books display='home'/>    
           </div>
        </div>
        )
    }
}


export default connect( null , actions)(Home);