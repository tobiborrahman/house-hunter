import React from 'react';
import Banner from '../pages/Banner';
import HouseCard from '../common/HouseCard';
import HouseList from '../owner/HouseList';
import HousesCard from '../pages/HousesCard';

const HomePage = () => {
	return (
		<div>
			<Banner />
			<HousesCard />
		</div>
	);
};

export default HomePage;
