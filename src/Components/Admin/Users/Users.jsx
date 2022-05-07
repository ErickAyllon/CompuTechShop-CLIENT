import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AdminNav from '../../Admin/AdminNav/AdminNav';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../Redux/Actions/index';
import UserCard from './UserCard'
import NotFound404 from '../../NotFound404/NotFound404';



function Users() {
  const allCategories = useSelector((state) => state.categories)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
    console.log(users)
  }, [dispatch]);

  const users = useSelector((state) => state.users)

  return (
    <div>
      <AdminNav/>
      <div style={{minHeight: '100vh'}}>
      {
        users.length ? 
        <div>
        <span>NAME</span>
        <span>LASTNAME</span>
        <span>EMAIL</span>
        <span>PHONE</span>
        <span>TOTAL ORDERS</span>
        </div>
        : null
      }
      {
        users.length ? 
        users.map(el => {
          return(
            <div key={el.id}>
            <UserCard
            given_name={el.given_name}
            family_name={el.family_name}
            email={el.email}
            phone={el.phone}
            />
            </div>
          )
        }) : <NotFound404/>
      }
      </div>
    </div>
  )
}

export default Users