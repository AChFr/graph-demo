
import { useState, useContext, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"

const LogInPage = () => {


    useEffect(() => { logOutUser() }, [])

    const [loginForm, setLoginForm] = useState({
        password: "",
        username: ""
    })

    const navigate = useNavigate()

    const { storeToken, authenticateUser, logOutUser } = useContext(AuthContext)

    const handleInputChange = e => {
        const { name, value } = e.target
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .login(loginForm)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/user')
            })
            .catch(err => console.log(err))
    }

    return (
        <Form className="form text-center" onSubmit={handleSubmit}>


            <Form.Group className="mb-3 text-start" controlId="LogUserInput">
                <Form.Label className="label">username</Form.Label>
                <Form.Control className="input" type="text" name="username" placeholder="Enter your username" value={`${loginForm.username}`} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="LogPwdInput" >
                <Form.Label className="label">Password</Form.Label>
                <Form.Control className="input" type="password" name="password" placeholder="Enter your password" value={`${loginForm.password}`} onChange={handleInputChange} />
            </Form.Group>

            <Button className="button" type="submit">
                Log In
            </Button>
            <br />
            <Form.Text className="acct"><span>Do not have an account yet? </span></Form.Text>
            <Link to="/register"> Sign up!</Link>
        </Form>
    )
}

export default LogInPage