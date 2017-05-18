import React from 'react';
import {NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends React.Component {
    renderLogControls() {
        if(!this.props.auth.authenticated) {
            return (
                <div >
                        <NavLink  to='/'>Home</NavLink>                        
                        <NavLink onClick={this.showSlider} to='/signin'>Sign In</NavLink>
                        <NavLink onClick={this.showSlider} to='/signup'>Sign Up</NavLink> 
            
                </div>
            )
        } else {
            return (
            <div>
                        <NavLink onClick={this.showSlider} to='/'>Home</NavLink>                        
                        <NavLink onClick={this.showSlider} to='/signin'>Profile</NavLink>
                        <NavLink onClick={this.showSlider} to='/signup'>Sign Out</NavLink> 
                    
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
                        <p>Logo <i ref='chevron' onClick={() => {this.showSlider()}} className="fa fa-chevron-down hidden-md hidden-lg" aria-hidden="true"></i></p>
                   </div>
                   <div className="hidden-xs hidden-sm top-nav_div">
                        {this.renderLogControls()}
                   </div>
               </div> 
               
               <div ref='slider' className="navSlider hidden-md hidden-lg">
                   
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

export default connect( mapStateToProps )(Nav);