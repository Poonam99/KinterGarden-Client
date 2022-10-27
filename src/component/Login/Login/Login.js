import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast'



const Login = () => {
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { loginUser, setLoading } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email, pass);
        loginUser(email, pass)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your Email is not verified.')
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='pass' type="password" placeholder="Password" required />
            </Form.Group>
            <Button className='mb-4' variant="primary" type="submit">
                Sign In
            </Button>
            <br />
            <Form.Text className='text-danger fw-bold'>
                {
                    error
                }
            </Form.Text>
        </Form>
    );
};

export default Login;