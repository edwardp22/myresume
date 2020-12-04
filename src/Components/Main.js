import React, { useState } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';

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
            <Layout>
                <Switch>
                    <Route exact path='/Home' component={() => {setActiveLink('/Home'); return <Home />;}} />
                    <Redirect to='/Home' />
                </Switch>
            </Layout>
        </generalContext.Provider>
    )
}

export default withRouter(Main);