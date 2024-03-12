import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Modal } from 'react-bootstrap';
import { IoIosClose } from "react-icons/io";
import { deleteProduct, getProduct } from '../../services/ProductService';
import ProductAdd from './ProductAdd';
import ProductUpdate from './ProductUpdate';

function ProductList() {
    const [showModal , setShowModal] = useState<boolean>(false)
    const [showEditModal , setShowEditModal] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const product = useAppSelector((state)=>state.product.data);
    console.log(product)

    const handleShow = () =>{
        setShowModal(false);
        setShowEditModal(false)
      }

      useEffect(()=>{
        dispatch(getProduct());
      },[])

      const deletedProduct =(id:string)=>{
        dispatch(deleteProduct(id));
      }
  return (
    <div>
        <div className="row">
    <div className="col-12">
        <div className="page-title-box d-flex align-items-center justify-content-between">
            <div className="page-title-right">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item active">Product Page</li>
                </ol>
            </div>
            
        </div>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                    <button type="button" onClick={()=>setShowModal(true)} className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create Product</button>
                        <table className="table table-striped table-bordered nowrap"/>
                        <div className="table-responsive">

                            <table className="table table-striped table-bordered nowrap">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                {product?.map((product,index)=>{
                                    return<tbody key={index}>
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td>
                                 <button onClick={()=>setShowEditModal(!showEditModal)} className="btn btn-sm btn-warning mt-2 me-2"
                                 data-bs-toggle="modal" data-bs-target=".edit-modal"
                                 ><span>Edit</span></button>
                                 <button onClick={()=>deletedProduct(product.id)} className="btn btn-sm btn-danger mt-2"><span>Delete</span></button>
                              </td>
                                    </tr>
                                </tbody>
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Modal show={showModal || showEditModal}>
    <Modal.Header className="modal-header">
      <Modal.Title>
        {showModal ? "Add Product" : "" || showEditModal ? "Update Product" : ""}
      </Modal.Title>
      <button className="border border-none ms-auto" onClick={handleShow}><IoIosClose/></button>
    </Modal.Header>
    <Modal.Body>
      {showModal ? <ProductAdd/> : "" || showEditModal ? <ProductUpdate/> : ""}
    </Modal.Body>
  </Modal>
    </div>
  )
}

export default ProductList
