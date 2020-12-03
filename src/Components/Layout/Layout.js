import React from 'react';
import classes from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.topBar}>

            </div>

            <div className={classes.menu}>
                dsdsd
            </div>

            <div className={classes.container}>
                {children}
            </div>
        </div>
    )
}