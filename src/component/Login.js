import React, {Component} from 'react'
import ProxyServices from '../Service/ProxyServices'
import { connect } from 'react-redux';

class LoginComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            formControls: {
                username: {
                    value: ''
                },
                password: {
                    value: ''
                }
            },
            hasLoginFailed: '',
            showSuccessMessage: ''

        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange = event => {

        const name = event.target.name;
        const value = event.target.value;

        console.log("Name:",name)

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });
    }


    loginClicked(e){
        e.preventDefault();
        console.log("Login Process..");
        console.log("Username: " + this.state.formControls.username.value);
        console.log("Password: " + this.state.formControls.password.value);

        ProxyServices.executeBasicAuthenticationService(this.state.formControls.username.value, this.state.formControls.password.value)
           .then(response => response.data)
           .then((json) => {
               console.log("Response:", JSON.stringify(json));
               ProxyServices.registerSuccessfulLogin(this.state.formControls.username.value, this.state.formControls.password.value);
               this.props.history.push("/user/list")
           }).catch(() => {
               this.setState({showSuccessMessage: false})
                this.setState({hasLoginFailed: true})
           })
    }

    render() {

        return (
            <div className="container">
                <div className="row" style={{'margin-top': "200px"}}>
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                        <div className="card">
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                            <div className="card-header" style={{"color": "green"}}><b></b></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        Username
                                    </div>
                                    <div className="col-md-6" >
                                        <input type="text" name="username" placeholder="Insert your username..." size="40"
                                                onChange={this.handleChange} value={this.state.formControls.username.value}/>
                                    </div>
                                </div>
                                <div className="row" style={{'margin-top': "20px"}}>
                                    <div className="col-md-3">
                                        Password
                                    </div>
                                    <div className="col-md-6" >
                                        <input type="password" name="password" placeholder="Insert your password..." size="40"
                                               value={this.state.formControls.password.value} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="row" style={{'margin-top': "20px"}}>
                                    <div className="col-md-3">
                                    </div>
                                    <div className="col-md-6" >
                                        <button className="btn btn-info" onClick={this.loginClicked}>Login</button>
                                        <button style={{"margin-left": "10px"}} className="btn btn-info">Cancel</button>

                                    </div>
                                </div>
                                <br/><hr/>
                                <a href="/user/register">Register</a> | <a href="/reset">Reset Password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    const { AuthenticationReducer } = state
    const { username, password } = AuthenticationReducer

    console.log("Username from StateProps:", username)
    let usernameLength = username?username.length:0;

    return{
        isUserHasLogin: usernameLength > 0 ? true:false,
        errorLogin: AuthenticationReducer.errorLogin,
        signing: AuthenticationReducer.signing,
        username: AuthenticationReducer.username,
        password: AuthenticationReducer.password,
    }
}

const Login = connect(mapStateToProps)(LoginComponent)

export default Login;

