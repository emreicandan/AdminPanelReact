import React, { useState } from 'react'
import { useAppDispatch} from '../../store/hooks'
import { addUsers } from '../../services/UserService';
import { AddUserDto } from '../../dtos/AddUserDto';


function UserAdd() {
    const dispatch = useAppDispatch();
    const [users, setUsers] = useState<AddUserDto>({
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        identificationNumber: "",
        birthYear: 0,
    });
    console.log(users);
    const setUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addUsers(users));
        setUsers({
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            identificationNumber: "",
            birthYear: 0,
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
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
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default UserAdd
