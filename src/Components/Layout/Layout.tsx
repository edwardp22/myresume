import React, { useState, useEffect } from 'react';
import classes from './Layout.module.css';
import TopBar from '../TopBar/TopBar';
import Menu from '../Menu/Menu';

export default function Layout(
    { children } :
    { children: JSX.Element }
) {
    const [isMenuClosed, setIsMenuClosed] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 600) setIsMenuClosed(true);
        else setIsMenuClosed(false);

        window.addEventListener('resize', () => {
            if (window.innerWidth < 600) setIsMenuClosed(true);
            else setIsMenuClosed(false);
        });

        return window.removeEventListener('resize', () => {
            if (window.innerWidth < 600) setIsMenuClosed(true);
            else setIsMenuClosed(false);
        });
    }, []);

    const toggleMenu = () => setIsMenuClosed(isMenuClosed => !isMenuClosed);

    return (
        <>
            <div id='topBar' className={classes.topBar}>
                <TopBar isMenuClosed={isMenuClosed} toggleMenu={toggleMenu} />
            </div>

            <div id='menu' className={[classes.menu, (isMenuClosed ? classes.slideLeft : classes.slideRight)].join(' ')}>
                <Menu toggleMenu={toggleMenu} />
            </div>

            <div id='container' className={classes.container}>
                {children}
            </div>
        </>
    )
}