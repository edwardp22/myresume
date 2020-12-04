import React from 'react';
import classes from './ALink.module.css';
import { NavLink } from 'react-router-dom';

/**
 * Customizable button
 * @param {String} text text to show
 * @param {String} icon icon to show
 * @param {String} borderRadius is a rounded button
 * @param {Boolean} active active button
 * @param {Function} onClick function onClick
 * @param {String} linkRoute link of the page
 */
export const Link = ({ text, icon, borderRadius = '0px', active = false, onClick, linkRoute }) => {
    return (
        <NavLink
            style={{ borderRadius: borderRadius }}
            className={[classes.link, (active ? classes.active : '')].join(' ')}
            onClick={() => window.innerWidth < 600 ? onClick() : null}
            to={linkRoute}
        >
            <i className={[classes.icon, 'material-icons'].join(' ')}>{icon}</i>
            <div className={classes.text}>{text}</div> 
        </NavLink>
    )
}