import React, { useState } from 'react';
import * as xlsx from 'xlsx/xlsx.mjs';

function FileUploadPage(props) {
    const changeHandler = (e) => {
        props.setFileName(e.target.files[0].name);
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                props.setRows(json.map((row, i) => { return { ...row, id: i } }))
                props.setHiipaRows(json.map((row, i) => { return { ...row, id: i, "client_name": `Jane Doe ${i}` } }))

            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }


    return (
        // <div className="FileUploadButton">
        <div style={{ display: 'flex', width: '50%', justifyContent: 'center' }}>
            <label htmlFor="file" className="FileUploadButton">Upload File</label>

            <input id="file" type="file" name="file" onChange={changeHandler} style={{ display: "none" }} />
        </div>
    )
}

export default FileUploadPage;