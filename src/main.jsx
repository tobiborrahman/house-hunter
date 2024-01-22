import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Register from './components/auth/Register.jsx';
import Login from './components/auth/Login.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
		children: [
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
