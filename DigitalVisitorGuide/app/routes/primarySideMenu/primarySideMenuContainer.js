/**
 * Created by Andy Wooller on 25/09/2017.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrimarySideMenu from './primarySideMenu';

class primarySideMenuContainer extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <PrimarySideMenu navigator={ this.props.navigator } />
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {

    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(primarySideMenuContainer);
