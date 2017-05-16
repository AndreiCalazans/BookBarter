import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <h1>Home</h1>
        </div>
        )
    }
}


export default connect( null , actions)(Home);