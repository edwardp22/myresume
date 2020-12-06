import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

Chartjs2Cust.propTypes = {
    data: PropTypes.object,
    selectedUser: PropTypes.object
}

export default function Chartjs2Cust({ data = {}, selectedUser = {} }) {
    return (
        <>
            <Grid item xs={12}>
                <h2>React Chart JS</h2>
                <p>One of the most requested functionalities for an app is presenting information through charts.</p>
                <p>This is one example of graphics, using information of the selected user.</p>
            </Grid>

            <Grid item xs={12}>
                <h3>{JSON.stringify(selectedUser) !== '{}' ? `${selectedUser.name}'s Todos` : 'Please select user'}</h3>
                <Doughnut 
                    data={data}
                />
            </Grid>
        </>
    )
}