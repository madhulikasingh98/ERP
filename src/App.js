// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/Dashboard';
import ProductsManagement from '../src/ProductsManagement';
import OrdersManagement from '../src/OrdersManagement';
import CalendarView from '../src/CalanderView';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<ProductsManagement />} />
                <Route path="/orders" element={<OrdersManagement />} />
                <Route path="/calendar" element={<CalendarView />} />
            </Routes>
        </Router>
    );
}

export default App;
