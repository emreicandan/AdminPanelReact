import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteUser, getUsers } from "../../services/UserService";
import { IoIosClose } from "react-icons/io";
import { Modal } from "react-bootstrap";
import UserAdd from "./UserAdd";
import UserUpdate from "./UserUpdate";


function UserList() {

  const [showModal , setShowModal] = useState(false)
  const [showEditModal , setShowEditModal] = useState(false);
  const dispatch = useAppDispatch();


  const deletedUser = (id:string) => {
      dispatch(deleteUser(id));
    };

  const handleShow = () =>{
    setShowModal(false);
    setShowEditModal(false)
  }
  const user = useAppSelector(state=>state.user.data);
  console.log(user);
  useEffect(()=>{
    dispatch(getUsers())
  },[])

  return (
    <div>
      <div className="row">
    <div className="col-12">
        <div className="page-title-box d-flex align-items-center justify-content-between">
            <div className="page-title-right">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item active">User Page</li>
                </ol>
            </div>
            
        </div>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                      <button onClick={()=>setShowModal(!showModal)} className="btn btn-sm btn-success mt-2 me-2"><span>Create New User</span></button>
                        <table className="table table-striped table-bordered nowrap" />
                        <div className="table-responsive">

                            <table className="table table-striped table-bordered nowrap">
                                <thead>
                                    <tr>
                                        <th>User Name</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Birth Year</th>
                                        <th>Identification Number</th>
                                    </tr>
                                </thead>
                            {user?.map((user , index)=>{
                              return<tbody key={index}>
                              <tr>
                              <td>{user.userName}</td>
                              <td>{user.firstName}</td>
                              <td>{user.lastName}</td>
                              <td>{user.birthYear}</td>
                              <td>{user.identificationNumber}</td>
                              <td>
                              <button className="btn btn-sm btn-warning mt-2 me-2"
                                 data-bs-toggle="modal" onClick={()=>setShowEditModal(!showEditModal)} data-bs-target=".edit-modal"
                                 ><span>Edit</span></button>
                                 <button className="btn btn-sm btn-danger mt-2" onClick={()=>{deletedUser(user.id)}} ><span>Delete</span></button>
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
        {showModal ? "Add User" : "" || showEditModal ? "Update User" : ""}
      </Modal.Title>
      <button className="border border-none ms-auto" onClick={handleShow}><IoIosClose/></button>
    </Modal.Header>
    <Modal.Body>
      {showModal ? <UserAdd/> : "" || showEditModal?<UserUpdate/> : ""}
    </Modal.Body>
  </Modal>
    </div>
  )
}

export default UserList
