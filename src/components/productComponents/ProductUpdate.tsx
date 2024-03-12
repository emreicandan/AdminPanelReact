import React, { useState } from 'react'
import { UpdateProductDto } from '../../dtos/UpdateProductDto'
import { useAppDispatch } from '../../store/hooks'
import { updateProduct } from '../../services/ProductService';

function ProductUpdate() {
    const dispatch = useAppDispatch();
    const [product , setProduct] = useState<UpdateProductDto>({
        id : "",
        categoryId : "",
        name : "",
        price : 0 ,
        description : "", 
        isActive : true
    })

    const setProductData =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setProduct({...product , [e.target.name]:e.target.value});
    }

    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch(updateProduct(product));
        setProduct({  id : "",
        categoryId : "",
        name : "",
        price : 0 ,
        description : "", 
        isActive : true});
    }

  return (
    <div>
          <div>
      <div className="container">
        <div className="row justify-content-center">
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <label className="form-label">Id</label>
              <input type="text" name='id' className="form-control" onChange={setProductData} />
            </div>
            <div className="mb-3">
              <label className="form-label">CategoryId</label>
              <input type="text" name='categoryId' className="form-control" onChange={setProductData} />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name='name' className="form-control" onChange={setProductData} />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input type="text" name='price' className="form-control" onChange={setProductData} />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input type="text" name='description' className="form-control" onChange={setProductData} />
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="isActive"/>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Add</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductUpdate
