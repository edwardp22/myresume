import React from 'react';
import MaterialTable from 'material-table';
import { Grid } from '@material-ui/core';

export default function MaterialTableCust(
    { data = [], isLoading = false, setSelectedUser } :
    { data?: any[], isLoading?: boolean, setSelectedUser: Function }
) : JSX.Element {
    return (
        <>
            <Grid item xs={12}>
                <h2>Material Table</h2>
                <p>Material table is an easy to use, independient component that make use of the table component in Material UI framework. Normally I use this component for tables, because it have some build in useful features that help to use less code.</p>
                <p>All of the features in Material Table can be implemented without this component, but we would need to code more.</p>
            </Grid>

            <Grid item xs={12}>
                <MaterialTable
                    title='Users'
                    columns={[
                        { type: 'string', title: 'Name', field: 'name' },
                        { type: 'string', title: 'E-Mail', field: 'email' },
                    ]}
                    data={data}
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
                            onClick: (_event: any, rowData: any) => setSelectedUser(rowData)
                        }
                    ]}
                    isLoading={isLoading}
                />
            </Grid>
        </>
    )    
}