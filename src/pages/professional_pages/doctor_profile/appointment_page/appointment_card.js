import React from 'react';
import { Link } from 'react-router-dom';
import time_slot from '../../../../assets/professionals/doctors/time_slot.png';

const AppointmentCard = ({ Location, Session_Date, Session_Time, Hospital, Appointment_no }) => {
    return (
        <div className="flex flex-col items-center justify-center w-[260px] md:w-80 bg-white shadow-custom-medium transition duration-300 ease-in-out rounded-lg py-8 px-4 mx-auto max-w-md">
            <img
                src={time_slot}
                alt="Profile Picture"
                className="rounded-full h-24 w-24 mb-4"
            />
            <ul className="text-center text-lightGreyText font-mplus_1p">
                <li className="flex items-center justify-center text-sm space-x-2 mb-2">
                    <span className='font-bold text-xl'>{Hospital}</span>
                </li>
                <li className="flex items-center justify-center space-x-2 mb-2">
                    <span className='text-[#7B7B7B] font-semibold text-lg'>{Location}</span>
                </li>
            </ul>
            <div className='flex flex-row w-full justify-between'>
                <div className='flex flex-col'>
                    <p>Session date</p>
                    <p className='font-bold text-lightGreyText text-base'>{Session_Date}</p>
                </div>
                <div className='flex flex-col'>
                    <p>Session date</p>
                    <p className='text-lightGreyText font-bold text-base'>{Session_Time}</p>
                </div>
            </div>
            <div className='text-start w-full mt-3 font-mplus_1p'>
                <p>Appointment no</p>
                <p className='font-bold'>{Appointment_no}</p>
            </div>
            <p className='text-[#7B7B7B] mt-3 text-sm text-start'>Your estimated appointment time is <span className='font-bold text-[#7B7B7B]'>{Session_Time}</span> This time is depending on the time spend with patients / applicants ahead of you</p>
            
        </div>
    );
};

export default AppointmentCard;
