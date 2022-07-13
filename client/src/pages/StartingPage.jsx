import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/auth.context';
import { useNavigate } from "react-router-dom"





const StartingPage = () => {

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    useEffect(() => { redirect() }, [])


    const redirect = () => {
        if (user) {
            navigate("/user")
        }
        else {
            navigate("/login")
        }
    }

    return (
        <>
        </>

    )
}

export default StartingPage
