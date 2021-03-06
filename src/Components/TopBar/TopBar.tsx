import React from 'react';
import classes from './TopBar.module.css';
import { Menu, Close } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

export default function TopBar(
    { isMenuClosed = false, toggleMenu } :
    { isMenuClosed?: boolean, toggleMenu: () => void }
) {
    return (
        <IconButton size='medium' className={classes.menuButton} onClick={() => toggleMenu()}>
            {isMenuClosed ? <Menu fontSize='default' /> : <Close fontSize='default' />}
        </IconButton>
    )
}