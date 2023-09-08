import React, { useState } from 'react';
import SingleRow from '../SingleRow/SingleRow';
import xlsx from "json-as-xlsx"

function DisplayRows(props) {
    function downloadFile() {
        let data = [{
            sheet: "book1",
            columns: [
                { label: "Client Name", value: "client_name" },
                { label: "Date", value: "date_of_service" },
                { label: "Office", value: "office_name" },
                { label: "Clinician", value: "clinician_name" },
                { label: "Diagnosis", value: "Diagnosis" },
                { label: "CPT Code", value: "CPT Code" },
                { label: "Charge", value: "Charge Amt" },
                { label: "Status", value: "status" }
            ],
            content: props.rows
        }]
        let settings = {
            fileName: `${props.fileName}-submit`, // Name of the resulting spreadsheet
            extraLength: 3, // A bigger number means that columns will be wider
            writeMode: "writeFile", // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
            writeOptions: {}, // Style options from https://docs.sheetjs.com/docs/api/write-options
            RTL: false, // Display the columns from right-to-left (the default value is false)
        }

        xlsx(data, settings);
    }

    function switchHiipa() {
        let a = props.hiipaRows.concat([]);
        let b = props.rows.concat([]);
        props.setRows(a);
        props.setHiipaRows(b);
    }

    function updateRowCPT(rowId, value) {
        let a = props.rows.map((row) => {
            if (row.id == rowId) {
                return { ...row, 'CPT Code': value }
            }
            else return row;
        })
        props.setRows(a);
    }

    function updateRowDiagnosis(rowId, value) {
        let a = props.rows.map((row) => {
            if (row.id == rowId) {
                return { ...row, 'Diagnosis': value }
            }
            else return row;
        })
        props.setRows(a);
    }

    function updateCharge(rowId, value) {
        let a = props.rows.map((row) => {
            if (row.id == rowId) {
                return { ...row, 'Charge Amt': value }
            }
            else return row;
        })
        props.setRows(a);
    }


    return (
        <div style={{ height: "100%" }}>
            <button onClick={downloadFile}>Download</button>
            <button onClick={switchHiipa}>HIIPA</button>
            <div className='rowsContainer'>

                {props.rows.map((row, index) =>

                    <SingleRow key={`FromDisplayRows-${row.id}-${index}`} row={row} updateRowCPT={updateRowCPT} updateRowDiagnosis={updateRowDiagnosis} updateCharge={updateCharge} />
                )}
            </div>
        </div>

    )
}

export default DisplayRows;