import React from 'react';
import classes from './ALink.module.css';
import { NavLink } from 'react-router-dom';

export default function Link(
    { text = '', icon = '', borderRadius = '0px', onClick, linkRoute = '#', active = false } :
    { text?: string, icon?: string, borderRadius?: string, onClick?: () => void, linkRoute?: string, active?: boolean }
) {
    return (
        <NavLink
            style={{ borderRadius: borderRadius }}
            className={[classes.link, (active ? classes.active : '')].join(' ')}
            onClick={() => onClick ? onClick() : null}
            to={linkRoute}
        >
            <i className={[classes.icon, 'material-icons'].join(' ')}>{icon}</i>
            <div className={classes.text}>{text}</div>
        </NavLink>
    )
};