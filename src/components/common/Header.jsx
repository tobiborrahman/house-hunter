import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDribbble,
	faBehance,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { MdOutlineMenu } from 'react-icons/md';

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 50;
			setScrolling(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section
			className={`container mx-auto bg-gray-800 flex justify-between items-center  w-full px-3 md:px-20 text-white z-50 md:opacity-100 py-5 transition-all duration-300`}
		>
			<div>
				<h1 className="text-3xl font-bold">HOUSE HUNTER</h1>
			</div>
			<div className="md:flex justify-center items-center">
				<ul className="hidden md:menu-horizontal gap-8 px-1 font-semibold mr-4">
					<Link
						to="/login"
						className="text-md font-medium text-white dark:text-gray-500 dark:hover:text-white hover:text-[#ffb5a7]"
					>
						Login
					</Link>
					<Link
						to="/register"
						className="text-md font-medium text-white dark:text-gray-500 dark:hover:text-white hover:text-[#ffb5a7]"
					>
						Register
					</Link>
				</ul>
				<div className="flex justify-between items-center ml-5 list-none gap-1">
					<FontAwesomeIcon
						icon={faDribbble}
						className={`w-4 h-4 border-[.2px] dark:border-gray-700 rounded-full p-[8px]  ${
							scrolling
								? 'bg-[#F59E0B] hover:bg-[#D97706] text-white'
								: 'bg-[#F59E0B] hover:bg-[#D97706] md:bg-white md:hover:bg-gray-200 text-white md:text-black dark:bg-[#0F172A] dark:hover:bg-[#374151] dark:text-white'
						} text-black  duration-300`}
					></FontAwesomeIcon>
					<FontAwesomeIcon
						icon={faBehance}
						className={`w-4 h-4 border-[.2px] dark:border-gray-700 rounded-full p-[8px]  ${
							scrolling
								? 'bg-[#F59E0B] hover:bg-[#D97706] text-white'
								: 'bg-[#F59E0B] hover:bg-[#D97706] md:bg-white md:hover:bg-gray-200 text-white md:text-black dark:bg-[#0F172A] dark:hover:bg-[#374151] dark:text-white'
						} text-black  duration-300`}
					></FontAwesomeIcon>
					<FontAwesomeIcon
						icon={faInstagram}
						className={`w-4 h-4 border-[.2px] dark:border-gray-700 rounded-full p-[8px]  ${
							scrolling
								? 'bg-[#F59E0B] hover:bg-[#D97706] text-white'
								: 'bg-[#F59E0B] hover:bg-[#D97706] md:bg-white md:hover:bg-gray-200 text-white md:text-black dark:bg-[#0F172A] dark:hover:bg-[#374151] dark:text-white'
						} text-black  duration-300`}
					></FontAwesomeIcon>
					<div className="md:hidden text-2xl ml-1">
						<MdOutlineMenu />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
