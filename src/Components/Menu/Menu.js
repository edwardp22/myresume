import React from 'react';
import classes from './Menu.module.css';
import PropTypes from 'prop-types';
import Link from '../ALink/ALink';
import { links } from './Links';

Menu.propTypes = {
    toggleMenu: PropTypes.func
}

export default function Menu({ toggleMenu = ()=>{} }) {
    return (
        <ul className={classes.ul}>
            {links.map(link =>
                <li key={link.text}>
                    <Link
                        borderRadius='50px'
                        text={link.text}
                        onClick={toggleMenu}
                        icon={link.icon}
                        linkRoute={link.link}
                        // active={activeLink === link.link}
                    />
                </li>
            )}
        </ul>
    )
}