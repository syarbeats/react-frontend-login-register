import React from 'react';
import AuthenticationService from "../Service/ProxyServices";
import {Redirect} from "react-router-dom";
import { withRouter } from 'react-router-dom';

class HeaderMenu extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <button type="button" className="btn btn-primary">Home</button><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/user/register">
                                    <button type="button" className="btn btn-secondary">Register User</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/user/list">
                                    <button type="button" className="btn btn-success">Show User List</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">
                                    <button type="button" className="btn btn-success">Logout</button></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderMenu;
