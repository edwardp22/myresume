import React, { useContext } from 'react';
import classes from './Menu.module.css';
import { Link } from '../ALink/ALink';
import { generalContext } from '../Main';

export default function Menu() {
    const { links } = useContext(generalContext);

    return (
        <ul className={classes.menu}>
            <li className={classes.menu}>
                {links.map(link => {                    
                    return (
                        <span id={link.text}>
                            <Link 
                                borderRadius='50px' 
                                text={link.text} 
                                onClick={() => {}} 
                                icon={link.icon}
                            />
                        </span>
                    )
                })}                
            </li>
        </ul>
    )
}