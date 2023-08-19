import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export default function BasicAlert({ open }) {

    return (
        <div>
            <Snackbar
                open={open}
                message="Note archived"
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                width={300}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    Error while loading file
                </Alert>
            </Snackbar>
        </div>
    );
}