import React, { useEffect } from 'react';
import "./products.scss"
type ProductsProps = {

};

const Products: React.FC<ProductsProps> = () => {

  useEffect(() => {
    console.log("products component loaded")
  })

  return <div className='products'>Products</div>
}
export default Products;
