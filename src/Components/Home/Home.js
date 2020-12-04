import React from 'react';
import classes from './Home.module.css';
import { LinkedIn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

export default function Home() {
    return (
        <div className={classes.container}>
            <div className={classes.data}>
                <h1 className={classes.name}>Edward Peña</h1>
                <h2 className={classes.title}>Movil - Web Developer</h2>
                <IconButton size='small' className={classes.linkedin} onClick={() => window.open('https://www.linkedin.com/in/edward-abraham-peña-espinal-176aa965', '_blank')}>
                    <LinkedIn fontSize='default' />
                </IconButton>
            </div>
        </div>
    )
}