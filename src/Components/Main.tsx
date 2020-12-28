import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Components from './Components/Components';

const Main = () => {
    return (
        <>
            <CssBaseline />
            <Layout>
                <ToastContainer />

                <Switch>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Portfolio' component={Portfolio} />
                    <Route exact path='/Components' component={Components} />
                    <Redirect to='/Home' />
                </Switch>
            </Layout>
        </>
    )
}

export default withRouter(Main);