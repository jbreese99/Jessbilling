import React, { useState } from 'react';
import './App.css';
import FileUploadPage from './components/FileUploadPage/FileUploadPage';
import DisplayRows from './components/DisplayRows/DisplayRows';

function App() {
  const [rows, setRows] = useState([]);
  const [hiipaRows, setHiipaRows] = useState([]);
  const [fileName, setFileName] = useState(undefined);



  return (
    <div className="App">

      {rows.length === 0 ? <FileUploadPage setRows={setRows} setFileName={setFileName} setHiipaRows={setHiipaRows} /> : ""}
      {rows.length > 0 ? <DisplayRows rows={rows} setRows={setRows} fileName={fileName} hiipaRows={hiipaRows} setHiipaRows={setHiipaRows} /> : ""}

    </div>
  );
}

export default App;
