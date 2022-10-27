import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='row row-cols-3 g-5'>
            {
                courses.map(course =>
                    <div className='col'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={course.image} />
                            <Card.Body>
                                <Card.Title>{course.name}</Card.Title>
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