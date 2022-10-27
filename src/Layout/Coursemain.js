import React from 'react';
import { Outlet } from 'react-router-dom';
import Leftsidenav from '../Pages/Share/Leftsidenav/Leftsidenav';

const CourseMain = () => {
    return (
        <div className='row row-cols-1 row-cols-md-2'>
            <div className='col-md-3  d-flex justify-content-center'>
                <Leftsidenav></Leftsidenav>
            </div>
            <div className='col-md-9'>
                <Outlet ></Outlet>
            </div>
        </div>
    );
};

export default CourseMain;