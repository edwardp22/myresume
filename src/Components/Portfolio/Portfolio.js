import React, { useState, useEffect, useCallback } from 'react';
import classes from './Portfolio.module.css';
import MaterialTable from 'material-table';
import { toast } from 'react-toastify';
import { Grid } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';

export default function Portfolio() {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const getUsers = useCallback(async () => {
        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => { setUsers(json); setIsLoading(false); })
        .catch(error => { toast.error(error); setIsLoading(false); });
    }, []);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Portfolio</h1>

            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <p>Welcome to my online portfolio. Here you can browse throught some of the component implementations used in the diferent web applications designed by me.</p>
                    <p>All of the data displayed here is fetched from <a href='https://jsonplaceholder.typicode.com/'>https://jsonplaceholder.typicode.com/</a>.</p>
                </Grid>

                <Grid item xs={12}>
                    <h2>Material Table</h2>
                    <p>Material table is an easy to use, independient component that make use of the table component in Material UI framework. Normally I use this component for tables, because it have some build in useful features that help to use less code.</p>
                    <p>All of the features in Material Table can be implemented without this component, but we would need to code more.</p>
                </Grid>
                
                <Grid item xs={12}>
                    <MaterialTable
                        title='Users'
                        columns={[
                            { type: 'string', title: 'Name', field: 'name', minWidth: 250 },
                            { type: 'string', title: 'E-Mail', field: 'email', minWidth: 250 },
                        ]}
                        data={users}
                        options={
                            {
                                headerStyle: {
                                    color: '#800000',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                },
                                rowStyle: {
                                    fontSize: '12px'
                                },
                                grouping: false,
                                filtering: true,
                                paging: true,
                                exportButton: true,
                                search: true,
                                showTitle: true,
                                tableLayout: 'auto',
                                columnsButton: true,
                                sorting: true,
                                draggable: true
                            }
                        }
                        actions={[
                            {
                                icon: 'show_chart',
                                tooltip: 'Show Charts',
                                onClick: (event, rowData) => setSelectedUser(rowData)
                            }
                        ]}
                        isLoading={isLoading}
                    />
                </Grid>
            </Grid>
        </div>
    )
}