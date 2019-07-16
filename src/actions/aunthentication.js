import axios from 'axios'
import {API_URL} from '../config/Config'

export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_FETCHING = 'AUTH_FETCHING'


export function authFetching(){
    return {
        type:AUTH_FETCHING
    }
}

export function authReceive(username,json){
    return {
        type:AUTH_LOGIN,
        username,
        json
    }
}


export function authReceiveError(response){
    return {
        type:AUTH_ERROR,
        response
    }
}

export function authLogout(){
    return {
        type:AUTH_LOGOUT
    }
}

export function authLoginFetch(username,password) {

    let payload = {
        username: username,
        password: password
    };

    let basicAuth = btoa(username + ':' + password);
    axios.defaults.headers.common = {'Authorization': `Basic ${basicAuth}`};

    return dispatch => {
        dispatch(authFetching())

        return axios.post(`${API_URL}/api/auth`,payload)
            .then(response => response.data)
            .then((json) =>  {
                console.log("Response: ", JSON.stringify(json));
                dispatch(authReceive(username,json));
            })
            .catch( error => {
                dispatch(authReceiveError(error.response))
            })
    }

}
