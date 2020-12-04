import React from 'react';
import classes from './Home.module.css';
import { LinkedIn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

export default function Home() {
    return (
        <div className={classes.container}>
            <div className={classes.data}>
                <h1 className={classes.name}>Edward Peña</h1>
                <h2 className={classes.title}>Web Developer</h2>
                <IconButton size='small' className={classes.linkedin}>
                    <LinkedIn fontSize='default' />
                </IconButton>
            </div>
        </div>
    )
}