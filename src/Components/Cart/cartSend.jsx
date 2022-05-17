// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom'

// export default function CartSend() {
//     const navigate = useNavigate()
//     const [input, setInput] = useState({
//         extraAdress: "",
//         extraEmail: "",
//     })
//     function handleChange(e) {
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value
//         })
//     }

//     function handleSubmit(e) {
//         localStorage.setItem("extraAdress", input.extraAdress)
//         localStorage.setItem("extraEmail", input.extraEmail)
//         e.preventDefault();
//         // navigate("/purchaseConfirm")

//     }
//     return (
//         <>
//             <div>
//                 <form >

//                     <input name="extraAdress" onChange={(e) => handleChange(e)} placeholder="Optional Adress" value={input.extraAdress}></input>
//                     <input name="extraEmail" type="email" onChange={(e) => handleChange(e)} placeholder="Optional E-Mail" value={input.extraEmail}></input>
//                     <button type="submit" onClick={(e) => handleSubmit(e)}>Continue</button>
//                 </form>
//             </div>
//         </>
//     )
// }

import React, { useEffect } from 'react';
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux"
import { getUser, postBuyCart } from '../../Redux/Actions';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import CartForm from './CartForm';
export default function CartSend() {
    // Note that we have to initialize ALL of fields with values. These
    // could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell
    // at us.
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let allUsers = useSelector((state) => state.users2);
    const { user } = useAuth0();

    const productsFilter = useSelector((state) => state.cart);
    let obj = {}
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    let userLocal = [];

    if (user) {
        localStorage.setItem("email", user.email);
    }

    userLocal.email = localStorage.getItem("email");

    let filteredUser = allUsers.filter((el) => el.email === userLocal.email);

    let address = filteredUser.map((el) => el.address);
    localStorage.setItem("address", address);


    // const handleBuyCart = (e) => {

    const nuevoPost = productsFilter.map((el) => {
        return {
            picture_url: el.image,
            name: el.name,
            price: el.price,
            quantity: el.quantity,
        };
    });
    obj.name = nuevoPost.map((el) => el.name);
    obj.picture_url = nuevoPost.map((el) => el.picture_url);
    obj.price = nuevoPost.map((el) => Number(el.price));
    obj.quantity = nuevoPost.map((el) => el.quantity);
    JSON.stringify(obj);
    // dispatch(postBuyCart(obj));
    // setTimeout(function () {
    //     navigate("/purchaseConfirm")
    // }, 2000)
    // };
    console.log(obj)

    return (

        <div>
            <Formik
                initialValues={{
                    address: localStorage.getItem('address'),
                    email: userLocal.email
                }}
                onSubmit={(values) => {
                    localStorage.setItem("extraEmail", values.email)
                    localStorage.setItem("extraAddress", values.address)
                    dispatch(postBuyCart(obj));
                    setTimeout(function () {
                        navigate("/purchaseConfirm")
                    }, 2000)
                }}

            >
                {(props) => <CartForm {...props} />}
            </Formik>
            <div>
                {/* <CartItem>

                </CartItem> */}
            </div>


        </div >
    );
};