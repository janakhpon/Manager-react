import React from 'react'
import { BrowserRouter as Router, Route, useHistory, useLocation } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import PageSignup from '../Signup'
import PageSignin from '../Signin'
import PageLanding from '../Landing'
import PageHelp from '../Help'
import PageProfile from '../Profile'
import PageTasks from '../Tasks'
import PageUsers from '../Users'
import PageMe from '../Me'
import PageAdmin from '../Admin'
import PageNav from '../Navbar'
import PageError from '../Error'
import PageLoading from '../Loading'
import { useQuery } from 'react-apollo'
import { GET_ME } from '../Queries'

const DContainer = styled.div`
overflow: hidden;
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
  overflow: hidden;
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
  overflow: hidden;
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
const Layout = () => {
    const id = localStorage.getItem('id')
    const user = useQuery(GET_ME, {
      variables: { id },
    });
    console.log(user.data.users[0].id)

    let location = useLocation()

    return (
        <>
            {location.pathname !== '/Page-signup'
                && location.pathname !== '/Page-signin'
                && <PageNav session={user}/>
            }
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
                            path={routes.ERROR}
                            component={() => <PageError />}
                        />
                        <Route
                            exact
                            path={routes.LOADING}
                            component={() => <PageLoading />}
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
                            path={routes.PROFILE}
                            component={() => <PageProfile />}
                        />
                        <Route
                            exact
                            path={routes.ME}
                            component={() => <PageMe />}
                        />
                        <Route
                            exact
                            path={routes.HELP}
                            component={() => <PageHelp />}
                        />
                        <Route
                            exact
                            path={routes.ADMIN}
                            component={() => <PageAdmin />}
                        />
                    </DCard>
                </DContainer>
            </Container>
        </>
    )

}

export default Layout