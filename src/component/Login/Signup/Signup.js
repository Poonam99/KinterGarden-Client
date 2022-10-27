import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast'

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false)
    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
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

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => console.error(e))
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
                handleEmailVerification();
                toast.success('Account Created Successfully. Please Verify your Email.')
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    return (
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

            <Button className='mb-4' variant="primary" type="submit" disabled={!accepted}>
                Sign Up
            </Button>
            <Form.Text className='text-danger fw-bold'>
                {
                    error
                }
            </Form.Text>
        </Form>
    );
};

export default SignUp;