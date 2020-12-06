import React from 'react';
import classes from './Menu.module.css';
import Link from '../ALink/ALink';
import { links } from './Links';

export default function Menu(
    { toggleMenu } :
    { toggleMenu?: Function }
): JSX.Element {
    const onClickedLink = () : void => window.innerWidth < 600 && toggleMenu ? toggleMenu() : null;

    return (
        <ul className={classes.ul}>
            {links.map(link =>
                <li key={link.text}>
                    <Link
                        borderRadius='50px'
                        text={link.text}
                        onClick={onClickedLink}
                        icon={link.icon}
                        linkRoute={link.link}
                    />
                </li>
            )}
        </ul>
    )
}