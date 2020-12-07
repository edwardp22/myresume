import React from 'react';
import { Grid } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

export default function Chartjs2Cust(
    { data = { labels: ['No Data'], datasets: [{ data: [1] }] }, selectedUser = {} } :
    { data?: any, selectedUser?: any }
) {
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