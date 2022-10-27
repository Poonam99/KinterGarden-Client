import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
import { FaPrint } from 'react-icons/fa';


const ref = React.createRef();

const Course = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div className=''>
            <div className='d-flex align-items-end justify-content-end p-5 ' >
                <Pdf targetRef={ref} filename='code-example.pdf'>
                    {({ toPdf }) =>
                        <button onClick={toPdf} className='h-8 w-8'><FaPrint className='h-8 w-8' /></button>
                    }
                </Pdf>
            </div>
            <div className=''>
                <Card ref={ref} >
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