import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../src/App.css';

const OrdersManagement = () => {
    // Mock data for orders
    const [orders, setOrders] = useState([
        { id: 1001, customerName: 'John Doe', orderDate: '2024-03-13', status: 'Pending' },
        { id: 1002, customerName: 'Jane Smith', orderDate: '2024-03-14', status: 'Processing' },
        { id: 1003, customerName: 'Alice Johnson', orderDate: '2024-03-15', status: 'Shipped' },
        { id: 1004, customerName: 'Rose Desiuza', orderDate: '2024-02-25', status: 'Delivered' },
        { id: 1005, customerName: 'Joseph', orderDate: '2024-01-15', status: 'Delivered' }
    ]);

    // State to track the selected order for details view
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [newStatus, setNewStatus] = useState('');

    // Function to delete an order
    const deleteOrder = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    };

    // Function to view order details
    const handleviewDetails = (order) => {
        setSelectedOrder(order);
    };

    // Function to close order details modal
    const handleCloseDetails = () => {
        setSelectedOrder(null);
    };

    const handleUpdateStatus = () => {
        if (selectedOrder && newStatus.trim() !== '') {
            const updatedOrders = orders.map(order => {
                if (order.id === selectedOrder.id) {
                    return { ...order, status: newStatus.trim() };
                }
                return order;
            });
            setOrders(updatedOrders);
            setSelectedOrder(null);
            setNewStatus('');
        }
    };

    return (
        <div>
            <h1>Welcome to the ERP System</h1>
            <h1>Orders Management Page</h1>
            <div className='test'>
                <Link to="/" className="dashboard-link">Dashboard</Link>
                <Link to="/products" className="dashboard-link manage-products"> Products Management</Link>
                <Link to="/orders" className="dashboard-link manage-orders">Orders Management</Link>
                <Link to="/calendar" className="dashboard-link calendar-view-custom">Calendar View</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => handleviewDetails(order)}>View Details</button>
                            
                                <button onClick={() => deleteOrder(order.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedOrder && (
                <div className="order-details-modal">
                    <h2>Order Details</h2>
                    <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                    <p><strong>Customer Name:</strong> {selectedOrder.customerName}</p>
                    <p><strong>Order Date:</strong> {selectedOrder.orderDate}</p>
                    <p><strong>Status:</strong> {selectedOrder.status}</p>
                    <input type="text" value={newStatus} onChange={(e) => setNewStatus(e.target.value)} />
                    <button onClick={handleUpdateStatus}>Update Status</button>
                    <button onClick={handleCloseDetails}>Close</button>
                    
                </div>
            )}
        </div>
    );
}

export default OrdersManagement;
