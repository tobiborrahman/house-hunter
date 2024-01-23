import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDribbble,
	faBehance,
	faInstagram,
	faLinkedin,
	faFacebook,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
	return (
		<footer className="bg-[#192132] text-white py-5">
			<div className=" flex flex-col md:flex-row items-center justify-between px-3 lg:px-20 mb-5 md:mb-0">
				<div>
					<h1 className="text-3xl font-bold">TOBIBOR.</h1>
				</div>
				<div className="container mx-auto py-4 text-center">
					<p className="text-sm">
						&copy; {new Date().getFullYear()} Tobibor Rahman. All
						rights reserved.
					</p>
				</div>
				<div className="flex space-x-4 mt-4 md:mt-0">
					<FontAwesomeIcon
						icon={faBehance}
						className={`w-3 h-3 border border-gray-800 hover:bg-[#F59E0B] rounded-lg p-[10px] text-white  duration-300`}
					></FontAwesomeIcon>
					<FontAwesomeIcon
						icon={faDribbble}
						className={`w-3 h-3 border border-gray-800 hover:bg-[#F59E0B] rounded-lg p-[10px] text-white  duration-300`}
					></FontAwesomeIcon>
					<FontAwesomeIcon
						icon={faLinkedin}
						className={`w-3 h-3 border border-gray-800 hover:bg-[#F59E0B] rounded-lg p-[10px] text-white  duration-300`}
					></FontAwesomeIcon>
					<FontAwesomeIcon
						icon={faFacebook}
						className={`w-3 h-3 border border-gray-800 hover:bg-[#F59E0B] rounded-lg p-[10px] text-white  duration-300`}
					></FontAwesomeIcon>
					<FontAwesomeIcon
						icon={faInstagram}
						className={`w-3 h-3 border border-gray-800 hover:bg-[#F59E0B] rounded-lg p-[10px] text-white  duration-300`}
					></FontAwesomeIcon>
					<FontAwesomeIcon
						icon={faTwitter}
						className={`w-3 h-3 border border-gray-800 hover:bg-[#F59E0B] rounded-lg p-[10px] text-white  duration-300`}
					></FontAwesomeIcon>
					<FontAwesomeIcon
						icon={faMessage}
						className={`w-3 h-3 border border-gray-800 hover:bg-[#F59E0B] rounded-lg p-[10px] text-white  duration-300`}
					></FontAwesomeIcon>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
