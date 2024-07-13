import React from 'react';
import note_icon from '../../../../assets/user/note.png';
import { useNavigate } from 'react-router-dom';

const RequestForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        navigate('/viewshoemaker-request'); 
    };

    return (
        <div className="w-full mx-auto px-3 md:px-8 py-8 rounded-2xl border shadow-custom-medium">
            <form onSubmit={handleSubmit} className='font-mplus_1p text-left mt-4'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-700">Title</label>
                        <select className="p-2 border border-buttonBlue rounded-lg">
                            <option value="mr">Mr</option>
                            <option value="ms">Ms</option>
                            <option value="mrs">Mrs</option>
                            <option value="dr">Dr</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-700">Name</label>
                        <input type="text" className="p-2 border border-buttonBlue rounded-lg" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col ">
                        <label className="mb-2 font-medium text-gray-700">Email</label>
                        <input type="email" className="p-2 border border-buttonBlue rounded-lg" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-700">Phone Number</label>
                        <input type="tel" className="p-2 border border-buttonBlue rounded-lg" placeholder="Enter your phone number" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-700">NIC</label>
                        <input type="text" className="p-2 border border-buttonBlue rounded-lg" placeholder="Enter your NIC" />
                    </div>
                </div>
                <div className='flex flex-col space-x-0 md:space-x-5 justify-start items-start'>
                    <div className="flex m-2">
                        <input type="checkbox" name="hs-default-radio" className=" mt-0.5 rounded-full text-blue-600 focus:ring-blue-500  dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" />
                        <label htmlFor="hs-default-radio" className="text-lg font-mplus_1p text-black ml-2 ">Share my profile.</label>
                    </div>
                    <div className='w-full flex flex-row justify-start space-x-1 items-start'>
                        <img src={note_icon} alt='' className='w-3 h-3 md:w-5 md:h-5 mt-[2px]' />
                        <p className='font-mplus_1p text-[#7B7B7B] text-start text-xs md:text-base font-semibold'>The individual responsible for designing your shoes will be able to see all of your medical records.</p>
                    </div>
                </div>
                <div className="w-full flex mt-4 justify-center md:justify-start">
                    <button type="submit" className="bg-buttonBlue text-white py-1 md:py-2 px-8 rounded-lg hover:bg-blue-700">
                        Send Request
                    </button>
                </div>
            </form>
            <div className='flex flex-row space-x-1 mt-4 justify-start items-start'>
                <img src={note_icon} alt='' className='w-3 h-3 md:w-5 md:h-5 mt-[2px]' />
                <p className='font-mplus_1p text-start text-[#7B7B7B] text-xs md:text-base font-semibold'>Following your submission of the request, our shoemakers will review your profile and provide you with a quote for the necessary shoe construction. Payment is determined on the shoe's kind and dimensions.</p>
            </div>
        </div>
    );
}

export default RequestForm;
