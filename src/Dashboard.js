import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../src/App.css';

const Dashboard = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className='dashboard-container'>
            <h1>Welcome to the ERP System</h1>
            <h1>Dashboard Page</h1>
            <div className={`test ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
                <Link to="/" className={`dashboard-link ${isClicked ? 'clicked-link' : ''}`}>Dashboard</Link>
                <Link to="/products" className={`dashboard-link manage-products ${isClicked ? 'clicked-link' : ''}`}> Products Management</Link>
                <Link to="/orders" className={`dashboard-link manage-orders ${isClicked ? 'clicked-link' : ''}`}> Orders Management</Link>
                <Link to="/calendar" className={`dashboard-link calendar-view ${isClicked ? 'clicked-link' : ''}`}>Calendar View</Link>
            </div>
            <h2>Total number of products: 10</h2>
            <h2>Total number of orders: 5</h2>
        </div>
    );
};

export default Dashboard;