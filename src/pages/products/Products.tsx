import React from 'react';
import "./products.scss"
import { Button } from '@mui/material';
import Add from '../../components/add/Add';
import DataTable from '../../components/dataTable/DataTable';
import { products } from '../../data';
import { GridColDef } from '@mui/x-data-grid';
type ProductsProps = {

};

const Products: React.FC<ProductsProps> = () => {

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];


  const [open, setOpen] = React.useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <Button className='button' variant="outlined" onClick={() => setOpen(prev => !prev)}>Add New Product</Button>

      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug='products' columns={columns} setOpen={setOpen} />}
    </div>
  )
}
export default Products;
