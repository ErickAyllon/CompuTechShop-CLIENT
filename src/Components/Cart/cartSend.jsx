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
import { useFormik } from 'formik';
import { useSelector, useDispatch } from "react-redux"
import { getUser } from '../../Redux/Actions';
export default function CartSend() {
    // Note that we have to initialize ALL of fields with values. These
    // could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell
    // at us.
    const users = useSelector(state => state.users2)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const emailLogueado = localStorage.getItem("email")
    // console.log(emailLogueado)
    // console.log(users)
    // const usuarioEncontrado = users?.find(el => el.email === emailLogueado)
    // let domicilioInicial = usuarioEncontrado["address"]
    const userLogged =
        users?.length > 0 ? users?.find((e) => e.email === emailLogueado) : false;

    console.log(userLogged.address)

    const formik = useFormik({
        initialValues: {
            extraAddress: userLogged.address,
            extraEmail: emailLogueado,
        },
        onSubmit: values => {
            console.log(values)
            localStorage.setItem("extraAddress", values.extraAddress)
            localStorage.setItem("extraEmail", values.extraEmail)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="extraAddress">extra Address</label>
            <input
                id="extraAddress"
                name="extraAddress"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.extraAddress}
            />



            <label htmlFor="extraEmail">Email</label>
            <input
                id="extraEmail"
                name="extraEmail"
                type="extraEmail"
                onChange={formik.handleChange}
                value={formik.values.extraEmail}
            />

            <button type="submit">Confirm Checkout</button>
        </form>
    );
};