import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router";

const AdminLogin = ({isAdmin, setIsAdmin}) => {
    const [admin, setAdmin] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        fetch(`https://khuda-lagse-backend.herokuapp.com/admin`)
            .then(res => res.json())
            .then(data => setAdmin(data[0]))
    }, [])
    const history = useHistory();
    const handleSubmit = () => {
        if(admin.email === email && admin.password === password) {
            fetch(`https://khuda-lagse-backend.herokuapp.com/admin/login`, {method: 'PUT'})
                .then(res => res.json())
                .then(data => setIsAdmin(data.isLoggedIn))
            history.push('/admin')
        } else {
            alert('Invalid Email or Password');
        }
    }

    

    return (
        <div className="my-5 w-50 mx-auto">
        {isAdmin && <Redirect to="/admin" />}
            <h1 className="text-center mb-5">Admin Login</h1>
            <Form onSubmit={e => e.preventDefault()}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" onBlur={e => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onBlur={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            Login
                        </Button>
                    </Form>
        </div>
    )
}

export default AdminLogin
