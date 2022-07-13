
import { useState, useContext, useEffect } from "react"
import { Form, Button, } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"


const SignUpForm = () => {


    const { logOutUser } = useContext(AuthContext)
    useEffect(() => { logOutUser() }, [])

    const [signUpForm, setSignUpForm] = useState({
        username: "",
        password: "",
    })



    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignUpForm({
            ...signUpForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .signup(signUpForm)
            .then(({ data }) => {

                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (

        <Form className="form text-center" onSubmit={handleSubmit}>


            <Form.Group className="mb-3 text-start" controlId="usernameInput">
                <Form.Label className="label">Username</Form.Label>
                <Form.Control className="input" type="text" name="username" placeholder="Choose a username" value={signUpForm.username} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="pwdInput" >
                <Form.Label className="label">Password</Form.Label>
                <Form.Control className="input" type="password" name="password" placeholder="Choose a password" value={signUpForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Button className="button" variant="info" type="submit">
                Sign Up
            </Button>
            <br />
            <Form.Text><span>Already have an account? </span></Form.Text>
            <Link to="/">Log in!</Link>
        </Form>

    )
}

export default SignUpForm