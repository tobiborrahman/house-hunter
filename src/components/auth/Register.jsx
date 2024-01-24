import { Controller, useForm } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Register = () => {
	// Example usage:

	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		console.log(data);
		fetch('https://house-hunter-server-inky.vercel.app/register', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('from register', data);
			});
	};

	return (
		<div className=" flex justify-center items-center">
			<div className="max-w-[600px] border p-10">
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className="py-3 px-5 border-[.3px] w-full"
						name="fullName"
						type="text"
						placeholder="Full Name"
						{...register('fullName')}
					/>

					<select
						className="py-3 px-5 border-[.3px] w-full my-7"
						{...register('role', { required: true })}
					>
						<option value="">Role</option>
						<option value="owner">Owner</option>
						<option value="renter">Renter</option>
					</select>

					<div className="py-3 px-5 border-[.3px] w-full">
						<Controller
							className="w-full py-3 px-5 border-[.3px] mt-7"
							name="phoneNumber"
							control={control}
							rules={{
								validate: (value) => isValidPhoneNumber(value),
							}}
							render={({ field: { onChange, value } }) => (
								<PhoneInput
									international={false}
									value={value}
									onChange={onChange}
									defaultCountry="BD"
								/>
							)}
						/>
					</div>

					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="email"
						type="email"
						placeholder="Enter your email"
						{...register('email')}
					/>
					<input
						className="py-3 px-5 border-[.3px] w-full mt-7"
						name="password"
						type="number"
						placeholder="Password"
						{...register('password')}
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

export default Register;
