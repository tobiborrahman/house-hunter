import React from 'react';

const SingleHouse = ({ house }) => {
	console.log(house);
	const { name, _id, address, phoneNumber, picture, rentPerMonth } = house;
	return (
		<div>
			<div>
				<div className="border border-b-[4px] ">
					<img src={picture} alt="" />
					<div className=" flex justify-between items-center">
						<p className="p-3">{name}</p>
						<div className="text-center border-l p-3 bg-[#f8edeb]">
							<p className="text-[#ffb5a7] font-bold">
								{rentPerMonth}
							</p>
							<p className="font-this text-[12px]">Monthly</p>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default SingleHouse;
