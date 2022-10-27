import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='row row-cols-1 row-cols-md-3 g-5'>
            {
                courses.map(course =>
                    <div key={course.id} className='col'>
                        <Card >
                            <Card.Img variant="top" className='w-100' src={course.image} />
                            <Card.Body>
                                <Card.Title>{course.course}</Card.Title>
                                <Link to={`/course/${course.id}`}><Button variant="primary">Details</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        </div>
    );
};

export default Courses;