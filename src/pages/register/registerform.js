import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({ onBack }) => {

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        contactNumber: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");

            return;
        }
        // dispatch(login());

        console.log(formData);
        navigate('/user-profile')
        alert("Registration successful!");
        onBack(); 
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <form onSubmit={handleSubmit} className=" w-3/4 mx-auto p-8 bg-white shadow-md rounded-md">
            <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div className='col-span-1'>
                    <div className="col-span-1">
                        <label htmlFor="name" className="block text-sm text-start font-medium text-gray-700">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="contactNumber" className="block text-sm text-start font-medium text-gray-700">Contact Number</label>
                        <input
                            type="tel"
                            name="contactNumber"
                            id="contactNumber"
                            placeholder="Contact Number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="email" className="block text-sm text-start font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="address" className="block text-sm text-start font-medium text-gray-700">Address</label>
                        <input
                            name="address"
                            id="address"
                            placeholder="Address"
                            rows="4"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className='w-full flex justify-start mt-5'>
                    <button
                        type="button"
                        onClick={onBack}
                        className="text-center items-start w-1/2 px-4 py-2 border border-transparent text-sm font-medium shadow-sm text-white bg-buttonBlue hover:bg-indigo-700"
                    >
                        Back
                    </button>
                    </div>
                </div>
                {/* Right Column */}
                <div className='col-span-1'>
                    <div className="col-span-1">
                        <label htmlFor="password" className="block text-start text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Password"
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
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="confirmPassword" className="block text-sm text-start font-medium text-gray-700">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                            >
                                {showConfirmPassword ? <HiEyeOff className="h-5 w-5 text-gray-500" /> : <HiEye className="h-5 w-5 text-gray-500" />}
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center text-center mt-5'>
                    <button
                        type="submit"
                        className="w-full items-center px-4 py-2 border border-transparent text-sm font-medium shadow-sm text-white text-center bg-buttonBlue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign Up
                    </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default RegistrationForm;
