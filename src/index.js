import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';

const localGraphQL = "https://todographqlbynovae.herokuapp.com";
// const localGraphQL = "http://localhost:4000";

const client = new ApolloClient({
  uri: localGraphQL
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />

    <App />

  </ThemeProvider>
  </ApolloProvider> ,
  document.querySelector('#root'),
);
