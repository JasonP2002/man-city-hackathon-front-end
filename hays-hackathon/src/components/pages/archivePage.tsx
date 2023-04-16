import * as React from "react";
import Layout from "../layout/layout";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

export interface IArchivePageProps {}

const ArchivePage: React.FunctionComponent<IArchivePageProps> = (props) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "createdAt", headerName: "Created At", width: 200, type: "Date" },
    {
      field: "updatedAt",
      headerName: "Updated At",
      width: 150,
      type: "Date",
    },
    { field: "weigth", headerName: "Weight", width: 200, type: "number" },
    { field: "height", headerName: "Height", width: 200, type: "number" },
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

  for (let i = 0; i < data.length; i++) {
    rows[i] = data[i];
  }
  return (
    <Layout>
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} checkboxSelection={false} />
      </div>
    </Layout>
  );
};
export default ArchivePage;
