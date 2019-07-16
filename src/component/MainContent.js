import React , { Component } from 'react';
import RightContent from "./RightContent";

class MainContent extends Component {
    render(){
        return (
            <div>
                <div className="container">
                    <main>
                        <div className="row">
                            <div className="col-md-12">
                                <RightContent/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        );
    }
}

export default MainContent;