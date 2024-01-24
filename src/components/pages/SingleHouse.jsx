import React from 'react';

const SingleHouse = ({ house }) => {
	console.log(house);
	const {
		name,
		_id,
		address,
		phoneNumber,
		picture,
		rentPerMonth,
		availabilityDate,
		roomSize,
		description,
	} = house;
	return (
		<div>
			<div className="border border-b-[4px] transition">
				<div className="overflow-hidden w-full h-[296px]  duration-1000">
					<div className="hover:-mt-[232px] duration-500">
						<img src={picture} alt="" />
						<div className="border-b flex justify-between items-center">
							<p className="p-3">{name}</p>
							<div className="text-center border-l p-3 bg-[#f8edeb]">
								<p className="text-[#ffb5a7] font-bold">
									{rentPerMonth}
								</p>
								<p className="font-this text-[12px]">Monthly</p>
							</div>
						</div>
						<div className="p-3">
							<p>
								<span className="font-semibold">Address: </span>{' '}
								{address}
							</p>
							<p>
								<span className="font-semibold">
									Phone Number:{' '}
								</span>{' '}
								{phoneNumber}
							</p>
							<p>
								<span className="font-semibold">
									Room Size:{' '}
								</span>{' '}
								{roomSize}
							</p>
							<p>
								<span className="font-semibold">
									Available from:{' '}
								</span>{' '}
								{availabilityDate}
							</p>

							<p className="my-3">{description}</p>
							<button className="py-2  w-full bg-pink-400 font-bold text-white">
								View Details
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleHouse;
