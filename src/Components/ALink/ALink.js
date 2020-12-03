import React from 'react';
import classes from './ALink.module.css';

/**
 * Customizable button
 * @param {String} text text to show
 * @param {String} icon icon to show
 * @param {String} borderRadius is a rounded button
 * @param {Boolean} active active button
 * @param {Function} onClick function onClick
 */
export const Link = ({ text, icon, borderRadius = '0px', active = false, onClick }) => {
    return (
        <a
            style={{ borderRadius: borderRadius, padding: '10px' }}
            className={[classes.link, (active ? classes.active : '')].join(' ')}
            onClick={() => window.innerWidth < 600 ? onClick() : null}
            href={'#' + text}
        >
            <i className={[classes.icon, 'material-icons'].join(' ')}>{icon}</i>
            <div className={classes.text}>{text}</div> 
        </a>
    )
}