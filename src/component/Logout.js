import React from 'react'
import ProxyServices from "../Service/ProxyServices";

class Logout extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        console.log("Logout.....")
        ProxyServices.logout();
        let path = `/login`;
        this.props.history.push(path);
    }

    render() {
        return(
                <div>
                    <h1>logout</h1>
                </div>

        );
    }

}
export default Logout;
