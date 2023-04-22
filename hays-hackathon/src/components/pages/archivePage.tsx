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
import { Box } from "@mui/system";

export interface IArchivePageProps {}

const ArchivePage: React.FunctionComponent<IArchivePageProps> = (props) => {
  function CustomToolbar() {
    return (
      <GridToolbarContainer
        sx={{
          width: 100,
        }}
      >
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70, flex: 0.3 },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "weigth",
      headerName: "Weight",
      width: 150,
      type: "number",
      flex: 0.3,
    },
    {
      field: "height",
      headerName: "Height",
      width: 150,
      type: "number",
      flex: 0.3,
    },
    {
      field: "observations",
      headerName: "Observations",
      width: 250,
      editable: true,
      sortable: false,
      flex: 0.3,
    },
    {
      field: "available",
      headerName: "Available",
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
  const processRowUpdate = (newRow: any) => {
    const updatedRow = { ...newRow, isNew: false };
    axios
      .patch(`http://localhost:8888/player/${updatedRow.id}`, {
        observations: updatedRow.observations,
        available: updatedRow.available,
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
