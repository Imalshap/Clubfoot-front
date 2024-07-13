import React, { useState } from 'react';

const ForgotPasswordForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
            
            <div className="flex justify-center font-inter text-sm md:text-xl">
                <button 
                    type="submit" 
                    className="w-full bg-buttonBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Send Code
                </button>
            </div>
        </form>
    );
};

export default ForgotPasswordForm;  
