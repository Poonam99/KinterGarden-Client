import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className=''>
            <div className=' w-100 d-flex justify-content-center'>
                <Carousel variant="dark">

                    {
                        courses.map(course =>

                            <Carousel.Item key={course.id}>
                                <img
                                    className="d-block "
                                    src={course.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5>{course.course}</h5>
                                    <Link to={`/course/${course.id}`}><Button variant="primary">Details</Button></Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                        )
                    }
                </Carousel>
            </div>
            <div className='d-flex g-5 flex-wrap justify-content-center flex-column mt-5'>
                {
                    courses.map(course =>
                        <Card className='my-2 mx-auto' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={course.image} />
                            <Card.Body>
                                <Card.Title>{course.course}</Card.Title>
                                <Link to={`/course/${course.id}`}><Button variant="primary">Details</Button></Link>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default Home;