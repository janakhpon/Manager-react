import React from 'react'
import { withRouter } from 'react-router-dom'
import PageNav from '../Navbar'

class Layout extends React.Component{

    render(){
        return(
            <>
            {this.props.location.path !== '/Page-signup'
            && this.props.location.path !== '/Page-signin'
            && <PageNav />
            }
            <main>
            {
                this.props.children
            }
            </main>
            </>
        )
    }
}

export default withRouter(Layout);