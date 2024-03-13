import React from 'react';
import { Link } from 'react-router-dom';
import '../src/App.css';

const CalendarView = () => {
    // Implement calendar functionality if needed

    return (
        <div className='dashboard-container'>
            <h1>Welcome to the ERP System</h1>
            <h1>Calendar View Pending...</h1>
            <div className='test'>
                <Link to="/" className="dashboard-link">Dashboard</Link>
                <Link to="/products" className="dashboard-link manage-products">Manage Products</Link>
                <Link to="/orders" className="dashboard-link manage-orders">Manage Orders</Link>
                <Link to="/calendar" className="dashboard-link calendar-view-custom">Calendar View</Link>
            </div>
        </div>
    );
}

export default CalendarView;
