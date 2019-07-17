import axios from 'axios'
import {Redirect} from "react-router-dom";
import React from "react";

const API_URL = 'http://localhost:8080'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const PASSWORD_SESSION_ATTRIBUTE_NAME = 'password'

class ProxyServices {

    executeBasicAuthenticationService(username, password) {
        let payload = {
            username: username,
            password: password
        };
        let basicAuth = btoa(username + ':' + password);
        axios.defaults.headers.common = {'Authorization': `Basic ${basicAuth}`};

        return axios.post(`${API_URL}/api/auth`, payload)
    }


    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        localStorage.setItem(PASSWORD_SESSION_ATTRIBUTE_NAME, password)
    }


    logout() {
        localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        /*return <Redirect to="/login" />*/
    }

    isUserLoggedIn() {
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        //let password = localStorage.getItem(PASSWORD_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }


    getUserList(){
        let basicAuth = btoa(localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME) + ':' + localStorage.getItem(PASSWORD_SESSION_ATTRIBUTE_NAME));
        axios.defaults.headers.common = {'Authorization': `Basic ${basicAuth}`};

        return axios.get(`${API_URL}/api/all-users`);

    }

    resetPasswordRequest(email){
        let payload = {
            email: email
        }
        return axios.post(`${API_URL}/api/resetpassword`, payload);
    }
}

export default new ProxyServices()
