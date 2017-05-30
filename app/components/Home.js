import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='container'>
            <h1>Book Barter, a book trading app</h1>
            <p>Trade your books and never stop reading</p>
        </div>
        )
    }
}


export default connect( null , actions)(Home);