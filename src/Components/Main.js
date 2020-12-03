import React from 'react';
import Layout from './Layout/Layout';
import Header from './Header/Header';

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
        text: 'Contact',
        icon: 'contact_mail'
    }
]

export const generalContext = React.createContext();

export default function Main() {
    return (
        <generalContext.Provider value={{ links }}>
            <Layout>
                <Header>fff</Header>
            </Layout>
        </generalContext.Provider>
    )
}