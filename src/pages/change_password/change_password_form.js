import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi'; 

const ChangePasswordForm = () => {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
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
        console.log(formData);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <form onSubmit={handleSubmit} className="min-w-[250px] md:min-w-[500px] mx-auto p-8 bg-white shadow-md rounded-md">
            <div className="mb-6 relative">
                <label htmlFor="password" className="block text-start font-mplus_1p text-sm font-medium text-gray-700">New Password</label>
                <div className="flex items-center">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        id="password" 
                        placeholder="Please enter your new password"
                        value={formData.password} 
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required 
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex mt-5 items-center px-2 focus:outline-none"
                    >
                        {showPassword ? <HiEyeOff className="h-5 w-5 text-gray-500" /> : <HiEye className="h-5 w-5 text-gray-500" />}
                    </button>
                </div>
            </div>
            <div className="mb-6 relative">
                <label htmlFor="confirmPassword" className="block text-start font-mplus_1p text-sm font-medium text-gray-700">Confirm Password</label>
                <div className="flex items-center">
                    <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        name="confirmPassword" 
                        id="confirmPassword" 
                        placeholder="Please confirm your new password"
                        value={formData.confirmPassword} 
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required 
                    />
                    <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute inset-y-0 right-0 flex mt-5 items-center px-2 focus:outline-none"
                    >
                        {showConfirmPassword ? <HiEyeOff className="h-5 w-5 text-gray-500" /> : <HiEye className="h-5 w-5 text-gray-500" />}
                    </button>
                </div>
            </div>
            <div className="flex justify-center font-inter text-xl">
                <button 
                    type="submit" 
                    className="w-full bg-buttonBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Change Password
                </button>
            </div>
        </form>
    );
};

export default ChangePasswordForm;
