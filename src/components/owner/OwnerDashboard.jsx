import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const OwnerDashboard = () => {
	return (
		<div className="drawer bg-[#f8edeb] lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col items-center justify-center">
				{/* Page content here */}
				<label
					htmlFor="my-drawer-2"
					className="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
				<Outlet />
			</div>
			<div className="drawer-side ">
				<label
					htmlFor="my-drawer-2"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu p-4 w-80 min-h-full bg-[#ffb5a7] text-base-content">
					<h1 className="text-2xl font-bold text-center my-10">
						Owner Dashboard
					</h1>
					{/* Sidebar content here */}

					<Link
						to="/owner-dashboard/house-list"
						className="bg-gray-400 py-3 px-7 rounded text-center font-semibold mb-2 text-[17px] text-white "
					>
						<a>Manage Houses</a>
					</Link>

					<Link
						to="/owner-dashboard/add-house"
						className="bg-gray-400 py-3 w-full px-7 rounded text-center font-semibold text-[17px] text-white mb-20"
					>
						<a>Add New House</a>
					</Link>
					<hr />

					<Link
						to="/"
						className="bg-gray-400 py-3 mt-20 w-full px-7 rounded text-center font-semibold text-[17px] text-white mb-2"
					>
						<a>Home</a>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default OwnerDashboard;
