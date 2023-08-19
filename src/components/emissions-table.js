import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
const columns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 100
    },
    {
        field: 'company_name',
        headerName: 'Company Name',
        width: 200
    },
    {
        field: 'type_of_purchase',
        headerName: 'Type of Purchase',
        width: 200
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        width: 100
    },
    {
        field: 'date_of_purchase',
        headerName: 'Date of Purchase',
        width: 100
    },
    {
        field: 'emission_factor',
        headerName: 'Emission Factor',
        width: 200
    },
];

export default function EmissionsTable({ rows }) {
    return (
        <Container style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </Container>
    );
}
