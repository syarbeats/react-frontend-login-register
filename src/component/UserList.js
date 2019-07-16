import React from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from "../Service/ProxyServices";

class UserList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            users : [],
        }

    }


    componentDidMount(){
        console.log('Component DID MOUNT!');
        console.log("Username:", localStorage.getItem("authenticatedUser"));
        AuthenticationService.getUserList()
            .then(response => response.data)
            .then((json)=>{
                console.log("Response:", JSON.stringify(json));
                this.setState({users: json.contents.data})
            });
    }

    render() {
        return(
            <div>
                <div className="card">
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <th>USERNAME</th>
                                <th>PASSWORD</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>STATUS</th>
                                <th></th>
                                <th></th>
                            </tr>
                            {this.state.users.map((data, i) => <TableRow key = {i} data = {data} />)}
                            {console.log(this.state.users)}
                            </tbody>
                        </table>
                </div>
            </div>
        );
    }

}

class TableRow extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.data.username}</td>
                <td>{this.props.data.password}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.role}</td>
                <td>{JSON.stringify(this.props.data.enabled)}</td>
                <td><Link to={'/user/edit/'+this.props.data.username} className="btn btn-info" >Edit</Link></td>
                <td><Link to={'/user/delete/'+this.props.data.username} className="btn btn-info">Delete</Link></td>
            </tr>
        );
    }
}

export default UserList;
