import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const cartSend = () => {

    const [input, setInput] = useState({
        extraAdress: "",
        extraEmail: "",
    })
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        localStorage.setItem("extraAdress", input.extraAdress)
        localStorage.setItem("extraEmail", input.extraEmail)
        e.preventDefault();

        alert('User created, pal')
    }
    return (
        <>
            <div>

                <form >

                    <input name="extraAdress" onChange={(e) => handleChange(e)} placeholder="Optional Adress" value={input.extraAdress}></input>
                    <input name="extraEmail" onChange={(e) => handleChange(e)} placeholder="Optional E-Mail" value={input.extraEmail}></input>
                </form>
            </div>
        </>
    )
}

export default cartSend