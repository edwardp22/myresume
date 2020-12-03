import React, { useContext } from 'react';
import classes from './Menu.module.css';
import { Link } from '../ALink/ALink';
import { generalContext } from '../Main';

export default function Menu({ toggleMenu }) {
    const { links } = useContext(generalContext);

    return (
        <ul className={classes.ul}>            
            {links.map(link => {                    
                return (
                    <li key={link.text}>
                        <Link 
                            borderRadius='50px' 
                            text={link.text} 
                            onClick={toggleMenu} 
                            icon={link.icon}
                        />
                    </li>
                )
            })}
        </ul>
    )
}