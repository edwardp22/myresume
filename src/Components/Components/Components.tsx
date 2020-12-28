import React, { useState, useEffect, useCallback } from 'react';
import classes from './Components.module.css';
import { toast } from 'react-toastify';
import { Grid } from '@material-ui/core';
import MaterialTableCust from './MaterialTableCust';
import Chartjs2Cust from './Chartjs2Cust';
import BarCode from './BarCode';

export default function Components() {
    const [isUserLoading, setIsUserLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState<{ id: number, name: string, email: string }>();
    const [todosGraph, setTodosGraph] = useState<{ labels: string[], datasets: object[] }>();

    const getUsers = useCallback(() => {
        setIsUserLoading(true);

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => { setUsers(json); setIsUserLoading(false); })
        .catch(error => { toast.error(error); setIsUserLoading(false); });
    }, []);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    useEffect(() => {
        if (selectedUser) {
            fetch(`https://jsonplaceholder.typicode.com/todos?userId=${selectedUser.id}`)
            .then(response => response.json())
            .then((json: any[]) => { 
                const graphState = {
                    labels: ['Completed', 'Pending'],
                    datasets: [{
                        data: [
                            json.filter((todo: any) => todo.completed).length, 
                            json.filter((todo: any) => !todo.completed).length
                        ],
                        backgroundColor: [
                            'green', 
                            'red'
                        ]
                    }]
                };

                setTodosGraph(graphState);
            })
            .catch(error => { toast.error(error); });
        }
    }, [selectedUser]);

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Components Implementations</h1>

            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <p>Here you can browse throught some of the component implementations used in the different web applications designed by me.</p>
                    <p>All of the data displayed here is fetched from <a href='https://jsonplaceholder.typicode.com/'>https://jsonplaceholder.typicode.com/</a>.</p>
                </Grid>

                <MaterialTableCust 
                    data={users} 
                    isLoading={isUserLoading}
                    setSelectedUser={setSelectedUser}
                />

                <Chartjs2Cust 
                    data={todosGraph}
                    selectedUser={selectedUser}
                />

                <BarCode selectedUser={selectedUser} />
            </Grid>
        </div>
    )
}