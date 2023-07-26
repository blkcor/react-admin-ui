import { GridColDef } from '@mui/x-data-grid';
import React from 'react';
import "./add.scss"
type AddProps = {
  slug: string,
  columns: GridColDef[],
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

const Add: React.FC<AddProps> = (props: AddProps) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //call api to add new item
    console.log(e)
    props.setOpen(false)
  }

  return (
    <div className='add'>
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>X</span>
        <h1>Add New {props.slug}</h1>
        <form action="">
          {props.columns
            .filter(column => column.field !== 'id' && column.field !== 'img')
            .map((column) => {
              return (
                <div key={column.headerName} className="item">
                  <label>{column.headerName}</label>
                  <input type={column.type} placeholder={column.field} />
                </div>
              )
            }
            )}
          <button onClick={() => handleSubmit}>Send</button>
        </form>
      </div>
    </div>
  )
}
export default Add;
