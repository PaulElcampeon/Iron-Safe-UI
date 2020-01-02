import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/index';
import Login from './components/views/login';
import Registration from './components/views/registration';
import Lobby from './components/views/lobby';
import CreateCredential from './components/views/createCredentialView';
import EditCredential from './components/views/editCredentialView';

//If there is a jwt in the store we want to check if it is valid, if it is valid then we will render the lobby else we render the login page. 

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path={["/", "/login"]} component={Login} />
                    <Route path="/register" component={Registration} />
                    <Route path="/add-credential" component={CreateCredential} />
                    <Route path="/edit-credential" component={EditCredential} />
                    <Route path="/lobby" component={Lobby} />
                    <Redirect to="/" />
                    {/* <Route path="" component={Error} /> */}
                </Switch>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
