import React, { useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';

const links = [
    {
        text: 'Home',
        icon: 'home',
        link: '/Home'
    },
    {
        text: 'Resume',
        icon: 'library_books',
        link: '/Resume'
    },
    {
        text: 'Portfolio',
        icon: 'work',
        link: '/Portfolio'
    },
    {
        text: 'This Page',
        icon: 'build',
        link: '/Page'
    },
    {
        text: 'Contact',
        icon: 'contact_mail',
        link: '/Contact'
    }
]

export const generalContext = React.createContext();

const Main = () => {
    const [activeLink, setActiveLink] = useState();

    return (
        <generalContext.Provider value={{ links, activeLink }}>
            <ToastContainer />

            <Layout>
                <Switch>
                    <Route exact path='/Home' component={() => { setActiveLink('/Home'); return <Home />; }} />
                    <Route exact path='/Portfolio' component={() => { setActiveLink('/Portfolio'); return <Portfolio />; }} />
                    <Redirect to='/Home' />
                </Switch>
            </Layout>
        </generalContext.Provider>
    )
}

export default withRouter(Main);