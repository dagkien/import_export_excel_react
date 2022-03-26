import React,{useState} from 'react';
import * as XLSX from 'xlsx';
import '../public/css/listStudent.css';
import * as FileSaver from 'file-saver';
import { Button } from 'antd';
import axios from 'axios';

const ListStudent = () => {
  const [listRow, setListRow] = useState([]);
  // const [files, setFileUploaded] = useState([[]]);

  // const handleUpload = (e) => {
  //   e.preventDefault();
  
  //   let files = e.target.files, f = files[0];
  //   let reader = new FileReader();
  //   reader.onload = function (e) {
  //       let data = e.target.result;
  //       let readedData = XLSX.read(data, {type: 'binary'});
  //       const wsname = readedData.SheetNames[0];
  //       const ws = readedData.Sheets[wsname];
  
  //       /* Convert array to json*/
  //       const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
  //       setFileUploaded(dataParse);
  //   };
  //   reader.readAsBinaryString(f)
  // }
  
  const UploadProcess = () => {
    //Reference the FileUpload element.
    let fileUpload = document.getElementById("fileUpload");

    //Validate whether File is valid Excel file.
    let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            let reader = new FileReader();
            //For Browsers other than IE.
            if (reader.readAsBinaryString) {
                reader.onload = function (e) {
                    GetTableFromExcel(e.target.result);
                };
                reader.readAsBinaryString(fileUpload.files[0]);
            } else {
                //For IE Browser.
                reader.onload = function (e) {
                    let data = "";
                    let bytes = new Uint8Array(e.target.result);
                    for (let i = 0; i < bytes.byteLength; i++) {
                        data += String.fromCharCode(bytes[i]);
                    }
                    GetTableFromExcel(data);                    
                };
                reader.readAsArrayBuffer(fileUpload.files[0]);
            }
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid Excel file.");
    }
};
  const GetTableFromExcel = (data) => {
    
    //Read the Excel File data in binary
      let workbook = XLSX.read(data, {
          type: 'binary'
      });

      //get the name of First Sheet.
      let Sheet = workbook.SheetNames[0];
      
      //Read all rows from First Sheet into an JSON array.
      let excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[Sheet]);
      // console.log(excelRows);

      //Create a HTML Table element.
      let myTable  = document.createElement("table");

      //Add the header row.
      let row = myTable.insertRow(-1);

      //Add the header cells.
      let headerCell = document.createElement("TH");
      row.appendChild(headerCell);

      headerCell = document.createElement("TH");
      row.appendChild(headerCell);

      headerCell = document.createElement("TH");
      row.appendChild(headerCell);
      
      headerCell = document.createElement("TH");
      row.appendChild(headerCell);
      
      headerCell = document.createElement("TH");
      row.appendChild(headerCell);
      
      headerCell = document.createElement("TH");
      row.appendChild(headerCell);


      //Add the data rows from Excel file.
      for (let i = 0; i < excelRows.length; i++) {
          // console.log(excelRows[i]);
          let dataTable = {
            STT: excelRows[i].__EMPTY,
            Mon: excelRows[i].__EMPTY_1,
            MM: excelRows[i].__EMPTY_2,
            BM: excelRows[i].__EMPTY_3,
            W1: excelRows[i].__EMPTY_4,
            W2: excelRows[i].__EMPTY_5,
            W3: excelRows[i].__EMPTY_6,
            W4: excelRows[i].__EMPTY_7,
            W5: excelRows[i].__EMPTY_8,
            W6: excelRows[i].__EMPTY_9,
            W7: excelRows[i].__EMPTY_10,
            W8: excelRows[i].__EMPTY_11,
            w9: excelRows[i].__EMPTY_12,
            w10: excelRows[i].__EMPTY_13,
            w11: excelRows[i].__EMPTY_14,
            w12: excelRows[i].__EMPTY_15,
            w13: excelRows[i].__EMPTY_16,
            w14: excelRows[i].__EMPTY_17,
            note: excelRows[i].__EMPTY_18,
          }
          // console.log(dataTable);
          setListRow([...listRow,dataTable]);
          listRow.push(dataTable)
          //Add the data row.
          let row = myTable.insertRow(-1);

          //Add the data cells.__EMPTY_1
          let cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY;

          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_1;
          
          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_2;
          
          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_3;
          
          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_4;
          
          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_5;
          
          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_6;
          
          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_7;
          
          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_8;
          
          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_9;
          
          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_10;
          
          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_11;
          
          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_12;

          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_13;

          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_14;

          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_15;

          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_16;

          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_17;

          cell = row.insertCell(-1);
          cell.innerHTML = excelRows[i].__EMPTY_18;
      }
      

      let ExcelTable = document.getElementById("ExcelTable");
      ExcelTable.innerHTML = "";
      ExcelTable.appendChild(myTable);
  };

    
    const fileType ="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (apiData, fileName) => {
      const ws = XLSX.utils.json_to_sheet(apiData);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, fileName + fileExtension);
    };
      
  // const [data, setData] = React.useState([])
  const fileName = "Deadline"; // here enter filename for your excel file

  // React.useEffect(() => {
  //   const fetchData = () =>{
  //    axios.get('https://623e864ae8fbc4f1626feab0.mockapi.io/test').then(r => setData(r.data) )
  //   }
  //   fetchData()
  // }, [])

  console.log(listRow);
  return ( 
    <>
      <div style={{display: 'flex', justifyContent: "space-between", margin: "20px"}}>
      <input id="fileUpload" type="file" onChange={UploadProcess}/>
      <Button variant="warning" onClick={(e) => exportToCSV(listRow,fileName)}>Export</Button>
      </div>

      <div id="ExcelTable"></div>
    </>
   );
}
 
export default ListStudent;

