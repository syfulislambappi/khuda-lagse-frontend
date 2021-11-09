import {useState} from 'react'
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import useAuth from '../../hooks/useAuth'

const googleIcon = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png`


const Register = () => {
    // hooks for input fields
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // extract signup function from firebase
    const {emailSignUp, googleSignIn, error} = useAuth()

    return (
        <>
        <Container className="py-4">
            <Row>
                <Col lg='6' className="mb-5">
                    <img src={`https://image.freepik.com/free-vector/2fa-two-steps-authentication-password-secure-notice-login-verification-sms-with-code-smartphone-website-flat-vector-illustration_2175-1359.jpg`} alt='' className="d-block mw-100" />
                </Col>
                <Col lg='6'>
                    <div className="d-flex align-items-center">
                        <h5 className="me-3">Register with</h5>
                        <div>
                        <button onClick={googleSignIn} className="login-icons"><img src={googleIcon} alt="google" className="google-icon"/></button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-3">
                        <div className="line"></div>
                        <p className="fw-bold mx-3">Or</p>
                        <div className="line"></div>
                    </div>
                    <Form onSubmit={e => e.preventDefault()}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" onBlur={e => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" onBlur={e => setEmail(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onBlur={e => setPassword(e.target.value)} required />
                        </Form.Group>
                        {error ? <p className="text-danger">{error}</p> : ''}
                        <Button variant="primary" type="submit" onClick={() => emailSignUp(name, email, password)}>
                            <NavLink to={error ? '/register' : '/login'} className="text-white text-decoration-none">Register</NavLink>
                        </Button>
                    </Form>
                <h6 className='mt-4'>Already have an Account? <NavLink to='/login' className="text-danger">Login</NavLink></h6>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Register
