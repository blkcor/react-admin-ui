import React from 'react';
import "./dataTable.scss"
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
type DataTableProps = {
  columns: GridColDef[],
  rows: object[],
  slug: string
};

const handleDelete = (id: number | string) => {
  //call api to delete the item
  console.log(id)
}

const DataTable: React.FC<DataTableProps> = (props) => {
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className='action'>
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      )
    }
  }
  return <div className='dataTable'>
    <DataGrid
      className='dataGrid'
      rows={props.rows}
      columns={[...props.columns, actionColumn]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: {
            debounceMs: 500,
          }
        }
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
      disableColumnFilter
      disableDensitySelector
      disableColumnSelector
    />
  </div>
}
export default DataTable;
