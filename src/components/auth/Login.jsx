import { useForm } from 'react-hook-form';
import 'react-phone-number-input/style.css';

const Register = () => {
	// Example usage:

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		console.log(data);
		fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				reset;
				console.log('from register', data);
			});
	};

	return (
		<div className=" flex justify-center items-center">
			<div className="max-w-[600px] border p-10">
				<form onSubmit={handleSubmit(onSubmit)}>
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
