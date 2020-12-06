import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';

const Main = () => {
    return (
        <Layout>
            <ToastContainer />

            <Switch>
                <Route exact path='/Home' component={Home} />
                <Route exact path='/Portfolio' component={Portfolio} />
                <Redirect to='/Home' />
            </Switch>
        </Layout>
    )
}

export default withRouter(Main);