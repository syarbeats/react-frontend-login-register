import React from 'react'
import { Link } from 'react-router-dom'

class RegisterFailed extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-header"/>
                    <div className="card-body">
                        <h1 id="info">Your username is not available, please find the new one <Link to='/user/register'>Register Again</Link></h1>
                    </div>
                </div>
            </div>
        );
    }

}

export default RegisterFailed;
