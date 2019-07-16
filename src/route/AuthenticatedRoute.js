import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../Service/ProxyServices';

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            console.log("Authenticated....")
           /* this.props.history.push("/user/list");*/
           return <Route {...this.props} />
        } else {
            console.log("UnAuthenticated....")
            return <Redirect to="/login" />
        }

    }
}

export default AuthenticatedRoute
