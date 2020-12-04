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

export default function Link({ text = '', icon = '', borderRadius = '0px', onClick = ()=>{}, linkRoute = '#', active = false }) {
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