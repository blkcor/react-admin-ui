import React from 'react';
import "./users.scss"
import DataTable from '../../components/dataTable/DataTable';
import { GridColDef } from '@mui/x-data-grid';
import { userRows } from "../../data"
import { Button } from '@mui/material';
import Add from '../../components/add/Add';
import { useQuery, useMutation } from '@tanstack/react-query'
type UserProps = {

};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users: React.FC<UserProps> = () => {
  // Queries
  const { isLoading, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8800/api/users").then(
        (res) => res.json()
      ),
  });



  const [open, setOpen] = React.useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <Button className='button' variant="outlined" onClick={() => setOpen(prev => !prev)}>Add New User</Button>

      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="user" columns={columns} rows={data} />
      )}
      {open && <Add slug='user' columns={columns} setOpen={setOpen} />}
    </div>
  )

}
export default Users;
