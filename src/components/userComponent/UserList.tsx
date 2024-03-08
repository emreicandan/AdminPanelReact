import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUsers } from '../../services/UserService';
import { useEffect } from 'react';

function UserList() {


  const dispatch = useAppDispatch();

  const user = useAppSelector(state=>state.user);

  useEffect(()=>{
    dispatch(getUsers())
  },[])

  console.log(user.data)

  return (
    <div>
      {user.data?.map((user,index)=>{
        return <table className="table" key={index}>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Birth Year</th>
            <th scope="col">Identification Number</th>
            <th scope="col">User Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.birthYear}</td>
            <td>{user.identificationNumber}</td>
            <td>{user.userName}</td>
          </tr>
        </tbody>
      </table>
      })}
    </div>
  )
}

export default UserList
