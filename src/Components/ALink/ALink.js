import React from 'react';
import classes from './ALink.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

Link.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    borderRadius: PropTypes.string,
    onClick: PropTypes.func,
    linkRoute: PropTypes.string,
    active: PropTypes.bool
}

/**
 * Customizable Link
 * @param {String} text text to show
 * @param {String} icon icon to show
 * @param {String} borderRadius is a rounded button
 * @param {Function} onClick function onClick
 * @param {String} linkRoute link of the page
 * @param {Boolean} active active link
 */
export default function Link({ text, icon, borderRadius = '0px', onClick, linkRoute, active }) {
    return (
        <NavLink
            style={{ borderRadius: borderRadius }}
            className={[classes.link, (active ? classes.active : '')].join(' ')}
            onClick={() => window.innerWidth < 600 ? onClick ? onClick() : null : null}
            to={linkRoute}
        >
            <i className={[classes.icon, 'material-icons'].join(' ')}>{icon}</i>
            <div className={classes.text}>{text}</div> 
        </NavLink>
    )
}