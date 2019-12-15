import React from 'react';
import { Router } from 'react-router-dom'
import history from './constants/history'
import Layout from './components/Layout'



export default function App() {



  return (
    <>
      <Router history={history}>
        <Layout />
      </Router>

    </>

  );
}
