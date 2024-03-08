import React, { useState } from 'react'
import { useAppDispatch} from '../../store/hooks'
import { AddUserDto } from '../../models/User';
import { addUsers } from '../../services/UserService';


function UserAdd() {
    const dispatch = useAppDispatch();
    const [users, setUsers] = useState<AddUserDto>({
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        identificationNumber: "",
        birthYear: 0,
    })
    console.log(users);
    const setUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsers({ ...users, [e.target.name]: e.target.value })

        console.log(users)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addUsers(users));
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-sm-5 border border-1 p-3 mt-2'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">UserName</label>
                                <input type="text" name='userName' className="form-control" onChange={setUserData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="text" name='password' className="form-control" onChange={setUserData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">FirstName</label>
                                <input type="text" name='firstName' className="form-control" onChange={setUserData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">LastName</label>
                                <input type="text" name='lastName' className="form-control" onChange={setUserData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Identification Number</label>
                                <input type="text" name='identificationNumber' className="form-control" onChange={setUserData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">BirthYear</label>
                                <input type="text" name='birthYear' className="form-control" onChange={setUserData} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAdd
