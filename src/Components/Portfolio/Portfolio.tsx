import React from 'react';
import classes from './Portfolio.module.css';
import { Grid } from '@material-ui/core';

export default function Portfolio() {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Portfolio</h1>

            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <p>Welcome to my online portfolio. Here you can browse throught my projects, some personal and some working in companies.</p>
                </Grid>
            </Grid>
        </div>
    )
}