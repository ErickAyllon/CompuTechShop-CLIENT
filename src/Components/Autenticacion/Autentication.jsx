import React,{ useEffect}  from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useAuth0} from '@auth0/auth0-react';
import {getActiveUser} from '../../Redux/Actions'


function Autentication() {
    const dispatch = useDispatch();
    const {user, isAuthenticated} = useAuth0();
    const userInfo = useSelector((state) => state.users2);
    
    useEffect(() => {
      if(user) dispatch(getActiveUser(user));
    }, [dispatch]);

    const handleClick =  (e) => { 
        e.preventDefault()
        dispatch(getActiveUser(userInfo))    
    }
  return (
    <div>
        <h1>You have been successfully authenticated  &#128512; </h1>
        <Link to='/'>
        <button onClick={handleClick}>Back!!asdgasdgds </button>
        </Link> 
       
        </div>
  )
}

export default Autentication