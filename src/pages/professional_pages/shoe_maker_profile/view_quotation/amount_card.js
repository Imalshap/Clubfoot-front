import React from 'react';
import note_icon from '../../../../assets/user/note.png';
import file_icon from '../../../../assets/professionals/shoemaker/request_file.png';

const RequestCard = ({fileUrl, name, email, number, nic, amount, file }) => {
    return (
        <div className="flex flex-col w-[260px] md:w-96 bg-white shadow-custom-medium transition duration-300 ease-in-out rounded-lg py-8 px-4 mx-auto max-w-md">
            <div className='flex felx-row bg-white justify-center items-center py-3 px-2 rounded-2xl shadow-custom-medium space-x-2'>
                <div className='font-mplus_1p text-lightGreyText space-y-1 text-sm md:text-base flex flex-col justify-start items-start'>
                    <p>Name:</p>
                    <p>Email:</p>
                    <p>Number:</p>
                    <p>NIC Number:</p>
                </div>
                <div className='font-mplus_1p text-lightGreyText text-sm md:text-base font-semibold space-y-1 flex flex-col justify-start items-start'>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{number}</p>
                    <p>{nic}</p>
                </div>
            </div>
            <div className='flex flex-col items-center py-5'>
                <div className=' w-11/12 h-[2px] bg-black'></div>
                <div className='flex flex-row w-full items-center justify-around py-2'>
                    <p className='font-mplus_1p text-black text-sm md:text-base font-bold'>Estimated Amount</p>
                    <p className='font-mplus_1p text-black text-sm md:text-base font-bold'>{amount}</p>
                </div>
                <div className=' w-11/12 h-[2px] bg-black'></div>
            </div>
            <div className='flex flex-col md:flex-row space-y-1 md:space-y-0'>
                <div className='flex flex-row space-x-1 items-start'>
                    <img src={note_icon} alt='' className='w-5 h-5'/>
                    <p className='font-mplus_1p text-[#7B7B7B] text-sm font-semibold'>View the document for more details</p>
                </div>
                <div className='flex flex-row border border-black rounded  justify-center items-center'>
                    <img src={file_icon} alt='request file' className='p-1 w-6 h-6 md:w-8 md:h-8' />
                    <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm md:text-sm font-mplus_1p overflow-hidden">{file}</a>
                </div>
            </div>
        </div>
    );
};

export default RequestCard;
