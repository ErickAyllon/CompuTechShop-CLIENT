import { useAuth0 } from "@auth0/auth0-react";
import styles from "./FormUser.module.css";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { postUser, getUser } from "../../Redux/Actions";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
const FormUser = () => {
  const { user, isAuthenticated } = useAuth0();

  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  // let [input, setInput] = useState({
  //   name: '',
  //   email: '',
  //   given_name: '',
  //   family_name: '',
  //   image: '',
  //   nickname: '',
  //   last_name: '',
  //   phone: '',
    
  // });


  useEffect(() => {
    dispatch(postUser())
    dispatch(getUser())
}, [dispatch])

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(postUser(user))
      alert('User created')
  }

  return (
    isAuthenticated && (
      <div onSubmit={(e)=> handleSubmit(e)} >
          
        {user.given_name ? (
          <label className={styles.input}>
            Firstname:
            <input className={styles.border} type="text" value={user.given_name} disabled />
          </label>
        ) : (
          <label className={styles.input}>
            FirstName:
            <input className={styles.border} type="text" />
          </label>
        )}
        {user.family_name ? (
          <label className={styles.input}>
            Apellido:
            <input className={styles.border} type="text" value={user.family_name} disabled />
          </label>
        ) : (
          <label className={styles.input}>
            Lastname:
            <input className={styles.border} type="text" />
          </label>
        )}
        {user.nickname ? (
          <label className={styles.input}>
            NickName:
            <input className={styles.border} type="text" value={user.nickname} disabled />
          </label>
        ) : (
          <label className={styles.input}>
            Nickname:
            <input className={styles.border} type="text" />
          </label>
        )}
        {user.email ? (
          <label className={styles.input}>
            E-mail:
            <input className={styles.border} type="text" value={user.email} disabled />
          </label>
        ) : (
          <label className={styles.input}>
            E-mail:
            <input className={styles.border} type="text" />
          </label>
        )}
        {user.picture ? (
          <label className={styles.input}>
            Imagen:
            <input className={styles.border} type="text" value={user.picture} disabled />
          </label>
        ) : (
          <label className={styles.input}>
            Lastname:
            <input className={styles.border} type="text" />
          </label>
        )}
        <label className={styles.input}>
          Birth:
          <input className={styles.border} type="text" />
        </label>
        <label className={styles.input}>
          Phone:
          <input className={styles.border} type="text" />
        </label>
        <label className={styles.input}>
          Address:
          <input className={styles.border} type="text" />
        </label>  
         
        <label className={styles.input}>
          email_verified:
          <input className={styles.border} type="text" value={user.email_verified} disabled />
        </label>

        <button type="submit" onClcik={(e)=> handleSubmit(e)}>Submit</button>

        
        <Link to= '/'><button>Volver</button></Link>   
      
      </div>
    
    )
  );
};

export default FormUser;


