import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles'
import Radio from "@mui/material/Radio";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import style from '../styles/select.module.scss'
import { height } from '@mui/system';

const myTheme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&.Mui-selected": {
            backgroundColor: "#D4EDDA",
           
          }
        }
      }
    }
  }
});

const rows = [
  { id: 1, firstName: "sales", lastName: "Obrien" },
  { id: 2, firstName: "Kate", lastName: "Miles" },
  { id: 3, firstName: "Kim", lastName: "Jimenez" },
  { id: 4, firstName: "Juana", lastName: "Thornton" },
  { id: 5, firstName: "Prashant", lastName: "Jangam" },
  { id: 6, firstName: "sales", lastName: "Obrien" },
  { id: 7, firstName: "Kate", lastName: "Miles" },
  { id: 8, firstName: "Kim", lastName: "Jimenez" },
  { id: 9, firstName: "Juana", lastName: "Thornton" },
  { id: 10, firstName: "Prashant", lastName: "Jangam" },
  { id: 11, firstName: "sales", lastName: "Obrien" },
  { id: 12, firstName: "Kate", lastName: "Miles" },
  { id: 13, firstName: "Kim", lastName: "Jimenez" },
  { id: 14, firstName: "Juana", lastName: "Thornton" },
  { id: 15, firstName: "Prashant", lastName: "Jangam" },
  { id: 16, firstName: "sales", lastName: "Obrien" },
  { id: 17, firstName: "Kate", lastName: "Miles" },
  { id: 18, firstName: "Kim", lastName: "Jimenez" },
  { id: 19, firstName: "Juana", lastName: "Thornton" },
  { id: 20, firstName: "Prashant", lastName: "Jangam" },
  { id: 21, firstName: "sales", lastName: "Obrien" },
  { id: 22, firstName: "Kate", lastName: "Miles" },
  { id: 23, firstName: "Kim", lastName: "Jimenez" },
  { id: 24, firstName: "Juana", lastName: "Thornton" },
  { id: 25, firstName: "Prashant", lastName: "Jangam" },
  { id: 26, firstName: "sales", lastName: "Obrien" },
  { id: 27, firstName: "Kate", lastName: "Miles" },
  { id: 28, firstName: "Kim", lastName: "Jimenez" },
  { id: 29, firstName: "Juana", lastName: "Thornton" },
  { id: 30, firstName: "Prashant", lastName: "Jangam" },
  { id: 31, firstName: "sales", lastName: "Obrien" },
  { id: 32, firstName: "Kate", lastName: "Miles" },
  { id: 33, firstName: "Kim", lastName: "Jimenez" },
  { id: 34, firstName: "Juana", lastName: "Thornton" },
  { id: 35, firstName: "Prashant", lastName: "Jangam" },
  { id: 36, firstName: "sales", lastName: "Obrien" },
  { id: 37, firstName: "Kate", lastName: "Miles" },
  { id: 38, firstName: "Kim", lastName: "Jimenez" },
  { id: 39, firstName: "Juana", lastName: "Thornton" },
  { id: 40, firstName: "Prashant", lastName: "Jangam" },
  { id: 41, firstName: "sales", lastName: "Obrien" },
  { id: 42, firstName: "Kate", lastName: "Miles" },
  { id: 43, firstName: "Kim", lastName: "Jimenez" },
  { id: 44, firstName: "Juana", lastName: "Thornton" },
  { id: 45, firstName: "Prashant", lastName: "Jangam" },
  { id: 46, firstName: "sales", lastName: "Obrien" },
  { id: 47, firstName: "Kate", lastName: "Miles" },
  { id: 48, firstName: "Kim", lastName: "Jimenez" },
  { id: 49, firstName: "Juana", lastName: "Thornton" },
  { id: 50, firstName: "Prashant", lastName: "Jangam" },
  { id: 51, firstName: "sales", lastName: "Obrien" },
  { id: 52, firstName: "Kate", lastName: "Miles" },
  { id: 53, firstName: "Kim", lastName: "Jimenez" },
  { id: 54, firstName: "Juana", lastName: "Thornton" },
  { id: 55, firstName: "Prashant", lastName: "Jangam" },
  { id: 56, firstName: "sales", lastName: "Obrien" },
  { id: 57, firstName: "Kate", lastName: "Miles" },
  { id: 58, firstName: "Kim", lastName: "Jimenez" },
  { id: 59, firstName: "Juana", lastName: "Thornton" },
  { id: 60, firstName: "Prashant", lastName: "Jangam" },
  { id: 61, firstName: "sales", lastName: "Obrien" },
  { id: 62, firstName: "Kate", lastName: "Miles" },
  { id: 63, firstName: "Kim", lastName: "Jimenez" },
  { id: 64, firstName: "Juana", lastName: "Thornton" },
  { id: 65, firstName: "Prashant", lastName: "Jangam" },
  { id: 66, firstName: "sales", lastName: "Obrien" },
  { id: 67, firstName: "Kate", lastName: "Miles" },
  { id: 68, firstName: "Kim", lastName: "Jimenez" },
  { id: 69, firstName: "Juana", lastName: "Thornton" },
  { id: 70, firstName: "Prashant", lastName: "Jangam" },
  { id: 71, firstName: "sales", lastName: "Obrien" },
  { id: 72, firstName: "Kate", lastName: "Miles" },
  { id: 73, firstName: "Kim", lastName: "Jimenez" },
  { id: 74, firstName: "Juana", lastName: "Thornton" },
  { id: 75, firstName: "Prashant", lastName: "Jangam" },
  { id: 76, firstName: "sales", lastName: "Obrien" },
  { id: 77, firstName: "sales", lastName: "Obrien" },
  { id: 78, firstName: "Kim", lastName: "Jimenez" },
  { id: 79, firstName: "Juana", lastName: "Thornton" },
  { id: 80, firstName: "Prashant", lastName: "Jangam" },
];
let radioChecked = [rows[0].id];

export default function Select() {
  const [selectionModel, setSelectionModel] = useState(radioChecked);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [drawerOpen, setDrawerOpen] = useState(false);
  radioChecked = selectionModel;

  const selectedRow = rows.filter((item) => {
    return item.id === selectionModel[0];
  });
  const columns = [
    {
      field: "radiobutton",
      headerName: "",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Radio checked={radioChecked[0] === params.id} value={params.id} />
      )
    },
    {
      field: "id",
      headerName: "ID"
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 150
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150
    },
    {
      field: "Print",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
            setDrawerOpen(true)
  
            }}
          >
            انتخاب
          </Button>
        );
      },}
  ];
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>

      <DataGrid  sx={{height:"400px"}}
        rows={rows}
        columns={columns}
        autoHeight
        selectionModel={selectionModel}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        rowsPerPage={10}
        rowsPerPageOptions={[10,20,30,40,100]}
        />
        <SwipeableDrawer open={drawerOpen} onClose={()=>setDrawerOpen(false)} anchor="bottom" width={100} >
          <div className={style.drawerSelect}>

        You have selected: {selectedRow[0].firstName} {selectedRow[0].lastName}
          </div>
        </SwipeableDrawer>
        </ThemeProvider>
      
    </div>
  );
}
