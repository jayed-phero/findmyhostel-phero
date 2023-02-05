import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../../Shared/DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <div>
            <DashboardNavbar />
            <div className='md:flex'>
                <DashboardSidebar />
                <div className='bg-gray-100 md:flex-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;