import React,{useEffect,useState} from 'react'
import { Table } from 'react-bootstrap'
import { getCategory } from '../services/ProductService'

const Category = () => {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    let mounted = true;
    let category = "Electronics";
    getCategory(category).then(data=>{
        if(mounted){
            setProducts(data)
        }
    })
    return () => mounted = false
  },[]);

  return (
    <div className="row siderow">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock Quantity</th>
                    <th>Manufacturer</th>
                    <th>Supplier</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>{
                   return <tr key={product.id}>
                        <td>{product.productID}</td>
                        <td>{product.productName}</td>
                        <td>{product.cateGory}</td>
                        <td>{product.price}</td>
                        <td>{product.stockQuantity}</td>
                        <td>{product.manufacturer}</td>
                        <td>{product.supplier}</td>
                    </tr>
                })}
                
            </tbody>
        </Table>
    </div>
  ); 
}

export default Category;