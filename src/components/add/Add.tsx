import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

type AddProps = {
  slug: string,
  columns: GridColDef[],
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

const Add: React.FC<AddProps> = () => {

  return <div className='add'></div>
}
export default Add;
