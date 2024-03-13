import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../src/App.css';

const ProductsManagement = () => {
    // Mock data for products
    const [products, setProducts] = useState([
        { id: 1001, name: 'Samsung', category: 'Mobile', price: 10000, quantity: 100 },
        { id: 1002, name: 'HP', category: 'Laptop', price: 25000, quantity: 150 },
        { id: 1003, name: 'Ipad', category: 'Tablet', price: 80000, quantity: 200 },
        { id: 1004, name: 'Boat', category: 'Earphone', price: 2500, quantity: 100 },
        { id: 1005, name: 'AmazFit', category: 'SmartWatch', price: 2000, quantity: 200 },
        { id: 1006, name: 'Apple Iphone', category: 'Mobile', price: 60000, quantity: 250 },
        { id: 1007, name: 'Lenovo', category: 'Laptop', price: 40000, quantity: 300 },
        { id: 1008, name: 'Samsung Tablet', category: 'Tablet', price: 20000, quantity: 50 },
        { id: 1009, name: 'Sony TV', category: 'SmartTV', price: 50000, quantity: 20 },
        { id: 110, name: 'Samsung TV', category: 'SmartTV', price: 30000, quantity: 25 },
        // Add more mock data as needed
    ]);

    // Function to delete a product
    const handleDelete = (productId) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    };

    // Function to add a product
    const handleAdd = () => {
        const newProduct = prompt('Enter new product details (name, category, price, quantity) separated by commas:');
        if (newProduct) {
            const [name, category, price, quantity] = newProduct.split(',').map(item => item.trim());
            const newId = products.length + 1;
            setProducts(prevProducts => [...prevProducts, { id: newId, name, category, price: parseInt(price), quantity: parseInt(quantity) }]);
        }
    };

    // Function to edit a product
    // Function to edit a product
const handleEdit = (productId) => {
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
        const newName = prompt('Enter new name for the product:', products[productIndex].name);
        const newCategory = prompt('Enter new category for the product:', products[productIndex].category);
        const newPrice = parseFloat(prompt('Enter new price for the product:', products[productIndex].price));
        const newQuantity = parseInt(prompt('Enter new quantity for the product:', products[productIndex].quantity));

        if (newName !== null && newCategory !== null && !isNaN(newPrice) && !isNaN(newQuantity)) {
            const updatedProduct = {
                ...products[productIndex],
                name: newName,
                category: newCategory,
                price: newPrice,
                quantity: newQuantity
            };
            const updatedProducts = [...products];
            updatedProducts[productIndex] = updatedProduct;
            setProducts(updatedProducts);
        }
    }
};

    return (
        <div className='dashboard-container'>
            <h1>Welcome to the ERP System</h1>
            <div>
                <h1>Products Management Page</h1>
                <div className='test'>
                <Link to="/" className="dashboard-link">Dashboard</Link>
                <Link to="/products" className="dashboard-link manage-products"> Products Managementn</Link>
                <Link to="/orders" className="dashboard-link manage-orders"> Orders Management</Link>
                <Link to="/calendar" className="dashboard-link calendar-view-custom">Calendar View</Link>
            </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button onClick={() => handleEdit(product.id)}>Edit</button>
                                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
};

export default ProductsManagement;
