import React from 'react';
import { Outlet } from 'react-router-dom';
import Leftsidenav from '../Pages/Share/Leftsidenav/Leftsidenav';

const CourseMain = () => {
    return (
        <div className='row row-cols-2'>
            <div className='col-3 d-flex justify-content-center'>
                <Leftsidenav></Leftsidenav>
            </div>
            <div className='col-9'>
                <Outlet ></Outlet>
            </div>
        </div>
    );
};

export default CourseMain;