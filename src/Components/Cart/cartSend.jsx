import React, { useEffect } from 'react';
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux"
import { getUser, postBuyCart } from '../../Redux/Actions';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import CartForm from './CartForm';
import CartItem from './CartItem';
import styles from "./CartSend.module.css";
import Swal from 'sweetalert2'
import NavBar from '../NavBar/Navbar';
export default function CartSend() {

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


    return (
        <>
            <NavBar />
            <div className={styles.containerForm}>
                <Formik
                    initialValues={{
                        address: localStorage.getItem('address'),
                        email: userLocal.email
                    }}
                    onSubmit={(values) => {
                        if (user) {

                            localStorage.setItem("extraEmail", values.email)
                            localStorage.setItem("extraAddress", values.address)
                            dispatch(postBuyCart(obj));
                            setTimeout(function () {
                                navigate("/purchaseConfirm")
                            }, 2000)
                        } else {
                            Swal.fire({
                                title: 'You must be logged to buy products!',
                                icon: 'info',
                                confirmButtonText: 'OK',
                            })
                        }
                    }}

                >
                    {(props) => <CartForm {...props} />}
                </Formik>
                <div className={styles.containerImg}>
                    {productsFilter.map((el, index) => (
                        <CartItem
                            data={el}
                            key={index}

                        />))}
                </div>


            </div >
        </>
    );
};