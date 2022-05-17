import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getUser } from '../../Redux/Actions';

function CartForm({
    handleChange,
    handleSubmit,
    isSubmitting,
    values
}) {
    let allUsers = useSelector((state) => state.users2);
    const { user } = useAuth0();
    // const formik = useFormik();
    let userLocal = [];

    if (user) {
        localStorage.setItem("email", user.email);
    }

    userLocal.email = localStorage.getItem("email");

    let filteredUser = allUsers.filter((el) => el.email === userLocal.email);

    let address = filteredUser.map((el) => el.address);
    localStorage.setItem("address", address);

    return (
        <>
            <Box

                component="form"
                sx={{
                    "& .MuiTextField-root": {
                        m: 1,
                        width: "45ch",
                        color: "white",
                        display: "flex",
                    },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >

                <TextField
                    variant="filled"
                    id="outlined-required"
                    label="Address"
                    name="address"
                    onChange={handleChange}
                    value={values.address}
                />
                <TextField
                    variant="filled"
                    id="outlined-required"
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                />
                <Button disabled={isSubmitting} type="submit" variant="outlined">
                    Confirm purchase
                </Button>
            </Box>
        </>
    )
}

export default CartForm