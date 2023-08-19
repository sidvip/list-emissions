import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FileUpload from './components/file-upload';
import EmissionsTable from './components/emissions-table';
import LinearDeterminate from './components/progress';

export default function App() {
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);

  function createRows() {
    return data.slice(1,).map((ele, id) => ({
      id: id + 1,
      company_name: ele[6],
      type_of_purchase: ele[5],
      quantity: ele[3],
      date_of_purchase: ele[1],
      emission_factor: ele[7],
    }))
  }

  return (
    <Box sx={{ flexGrow: 1, maxHeight: '600px' }}>
      <Grid container direction="column" gap={2}>
        <Grid item>
          <Box sx={{ height: '25vh' }} className='p-2'>
            <FileUpload setData={setData} setLoading={setLoading} />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ height: '70vh' }}>
            {isLoading ? <LinearDeterminate /> : null}
            {data === null ? <div className='text-center text-3xl text-blue-300 italic flex items-center justify-center h-[70%]'>Your loaded data will be displayed here</div> : <EmissionsTable rows={createRows()} />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

