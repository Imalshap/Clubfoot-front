import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(login());

        console.log(formData);
        navigate('/user-profile')
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form onSubmit={handleSubmit} className="min-w-[250px] md:min-w-[500px] mx-auto p-8 bg-white shadow-md rounded-md">
            <div className="mb-6">
                <label htmlFor="email" className="block text-start font-mplus_1p text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>
            <div className="mb-6 relative">
                <label htmlFor="password" className="block text-start font-mplus_1p text-sm font-medium text-gray-700">Password</label>
                <div className="flex items-center">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                    >
                        {showPassword ? <HiEyeOff className="h-5 w-5 text-gray-500" /> : <HiEye className="h-5 w-5 text-gray-500" />}
                    </button>
                </div>
                <div className="text-right mt-1">
                    <Link to='/forgot-password'>
                        <p className=" text-xs text-[#575757] underline">Forgot Password?</p>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center font-inter text-xl">
                <button
                    type="submit"
                    className="w-full bg-buttonBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Sign In
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
