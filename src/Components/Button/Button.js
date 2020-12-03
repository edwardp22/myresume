import React from 'react';
import classes from './Button.module.css';

/**
 * Customizable button
 * @param {String} text text to show
 * @param {String} icon icon to show
 * @param {Number} rounded is a rounded button
 * @param {Boolean} active active button
 * @param {Function} onClick function onClick
 */
export const Button = ({ text = '', icon, rounded = 0, active = false, onClick }) => {
    return (
        <button
            style={{ borderRadius: rounded }}
            className={[classes.button, (active ? classes.active : '')].join(' ')}
            onClick={onClick()}
        >
            {icon}
            <span className={classes.text}>{text}</span>
        </button>
    )
}