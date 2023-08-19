import readXlsxFile from 'read-excel-file/web-worker';

onmessage = function (event) {
    readXlsxFile(event.data).then((rows) => {
        postMessage({ data: rows });
    }).catch((err) => {
        postMessage({ error: err.message });
        // throw new Error('Error' + err.message);
    })
}