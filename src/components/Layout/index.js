import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import TDGAppBar from '../Appbar';

class Layout extends Component {
    render() {
        return (
        <Fragment>
            {this.props.location.pathname !== '/app-signup' && this.props.location.pathname !== '/app-signin' &&<TDGAppBar />}
            <main>{this.props.children}</main>
        </Fragment>
        )
    }
}

export default withRouter(Layout)