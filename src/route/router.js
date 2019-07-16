import React from 'react' ;
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthenticatedRoute from '../route/AuthenticatedRoute'
import RegisterUser from '../component/UserRegister'
import Home from '../component/Home'
import Login from '../component/Login'
import UserList from "../component/UserList";
import Index from '../component/Index'
import Logout from '../component/Logout'
import HeaderMenu from "../component/HeaderMenu";
import Header from "../component/Header";
import MainContent from "../component/MainContent";
import RegisterSuccess from '../component/RegisterSuccess'

function AppRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component = {Index} />
                    <Route path="/register-successfully" exact component = {RegisterSuccess}/>
                    <Route path="/login" exact component = {Login} />
                    <Route path="/logout" exact component = {Logout} />
                    <Route path="/user/register" exact component = {RegisterUser} />
                    <Route path="/home" exact component = {Home} />
                    <AuthenticatedRoute path="/user/list" exact component={UserList} />
                </Switch>
            </Router>
        </div>

    );
}

export default AppRouter;
