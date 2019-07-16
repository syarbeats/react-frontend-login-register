import {AUTH_LOGIN, AUTH_ERROR, AUTH_FETCHING, AUTH_LOGOUT} from '../actions/aunthentication'


export default function authModule(state={
    username: null,
    password: null,
    isLogin: false,
    errorLogin:false,
    signing:false
},action){
    switch(action.type){

        case AUTH_LOGIN:

            return {
                ...state,
                isLogin:action.json.Contents.success,
                username: action.json.Contents.data.username,
                password: action.json.Contents.data.password,
                signing:false,
                errorLogin:false
            }
        case AUTH_ERROR:

            return {
                ...state,
                errorLogin:true,
                signing:false
            }
        case AUTH_FETCHING:
            return {
                ...state,
                signing:true,
                errorLogin:false
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                isLogin:false,
                username: null,
                password: null,
                signing:false,
                errorLogin:false
            }
        default:
            return state
    }
}
