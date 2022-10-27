import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Login = () => {
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { loginUser, setLoading, providerLogin } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        loginUser(email, pass)
            .then(result => {
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='container'>
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
            <div className='d-flex justify-content-around mt-2'>
                <button onClick={handleGoogleSignIn}><FcGoogle className='h-8 w-8' /></button>
                <button onClick={handleGithubSignIn}><FaGithub className='h-8 w-8' /></button>
            </div>
        </div>
    );
};

export default Login;