import React, { useContext } from 'react';
import classes from './ALink.module.css';
import { NavLink } from 'react-router-dom';
import { generalContext } from '../Main';

/**
 * Customizable button
 * @param {String} text text to show
 * @param {String} icon icon to show
 * @param {String} borderRadius is a rounded button
 * @param {Function} onClick function onClick
 * @param {String} linkRoute link of the page
 */
export const Link = ({ text, icon, borderRadius = '0px', onClick, linkRoute }) => {
    const { activeLink } = useContext(generalContext);

    return (
        <NavLink
            style={{ borderRadius: borderRadius }}
            className={[classes.link, (activeLink === linkRoute ? classes.active : '')].join(' ')}
            onClick={() => window.innerWidth < 600 ? onClick() : null}
            to={linkRoute}
        >
            <i className={[classes.icon, 'material-icons'].join(' ')}>{icon}</i>
            <div className={classes.text}>{text}</div> 
        </NavLink>
    )
}