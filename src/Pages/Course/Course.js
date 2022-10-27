import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div className=''>
            <div className=''>
                <Card >
                    <Card.Img variant="top" className='w-sm-50' src={course.image} />
                    <Card.Body>
                        <Card.Title>{course.name}</Card.Title>
                        <Card.Text>
                            {course.description}
                        </Card.Text>
                        <Link to={`/course/${course.id}/checkout`}><Button variant="primary">Get Premium Access</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Course;