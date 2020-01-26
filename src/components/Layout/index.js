import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import PageSignup from '../Signup'
import PageSignin from '../Signin'
import PageLanding from '../Landing'
import PageHelp from '../Help'
import PageProfile from '../Profile'
import PagePrivateTasks from '../Private'
import PagePublicTasks from '../Public'
import PageUsers from '../Users'
import PageMe from '../Me'
import PageAdmin from '../Admin'
import PageActivate from '../Activate'
import PagePreResetPassword from '../PreResetPassword'
import PageResetPassword from '../ResetPasssword'
import PageNav from '../Navbar'
import PageError from '../Error'
import PageLoading from '../Loading'
import PagePreactivate from '../Preactivate'
import PageSetting from '../Setting'


const DContainer = styled.div`
overflow: hidden;
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
    const name = localStorage.getItem('name')
    const numoftask = localStorage.getItem('num')


    const me = {
        id,
        name,
        numoftask
    }


    let location = useLocation()

    return (
        <>
            {location.pathname !== `${routes.SIGN_UP}`
                && location.pathname !== `${routes.SIGN_IN}`
                && location.pathname !== `${routes.ACTIVATE}`
                && location.pathname !== `${routes.PREACTIVATE}`
                && location.pathname !== `${routes.PRERESETPASSWORD}`
                && location.pathname !== `${routes.RESETPASSWORD}`
                && location.pathname !== `${routes.SETTING}`
                && <PageNav session={me} />
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
                            path={routes.PRIVATETASKS}
                            component={() => <PagePrivateTasks />}
                        />
                        <Route
                            exact
                            path={routes.PUBLICTASKS}
                            component={() => <PagePublicTasks />}
                        />
                        <Route
                            exact
                            path={routes.USERS}
                            component={() => <PageUsers />}
                        />
                        <Route
                            exact
                            path={routes.SETTING}
                            component={() => <PageSetting />}
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
                            path={routes.ACTIVATE}
                            component={() => <PageActivate />}
                        />
                        <Route
                            exact
                            path={routes.PREACTIVATE}
                            component={() => <PagePreactivate />}
                        />
                        <Route
                            exact
                            path={routes.PRERESETPASSWORD}
                            component={() => <PagePreResetPassword />}
                        />
                        <Route
                            exact
                            path={routes.RESETPASSWORD}
                            component={() => <PageResetPassword />}
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