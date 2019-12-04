import React from 'react';
import Container from '@material-ui/core/Container';
import {HashRouter as Router, Route} from 'react-router-dom'
import TDGAppBar from './components/Appbar';
import TDGListPage from './components/List';
import TDGFormPage from './components/Form';
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
    <Route exact path="/app-signin" component={Signin} />
    <Route exact path="/app-signup" component={Signup} />
    </Container>
    </Router>
    </>
    
  );
}
