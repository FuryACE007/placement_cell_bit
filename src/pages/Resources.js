import React from 'react';
import Loader from '../components/Loader';
import StudentForm from '../components/StudentForm';
import "./Login.css";

const Resources = () => {
    return (
        <div className='background min-h-screen flex flex-col pb-4 px-4 pt-36  md:pt-28'>
            <StudentForm />
        </div>
    )
}

export default Resources;
