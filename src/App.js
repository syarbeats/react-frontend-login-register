import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import HeaderMenu from "./component/HeaderMenu";
import Header from "./component/Header";
import MainContent from "./component/MainContent";

class App extends React.Component
{

    render()
    {
        const {store} = this.props;
        return (
            <div>
                <Provider store={store}>
                    <HeaderMenu/>
                    <Header/>
                    <MainContent/>
                </Provider>
            </div>
        )
    }
}

export default App;
