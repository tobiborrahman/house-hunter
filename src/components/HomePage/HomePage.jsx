import React from 'react';
import Banner from '../pages/Banner';
import HouseCard from '../common/HouseCard';
import HouseList from '../owner/HouseList';

const HomePage = () => {
	return (
		<div>
			<Banner />
			<HouseCard />
			<HouseList />
		</div>
	);
};

export default HomePage;
