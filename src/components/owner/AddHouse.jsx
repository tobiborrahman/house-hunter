import { useForm } from 'react-hook-form';
import 'react-phone-number-input/style.css';

const AddHouse = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const token = localStorage.getItem('token');
		console.log(token);

		fetch('http://localhost:5000/add-house', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token ? `Bearer ${token}` : '', // Properly format the Authorization header
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				reset();
				console.log(data);
			})
			.catch((error) => {
				console.error('Error during add-house request:', error);
			});
	};

	return (
		<div className=" flex justify-center items-center">
			<div className="max-w-[600px] border p-10">
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="name"
						type="name"
						placeholder="Enter your Name"
						{...register('name')}
					/>
					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="Address"
						type="text"
						placeholder="Address"
						{...register('address')}
					/>
					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="city"
						type="text"
						placeholder="City"
						{...register('city')}
					/>
					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="bedrooms"
						type="text"
						placeholder="Bedrooms"
						{...register('bedrooms')}
					/>
					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="bathrooms"
						type="text"
						placeholder="Bathrooms"
						{...register('bathrooms')}
					/>

					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="roomSize"
						type="text"
						placeholder="Room Size"
						{...register('roomSize')}
					/>
					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="picture"
						type="photoUrl"
						placeholder="Picture"
						{...register('picture')}
					/>
					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="availabilityDate"
						type="date"
						placeholder="Availability Date"
						{...register('availabilityDate')}
					/>
					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="rentPerMonth"
						type="text"
						placeholder="Rate Per Month"
						{...register('rentPerMonth')}
					/>
					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="phoneNumber"
						type="number"
						placeholder="Phone Number"
						{...register('phoneNumber')}
					/>
					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="description"
						type="text"
						placeholder="Description"
						{...register('description')}
					/>

					<input
						className="py-3 px-5 bg-blue-900/20 border-[.3px] w-full mt-7"
						type="submit"
					/>
				</form>
			</div>
		</div>
	);
};

export default AddHouse;
