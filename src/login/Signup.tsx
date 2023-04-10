import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth";

interface User {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const Signup = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState<User>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (user.password !== user.confirmPassword) {
			alert("Mật khẩu xác nhận không đúng");
			return;
		}
		console.log(user);
		signup(user);
		navigate('/signin');
	};

	return (
		<div>
			<h1>Đăng ký</h1>
			<form onSubmit={onHandleSubmit}>
				<div>
					<label htmlFor="name">Họ tên:</label>
					<input
						type="text"
						name="name"
						value={user.name}
						onChange={onHandleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						value={user.email}
						onChange={onHandleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="password">Mật khẩu:</label>
					<input
						type="password"
						name="password"
						value={user.password}
						onChange={onHandleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
					<input
						type="password"
						name="confirmPassword"
						value={user.confirmPassword}
						onChange={onHandleChange}
						required
					/>
				</div>
				<button type="submit">Đăng ký</button>
			</form>
		</div>
	);
};

export default Signup;