import React from 'react';
import note_icon from '../../../../assets/user/note.png';

const RequestForm = () => {
    return (
        <div className="w-full mx-auto p-8 rounded-2xl border shadow-custom-medium">
            <div className='flex flex-row space-x-1 items-start md:items-center'>
                <img src={note_icon} alt='' className='w-5 h-5 md:w-7 md:h-7' />
                <p className='font-mplus_1p text-lightGreyText text-sm md:text-lg font-semibold'>Fill these data in order to create a appointment request.</p>
            </div>
            <form className='font-mplus_1p text-left mt-4'>
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
                <div className="flex mt-4 justify-start">
                    <button type="submit" className="bg-buttonBlue text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    Send Request
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RequestForm;
