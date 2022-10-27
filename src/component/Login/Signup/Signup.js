import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Signup = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
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

    const handleUpdateUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const pass = form.pass.value;
        createUser(email, pass)
            .then(() => {
                form.reset();
                navigate('/');
                setError('');
                handleUpdateUserProfile(name, photoUrl);
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formphoto">
                    <Form.Label>PhotoUrl</Form.Label>
                    <Form.Control name='photoUrl' type="text" placeholder="Enter PhotoUrl" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='pass' type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='mb-4' variant="primary" type="submit">
                    Sign Up
                </Button>
                <Form.Text className='text-danger fw-bold'>
                    {
                        error
                    }
                </Form.Text>
            </Form>
            <div className='d-flex justify-content-around m-2'>
                <button onClick={handleGoogleSignIn}><FcGoogle className='h-8 w-8 m-2' /></button>
                <button onClick={handleGithubSignIn}><FaGithub className='h-8 w-8 m-2' /></button>
            </div>
        </div>
    );
};

export default Signup;