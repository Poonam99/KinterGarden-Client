import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


const Home = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            <Carousel variant="dark">
                {
                    courses.map(course =>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={course.image}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>{course.name}</h5>
                                <Link to={`/course/${course.id}`}><Button variant="primary">Details</Button></Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    );
};

export default Home;