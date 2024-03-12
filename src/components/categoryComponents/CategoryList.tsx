import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteCategory, getCategory } from '../../services/CategoryService';
import { Modal } from 'react-bootstrap';
import { IoIosClose } from 'react-icons/io';
import CategoryAdd from './CategoryAdd';
import CategoryUpdate from './CategoryUpdate';

function CategoryList() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.category.data);


    const deletedCategory = (id: string) => {
        dispatch(deleteCategory(id));
    };
    const handleShow = () => {
        setShowModal(false);
        setShowEditModal(false);
    };
    console.log(categories)
    useEffect(() => {
        dispatch(getCategory());
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item active">Category Page</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <button type="button" onClick={() => setShowModal(true)} className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create Category</button>
                                    <table className="table table-striped table-bordered nowrap" />
                                    <div className="table-responsive">

                                        <table className="table table-striped table-bordered nowrap">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                </tr>
                                            </thead>
                                            {categories?.map((category, index) => {
                                                return <tbody key={index}>
                                                    <tr>
                                                        <td>{category.name}</td>
                                                        <td>
                                                            <button onClick={() => setShowEditModal(!showEditModal)} className="btn btn-sm btn-warning mt-2 me-2"
                                                                data-bs-toggle="modal" data-bs-target=".edit-modal"
                                                            ><span>Edit</span></button>
                                                            <button onClick={() => deletedCategory(category.id)} className="btn btn-sm btn-danger mt-2"><span>Delete</span></button>
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
                <Modal.Header>
                    <Modal.Title>
                        {showModal ? "Category Add" : "" || showEditModal ? "Category Update" : ""}
                    </Modal.Title>
                    <button className="border border-none ms-auto" onClick={handleShow}><IoIosClose /></button>
                </Modal.Header>
                <Modal.Body>
                    {showModal ? <CategoryAdd /> : "" || showEditModal ? <CategoryUpdate /> : ""}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CategoryList
