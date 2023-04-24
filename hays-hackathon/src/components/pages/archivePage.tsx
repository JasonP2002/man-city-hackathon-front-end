import * as React from "react";
import Layout from "../layout/layout";
import axios from "axios";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useState } from "react";

export interface IArchivePageProps {}

const ArchivePage: React.FunctionComponent<IArchivePageProps> = (props) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1 to get the correct month
  const day = currentDate.getDate();

  // Format the date in DD/MM/YYYY format
  const formattedDate = `${day}/${month}/${year}`;

  function CustomToolbar() {
    return (
      <GridToolbarContainer
        sx={{
          width: 100,
        }}
      >
        <GridToolbarExport
          csvOptions={{
            fileName: `${formattedDate}PlayerData`,
          }}
        />
      </GridToolbarContainer>
    );
  }
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70, flex: 0.3 },
    {
      field: "name",
      headerName: "NAME",
      minWidth: 200,
      maxWidth: 400,
      flex: 0.4,
    },
    {
      field: "position",
      headerName: "POSITION",
      width: 250,
      minWidth: 150,
      flex: 0.3,
      editable: true,
    },
    {
      field: "weigth",
      headerName: "WEIGHT",
      width: 150,
      type: "number",
      flex: 0.3,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "height",
      headerName: "HEIGHT",
      width: 150,
      type: "number",
      flex: 0.3,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "observations",
      headerName: "OBSERVATIONS",
      width: 250,
      editable: true,
      sortable: false,
      flex: 0.3,
    },
    {
      field: "available",
      headerName: "AVAILABLE",
      width: 150,
      editable: true,
      sortable: false,
      type: "boolean",
      flex: 0.3,
    },
  ];

  const rows = [];
  const [data, setData] = useState("");
  const getAllData = () => {
    axios
      .get("http://localhost:8888/player")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getAllData();
  }, []);
  console.log(data);
  const processRowUpdate = (newRow: any) => {
    const updatedRow = { ...newRow, isNew: false };
    console.log(updatedRow);
    axios
      .patch(`http://localhost:8888/player/${updatedRow.id}`, {
        observations: updatedRow.observations,
        available: updatedRow.available,
        position: updatedRow.position,
      })
      .then((response) => {
        console.log(updatedRow);
      })
      .catch((error) => {
        console.log(error);
      });
    return updatedRow;
  };

  for (let i = 0; i < data.length; i++) {
    rows[i] = data[i];
  }
  return (
    <Layout>
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection={false}
          processRowUpdate={processRowUpdate}
          disableRowSelectionOnClick
          slots={{
            toolbar: CustomToolbar,
          }}
        />
      </div>
    </Layout>
  );
};
export default ArchivePage;
