import React from 'react';
import classes from './TopBar.module.css';
import PropTypes from 'prop-types';
import { Menu, Close } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

TopBar.propTypes = {
    isMenuClosed: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
}

export default function TopBar({ isMenuClosed = false, toggleMenu = ()=>{} }) {
    return (
        <IconButton size='medium' className={classes.menuButton} onClick={toggleMenu}>
            {isMenuClosed ? <Menu fontSize='default' /> : <Close fontSize='default' />}
        </IconButton>
    )
}