import Button from '@mui/material/Button';
import { UploadFileOutlined } from '@mui/icons-material';
import { Box, Container } from '@mui/material';
import { useEffect, useRef } from 'react';
import BasicAlerts from './alert';

export default function FileUpload({ setData, setLoading }) {

    let inputRef = useRef();
    let worker = null;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    worker = new Worker(new URL("./upload-file.js", import.meta.url));

    worker.onmessage = function (event) {
        if (event.data.data) {
            setLoading(false);
            setData(event.data);
            console.log(event.data)
        } else {
            setLoading(false);
        }
    }

    worker.onerror = function (event) {
        setLoading(false);
        console.error(event.message)
    }

    function onFileUpload() {
        inputRef.current.value = "";
        inputRef.current.click();
    }

    function fetchFileData(e) {
        const files = e.target.files;
        setLoading(true);
        worker.postMessage(files[0]);
    }

    return (
        <Container maxWidth="sm" className='p-6'>
            <Box className="border-2 border-blue-200 border-dashed p-8 flex flex-col items-center gap-4 h-max-content rounded-md cursor-pointer bg-gradient-to-b from-white to-blue-100 to-white-100" onClick={onFileUpload}>
                {/* <label className='text-xl'>Upload excel file</label> */}
                <UploadFileOutlined className='text-blue-500' sx={{ fontSize: '40px' }} />
                <Button variant="outlined" sx={{ borderRadius: '50px' }}>Upload File</Button>
                <input type="file" ref={inputRef} className='hidden' accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={fetchFileData} />
            </Box>
            <BasicAlerts />
        </Container>
    )
}