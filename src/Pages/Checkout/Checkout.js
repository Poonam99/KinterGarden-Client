import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const course = useLoaderData();
    const { user } = useContext(AuthContext);
    const check = () => {
        toast.success('Congratulation. Purchase Complete')
    }
    return (
        <div className='text-center'>
            <h1>Checkout</h1>
            <h2>{course.name}</h2>
            <h2>{user.displayName}</h2>
            <h2>{user.email}</h2>
            <Button onClick={check} variant='primary'>Confirm</Button>
        </div>
    );
};

export default Checkout;