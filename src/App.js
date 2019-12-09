import React from 'react';
import Container from '@material-ui/core/Container';
import {HashRouter as Router, Route} from 'react-router-dom'
import TDGAppBar from './components/Appbar';
import TDGListPage from './components/List';
import TDGpanelPage from './components/Panel';
import TDGFormPage from './components/Form';
import TDGEditformPage from './components/Editform'
import TDGitemPage from './components/ListItem'
import TDGerrorPage from './components/Error'
import TestME from './components/test';
import TestHer from './components/testtwo';
import Signin from './components/Signin';
import Signup from './components/Signup';
import history from './components/History';



export default function App() {
  return (
    <>
    <Router history={history}>
    <TDGAppBar />
    <Container maxWidth="md">
    <Route exact path="/" component={TDGListPage} />
    <Route exact path="/app-form" component={TDGFormPage} />
    <Route exact path="/app-list-item" component={TDGitemPage} />
    <Route exact path="/app-edit" component={TDGEditformPage} />
    <Route exact path="/app-test" component={TestME} />
    <Route exact path="/app-two" component={TestHer} />
    <Route exact path="/app-signin" component={Signin} />
    <Route exact path="/app-signup" component={Signup} />
    <Route exact path="/app-panel" component={TDGpanelPage} />
    <Route exact path="/app-error" component={TDGerrorPage} />
    </Container>
    </Router>
    </>
    
  );
}
