import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import styled from 'styled-components'
import PageSignup from './components/Signup'
import PageSignin from './components/Signin'
import PageLanding from './components/Landing'
import PageHome from './components/Home'
import PageHelp from './components/Help'
import PageProfile from './components/Profile'
import PageTasks from './components/Tasks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as routes from './constants/routes'
import history from './constants/history'
import PageNav from './components/Navbar';
import PageUsers from './components/Users';



export default function App() {

  const DContainer = styled.div`
  background: #CAD3C8;
  color:white;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  border-radius: 0.1rem;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center


  @media all and (max-width: 800px) {
    overflow:hidden;
    background: #CAD3C8;
    color:white;
    margin: 1rem;
    padding: 1rem;
    height: 60rem;
    display: flex;
    border-radius: 0.8rem;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    align-content: center
  }

  @media all and (max-width: 500px) {
    overflow:hidden;
    background: #CAD3C8;
    color:white;
    margin: 0.4rem;
    padding: 0.4rem;
    height: 40rem;
    display: flex;
    border-radius: 0.8rem;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    align-content: center
  }

`

  const DCard = styled.div`
  border-radius:0.2rem;
  flex: 1 1 100%;
  align-self: center;

  @media all and (max-width: 800px){
    border-radius:0.2rem;
    flex: 1 1 auto;
    align-self: center;
  }

  @media all and (max-width: 500px){
    border-radius:0.2rem;
    flex: 1 1 auto;
    align-self: center;
  }
`


  return (
    <>
      <Router history={history}>
        <PageNav />
        <Container maxWidth="md">
            <DContainer>
              <DCard>
                <Route
                  exact
                  path={routes.LANDING}
                  component={() => <PageLanding />}
                />
                <Route
                  exact
                  path={routes.SIGN_UP}
                  component={() => <PageSignup />}
                />
                <Route
                  exact
                  path={routes.SIGN_IN}
                  component={() => <PageSignin />}
                />
                <Route
                  exact
                  path={routes.PROFILE}
                  component={() => <PageProfile />}
                />
                <Route
                  exact
                  path={routes.HOME}
                  component={() => <PageHome />}
                />
                <Route
                  exact
                  path={routes.TASKS}
                  component={() => <PageTasks />}
                />
                <Route
                  exact
                  path={routes.USERS}
                  component={() => <PageUsers />}
                />
                <Route
                  exact
                  path={routes.HELP}
                  component={() => <PageHelp />}
                />
              </DCard>
            </DContainer>
        </Container>
      </Router>

    </>

  );
}
