import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../Redux/Actions/index';



function Users({name, lastName, email, phone}) {


  return (
    <div>
      <span>{name}</span>
      <span>{lastName}</span>
      <span>{email}</span>
      <span>{phone}</span>
      <span>VALUE</span>
    </div>
  )
}

export default Users