import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
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
