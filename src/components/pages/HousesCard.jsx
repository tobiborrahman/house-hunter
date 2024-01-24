import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import SingleHouse from './SingleHouse';

const HousesCard = () => {
	const [houses, setHouses] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/all-houses')
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setHouses(data.houses);
			});
	}, []);
	return (
		<div className="md:mx-20 my-20">
			<h1 className="text-center text-[48px] font-semibold pb-16">
				Book Your Favorite House
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{houses.map((house) => (
					<SingleHouse key={house._id} house={house} />
				))}
			</div>
		</div>
	);
};

export default HousesCard;
