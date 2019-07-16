import React from 'react'

class ResetPassword extends React.Component{

    constructor(props){
        super(props);

        this.state={
            formControls: {
                email: {
                    value: ''
                }
            },
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
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

    submit(e){
        e.preventDefault();

    }

    render() {

        return(
            <div className="card">
                <div className="card-header">Please Insert your email to reset your password!!!</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <input type="email" name="email" size="40" value={this.state.formControls.email.value} onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-info" onClick={this.submit}>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default ResetPassword;
