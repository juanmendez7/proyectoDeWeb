import { onAuthStateChanged } from "firebase/auth"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import {auth} from "./firebase/config"
import { useForm } from "./hooks/useForm"
import { logout, register } from "./store/slices/auth/AuthSlice"
import { registerAuth } from "./store/slices/auth/Thunks"

export const Registro = () => {

    const dispatch = useDispatch()

    const { email, password, onInputChange, formState } = useForm({
        email: "santiago.londono_men@uao.edu.co",
        password: "slm12345"
    })

    const onSubmit = ( event ) => {
        event.preventDefault()
        console.log(formState)
        dispatch( registerAuth ( email, password))

    }

    useEffect(() => {
        onAuthStateChanged( auth, async( user) => {
            if( !user) return dispatch( logout());

            dispatch( register ( { email: user.email}))
        })
    }, [])

    return (

        <>

        <h1>Registro</h1>
        <hr />
        <form onSubmit={(event) => onSubmit(event)}>
            <input name="email" type="email" onChange={ (event) => onInputChange(event)} value={email} />
            <input name="password" type="password" onChange={ (event)=> onInputChange(event)} value={password} />

            <button type="submit">  Registro </button>
        </form>
        
        </>
    )
}