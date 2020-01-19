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
import GeneralMessageModal from './components/views/generalMessageModal';
import SessionManager from './utils/sessionManager';
import CustomNavBar from './components/viewItems/customNavbar';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            {SessionManager.restoreSession()}
            <GeneralMessageModal />
            <Router>
            <CustomNavBar />
                <Switch>
                    <Route exact path={["/", "/login"]} component={Login} />
                    <Route exact path="/register" component={Registration} />
                    <Route exact path="/add-credential" component={CreateCredential} />
                    <Route exact path="/credentials" component={Lobby} />
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
