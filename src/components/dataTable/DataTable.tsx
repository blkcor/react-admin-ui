import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const [confirmDelete, setConfirmDelete] = useState(false); // Track whether "Confirm" button is clicked

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
        method: "delete",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}`]);
    }
  });

  const handleDelete = (id: number) => {
    // Open the dialog
    setIsOpen(true);
    setIdToDelete(id);
    setConfirmDelete(true);
  };
  const handleCancelDelete = () => {
    // Cancel the delete action
    setConfirmDelete(false);
    toast("Cancel delete", {
      duration: 2000,
      icon: "⚠️",
      position: "top-center",
    })
    setIdToDelete(0);
  };
  const handleConfirmDelete = () => {
    // Confirm and perform the delete action
    mutation.mutate(idToDelete);
    toast.success("Delete successfully", {
      duration: 2000,
      position: "top-center",
    })
    setConfirmDelete(false);
    setIsOpen(false);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {

      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
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
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
      <Dialog
        open={isOpen && confirmDelete}
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
          <Button autoFocus onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button color='error' onClick={handleConfirmDelete} >delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DataTable;
