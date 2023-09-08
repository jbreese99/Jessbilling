import React, { useState } from 'react';
import 'react-dropdown/style.css';
import { data } from '../../dsmCodes';

function SingleRow(props) {
    return (
        <div className='singleRowContainer' key={`singleRowContainer-${props.row.id}`}>
            <div className='rowHeader' key={`rowHeader-${props.row.id}`}>
                <div className='rowTitle' key={`rowTitle-${props.row.id}`}>{props.row.client_name}</div>
                <div className='rowDate' key={`rowDate-${props.row.id}`}>{props.row.date_of_service}</div>
            </div>
            <div className='rowDetails' key={`rowDetails-${props.row.id}`}>
                <div className='clinicianName' key={`clinicianName-${props.row.id}`}>{props.row.clinician_name}</div>
                <div className='officeName' key={`officeName-${props.row.id}`}>{props.row.office_name}</div>
                <div className='status' key={`status-${props.row.id}`}>{props.row.status}</div>
            </div>
            <div className='rowFillIn'>
                <div className='diagnosis'>
                    {props.row.Diagnosis || "None"}
                </div>
                <div className='CPT'>
                    <select
                        value={props.row['CPT Code']}
                        onChange={(e) => props.updateRowCPT(props.row.id, e.target.value)}
                    >
                        <option key={`CPT-${props.row.id}-90834`} value={"90834"}>90834</option>
                        <option key={`CPT-${props.row.id}-90891`} value={"90791"}>90791</option>
                        <option key={`CPT-${props.row.id}-90846`} value={"90846"}>90846</option>
                    </select>

                    <select
                        value={props.row['Charge Amt']}
                        onChange={(e) => props.updateCharge(props.row.id, e.target.value)}
                    >
                        <option key={`Charge-${props.row.id}-180`} value={"180"}>180</option>
                        <option key={`Charge-${props.row.id}-150`} value={"150"}>150</option>
                    </select>

                </div>
                <div className='Diagnosis'>
                    <select
                        className='DiagnosisSelect'
                        value={props.row['Diagnosis']}
                        onChange={(e) => props.updateRowDiagnosis(props.row.id, e.target.value)}
                        key={`DiagnosisSelect${props.row.id}`}
                    >
                        <option value="" selected>None Selected</option>
                        {
                            data.map((element, index) =>
                                <option key={`DiagnosisSelect-${props.row.id}-${index}`} value={element.Code}>{`${element.Code} - ${element.Name}`}</option>
                            )
                        }

                    </select>
                </div>
            </div>
        </div>

    )
}

export default SingleRow;