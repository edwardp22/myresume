import React from 'react';
import Layout from './Layout/Layout';
import Home from './Home/Home';

const links = [
    {
        text: 'Home',
        icon: 'home'
    },
    {
        text: 'About',
        icon: 'person'
    },
    {
        text: 'Resume',
        icon: 'library_books'
    },
    {
        text: 'Portfolio',
        icon: 'work'
    },
    {
        text: 'This Page',
        icon: 'build'
    },
    {
        text: 'Contact',
        icon: 'contact_mail'
    }
]

export const generalContext = React.createContext();

export default function Main() {
    return (
        <generalContext.Provider value={{ links }}>
            <Layout>
                <Home />
            </Layout>
        </generalContext.Provider>
    )
}