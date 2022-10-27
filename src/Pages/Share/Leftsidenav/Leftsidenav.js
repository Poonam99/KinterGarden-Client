import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Leftsidenav = () => {
    const [courses, setCourses] = useState([]);
    const active = "bg-gray-300 p-5";
    const normal = "";

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className='ul'>
                {
                    courses.map(course =>
                        <li className={'flex items-start p-5 hover:bg-gray-300 '} key={course.id}>
                            <NavLink className={({ isActive }) => isActive ? active : normal} to={`/course/${course.id}`}>{course.name}</NavLink>
                        </li>
                    )
                }
            </div>
        </div>
    );
};

export default Leftsidenav;
