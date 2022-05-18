import React, { useEffect } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { getUser, postBuyCart } from "../../Redux/Actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import CartForm from "./CartForm";
import CartItem from "./CartItem";
import styles from "./CartSend.module.css";
import Swal from "sweetalert2";
import NavBar from "../NavBar/Navbar";

const validation = (values) => {
    let errors = {};
    if (!values.address) {
        errors.address = "Address is required";
    } else if (values.address.length < 6) {
        errors.address = "You should enter a valid address";
    } else if (!/^[#.0-9a-zA-Z\s,.]+$/.test(values.address)) {
        errors.address = "Only special characters allowed are ('.' and ',')";
    }
    if (!values.email) {
        errors.email = "E-mail is required";
    } else if (
        !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            values.email
        )
    ) {
        errors.email = "You should enter a valid E-mail";
    }
    return errors;
};
export default function CartSend() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let allUsers = useSelector((state) => state.users2);
    const { user } = useAuth0();

    const productsFilter = useSelector((state) => state.cart);
    let obj = {};
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

    if (filteredUser.length !== 0) {
        return (
            <>
                <NavBar />
                <div className={styles.containerForm}>
                    <Formik
                        initialValues={{
                            address: localStorage.getItem("address"),
                            email: userLocal.email,
                        }}
                        onSubmit={(values) => {
                            if (user) {
                                localStorage.setItem("extraEmail", values.email);
                                localStorage.setItem("extraAddress", values.address);
                                dispatch(postBuyCart(obj));
                                setTimeout(function () {
                                    navigate("/purchaseConfirm");
                                }, 2000);
                            } else {
                                Swal.fire({
                                    title: "You must be logged to buy products!",
                                    icon: "info",
                                    confirmButtonText: "OK",
                                });
                            }
                        }}
                        validate={validation}
                    >
                        {(props) => <CartForm {...props} />}
                    </Formik>
                    <div className={styles.containerImg}>
                        {productsFilter.map((el) => (
                            <CartItem data={el} />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}
