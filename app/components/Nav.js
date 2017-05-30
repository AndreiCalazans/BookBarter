import React from 'react';
import {NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Nav extends React.Component {
    renderLogControls() {
        if(!this.props.auth.authenticated) {
            return (
                <div >
                        <NavLink  to='/'>Home</NavLink>                        
                        <NavLink  to='/signin'>Sign In</NavLink>
                        <NavLink to='/signup'>Sign Up</NavLink> 
                        <NavLink to='/books'>Books</NavLink>
                </div>
            )
        } else {
            return (
            <div>
                        <NavLink  to='/'>Home</NavLink>                        
                        <NavLink to='/signin'>Profile</NavLink>
                        <a style={{cursor : 'pointer'}} onClick={() => {this.props.signoutUser()}}>Sign Out</a>
                        <NavLink to='/books'>Books</NavLink>
                        
                    
                </div>
            )
        }
    }

    showSlider() {
        this.refs.slider.classList.toggle('show-slider');
        this.refs.chevron.classList.toggle('rotate-chevron');
        
    }

    render() {
        return (
            <div className='Nav'>
               <div className='top-nav'>
                   <div className='top-nav_div'>
                        <p><NavLink to='/'>Logo</NavLink> <i onClick={()=> {this.showSlider() }} ref='chevron' className="fa fa-chevron-down hidden-md hidden-lg" aria-hidden="true"></i></p>
                   </div>
                   <div className="hidden-xs hidden-sm top-nav_div">
                        {this.renderLogControls()}
                   </div>
               </div> 
               <div ref='slider' onClick={() => {this.showSlider()}} className="navSlider hidden-md hidden-lg">
                   
                    {this.renderLogControls()}

               </div>   
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect( mapStateToProps , actions)(Nav);