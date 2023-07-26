import React, { useState } from 'react';
import "./dataTable.scss"
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { QueryClient, useMutation } from '@tanstack/react-query'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { toast } from 'react-hot-toast'
type DataTableProps = {
  columns: GridColDef[],
  rows: object[],
  slug: string
};

const DataTable: React.FC<DataTableProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false)
  const [id, setId] = useState<number>()
  const queryClient = new QueryClient()

  const mutation = useMutation({
    mutationFn: (id: number) => {
      //call api to delete the item
      return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
        method: 'DELETE'
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}`])
      toast.error('cancel delete', {
        duration: 2000,
        position: 'top-center'
      })
    },
    onError: (error: any) => {
      toast.error('delete failed', {
        duration: 2000,
        position: 'top-center'
      })
      console.log(error)
    }


  })

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

  const handleDelete = (id: number) => {
    setOpen(true)
    setId(id)
  }

  const handleCancel = () => {
    setOpen(false)
    return
  }

  const handleConfirm = () => {
    setOpen(false)
    toast.success('Delete successfully', {
      duration: 2000,
      position: 'top-center'
    })
    mutation.mutate(id!)
  }


  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <div className='dataTable'>
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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Confirm Delete
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleCancel}>
              Cancel
            </Button>
            <Button color='error' onClick={handleConfirm}>delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}
export default DataTable;
