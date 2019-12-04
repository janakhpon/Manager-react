import React from 'react';
import Container from '@material-ui/core/Container';
import {HashRouter as Router, Route} from 'react-router-dom'
import TDGAppBar from './components/Appbar';
import TDGListPage from './components/List';
import TDGFormPage from './components/Form';
import testPage from './components/Test';
import history from './components/History';



export default function App() {
  return (
    <>
    <Router history={history}>
    <TDGAppBar />
    <Container maxWidth="md">
    <Route exact path="/" component={TDGListPage} />
    <Route exact path="/app-form" component={TDGFormPage} />
    <Route exact path="/app-test" component={testPage} />
    </Container>
    </Router>
    </>
    
  );
}
