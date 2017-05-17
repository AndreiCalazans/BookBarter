import React from 'react';
import {NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className='Nav'>
                <NavLink to='/'>Home</NavLink>
                <hr/>
                <NavLink to='/signin'>Sign In</NavLink>
                <NavLink to='/signup'>Sign Up</NavLink>
                {/*add a profile page */}
                
            </div>
        )
    }
}

export default Nav;