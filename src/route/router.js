import React from 'react' ;
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthenticatedRoute from '../route/AuthenticatedRoute'
import RegisterUser from '../component/UserRegister'
import Login from '../component/Login'
import UserList from "../component/UserList";
import Index from '../component/Index'
import Logout from '../component/Logout'
import RegisterSuccess from '../component/RegisterSuccess'
import RegisterFailed from '../component/RegisterFailed'
import ResetPassword from "../component/ResetPassword";
import CheckEmail from '../component/CheckEmail'

function AppRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component = {Index} />
                    <Route path="/register-successfully" exact component = {RegisterSuccess}/>
                    <Route path="/register-failed" exact component = {RegisterFailed}/>
                    <Route path="/login" exact component = {Login} />
                    <Route path="/logout" exact component = {Logout} />
                    <Route path="/reset" exact component = {ResetPassword} />
                    <Route path="/checkemail" exact component = {CheckEmail} />
                    <Route path="/user/register" exact component = {RegisterUser} />
                    <AuthenticatedRoute path="/user/list" exact component={UserList} />
                </Switch>
            </Router>
        </div>

    );
}

export default AppRouter;
