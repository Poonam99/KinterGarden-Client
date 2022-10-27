import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const course = useLoaderData();
    return (
        <div>
            <h1>hom: {course.length}</h1>
        </div>
    );
};

export default Home;