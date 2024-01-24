import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, EffectFade } from 'swiper/modules';

const Banner = () => {
	return (
		<>
			<div>
				<Swiper
					pagination={{
						clickable: true,
					}}
					effect={'fade'}
					navigation={true}
					modules={[EffectFade, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<img
							className="w-full h-[600px] bg-repeat-0"
							src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className="w-full h-[600px] bg-repeat-0"
							src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className="w-full h-[600px] bg-repeat-0"
							src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D"
							alt=""
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default Banner;
