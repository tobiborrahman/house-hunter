import React, { useEffect, useState } from 'react';

const HouseList = () => {
	const [houses, setHouses] = useState([]);

	// useEffect(() => {
	// 	fetch('http://localhost:5000/owner-dashboard')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setHouses(data);
	// 		});
	// }, []);

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (!token) {
			// Handle the case where the token is not available (user is not logged in)
			console.error('Token not found. User is not logged in.');
			return;
		}

		fetch('http://localhost:5000/owner-dashboard', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setHouses(data.houses); // Assuming data is an object with a 'houses' property
			})
			.catch((error) => {
				console.error('Error fetching houses:', error);
			});
	}, []);

	return (
		<div>
			<h1>Houses : {houses.length}</h1>
		</div>
	);
};

export default HouseList;
