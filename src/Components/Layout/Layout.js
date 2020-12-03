import React, { useState, useEffect } from 'react';
import classes from './Layout.module.css';
import TopBar from '../TopBar/TopBar';
import Menu from '../Menu/Menu';

export default function Layout({ children }) {
    const [isMenuClosed, setIsMenuClosed] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 600) setIsMenuClosed(true);
        else setIsMenuClosed(false);
    }, []);

    const toggleMenu = () => setIsMenuClosed(isMenuClosed => !isMenuClosed);

    return (
        <div className={classes.mainContainer}>
            <div className={classes.topBar}>
                <TopBar isMenuClosed={isMenuClosed} toggleMenu={toggleMenu} />
            </div>

            <div className={[classes.menu, (isMenuClosed ? classes.slideLeft : classes.slideRight)].join(' ')}>
                <Menu />
            </div>

            <div className={[classes.container, (isMenuClosed ? classes.containerFullWidth : '')].join(' ')}>
                {children}
            </div>
        </div>
    )
}