import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Register from './components/auth/Register.jsx';
import Login from './components/auth/Login.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import OwnerDashboard from './components/owner/OwnerDashboard.jsx';
import AddHouse from './components/owner/AddHouse.jsx';
import HouseList from './components/owner/HouseList.jsx';
import RenterDashboard from './components/renter/RenterDashboard.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
	{
		path: '/owner-dashboard',
		element: <OwnerDashboard />,
		children: [
			{
				path: '/owner-dashboard/add-house',
				element: <AddHouse />,
			},
			{
				path: '/owner-dashboard/house-list',
				element: <HouseList />,
			},
		],
	},
	{
		path: '/renter-dashboard',
		element: <RenterDashboard />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
