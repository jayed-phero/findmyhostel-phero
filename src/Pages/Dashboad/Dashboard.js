import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardNavbar from '../../Shared/DashboardNavbar';
import Spinner from '../../Shared/Spinner/Spinner';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    const [fmhToken, setFmhToken] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    const handleNavigate = () => {
        navigate('/')
    }

    useEffect(() => {
        const token = localStorage.getItem("fmhToken")
        setFmhToken(token)
        setLoading(false)
    }, [])

    console.log(fmhToken)
    return (
        <div>
            {
                loading ?
                    <Spinner />
                    :
                    fmhToken && fmhToken === "1234567890" ?
                        <div>
                            <DashboardNavbar />
                            <div className='md:flex'>
                                <DashboardSidebar />
                                <div className='bg-gray-100 md:flex-1'>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                        :
                        <div className='px-11 py-11'>
                            <h3 className='text-red-500 font-semibold'>access didn't guranted :: </h3>
                            <h3 className='text-red-500 font-semibold pt-3'>You don't have any permission to access this section</h3>
                            <h3 className='text-green-500 font-semibold pt-5'>Please Provide your Identity again by Login to access this section</h3>
                            <a onClick={handleNavigate} class="block px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white  hover:bg-gray-100 lg:w-32 " href="#">
                                Go Home
                            </a>
                        </div>
            }
        </div>
    );
};

export default Dashboard;