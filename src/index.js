import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicApp from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'redux-zero/react'
import store from './store'
import SignIn from './signIn.js'
import SignUp from './signUp.js'
import Board from './boards.js'

import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';


const Index = ({ boards }) => {
    return (
        <Provider store={store}>
            <HashRouter>
                    <Switch>
                        <Route exact path="/" component={SignIn} />
                        <Route path="/signin" component={SignIn} /> 
                        <Route path="/signup" component={SignUp} />
                        <Route path="/board" component={Board} />
                    </Switch>
            </HashRouter>
        </Provider>
    )
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
