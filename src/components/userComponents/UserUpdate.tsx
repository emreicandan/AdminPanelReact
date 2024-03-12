import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { UpdateUserDto } from '../../dtos/UpdateUserDto';
import { updateUsers } from '../../services/UserService';

function UserUpdate() {
    const [user , setUser] = useState<UpdateUserDto>({
        id : "",
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        identificationNumber:"",
        birthYear: 0
    });
    const dispatch = useAppDispatch();

    const updateUserData = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user , [e.target.name]:e.target.value});

        console.log(user);
    }

    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch(updateUsers(user));
    }

  return (
      <div>
            <div className="container">
                <div className="row justify-content-center">
                        <form onSubmit={onSubmit}>
                        <div className="mb-3">
                                <label className="form-label">Id</label>
                                <input type="text" name='id' className="form-control" onChange={updateUserData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">UserName</label>
                                <input type="text" name='userName' className="form-control" onChange={updateUserData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="text" name='password' className="form-control" onChange={updateUserData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">FirstName</label>
                                <input type="text" name='firstName' className="form-control" onChange={updateUserData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">LastName</label>
                                <input type="text" name='lastName' className="form-control" onChange={updateUserData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Identification Number</label>
                                <input type="text" name='identificationNumber' className="form-control" onChange={updateUserData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">BirthYear</label>
                                <input type="text" name='birthYear' className="form-control" onChange={updateUserData} />
                            </div>
                            <button type="submit" className="btn btn-warning">Update</button>
                        </form>
                </div>
            </div>
        </div>
  )
}

export default UserUpdate
