import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../api/auth";


interface User {
    email: string;
    password: string;
}

const Signin = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({
        email: "",
        password: "",
    });

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signin(user);
            navigate("/");
        } catch (error) {
            alert("Đăng nhập không thành công");
        }
    };

    return (
        <div className="Login">
            <h1>Đăng nhập</h1>
            <form onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={onHandleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu:</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={onHandleChange}
                        required
                    />
                </div>
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
};

export default Signin;