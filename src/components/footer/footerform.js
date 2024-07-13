import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('form submitted successfully')
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            description: ''
        })
        // Handle form submission logic
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-md">
            <p className='text-[#0D1821] font-mplus_1p font-bold text-xl text-start'>Have a question? Fill out the form below and we'll get back to you shortly.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Your Name"
                        value={formData.name} 
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        placeholder="Phone"
                        value={formData.phone} 
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                        required 
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email"
                        value={formData.email} 
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        name="subject" 
                        id="subject" 
                        placeholder="Subject"
                        value={formData.subject} 
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                        required 
                    />
                </div>
            </div>
            <div className="mb-4">
                <textarea 
                    name="description" 
                    id="description" 
                    placeholder="Message"
                    rows="4"
                    value={formData.description} 
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                    required 
                />
            </div>
            <div className='w-full flex justify-start'>
                <button 
                    type="submit" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-buttonBlue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
