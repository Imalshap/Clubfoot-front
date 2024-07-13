import React from 'react';
import { Link } from 'react-router-dom';
import name from '../../../assets/professionals/profile.png';
import role from '../../../assets/professionals/role.png';
import location from '../../../assets/professionals/location.png';
import chat from '../../../assets/professionals/chat.png';

const ShoeMakerCard = ({ profilePic, Name, Role, Location, Availability }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-custom-heavy transition duration-300 ease-in-out rounded-lg p-8 mx-auto max-w-md">
            <div className='mt-0 -mr-32'>
                <Link to='/chat-user'>
                    <img src={chat} alt='chat' className=' w-6 h-5' />
                </Link>
            </div>
            <img
                src={profilePic}
                alt="Profile Picture"
                className="rounded-full h-24 w-24 mb-4"
            />
            <ul className="text-center font-mplus_1p">
                <li className="flex items-center justify-start space-x-2 mb-2">
                    <img src={name} alt="Location Icon" className="w-4 h-4" />
                    <span>{Name}</span>
                </li>
                <li className="flex items-center justify-start space-x-2 mb-2">
                    <img src={role} alt="Phone Icon" className="w-4 h-4" />
                    <span>{Role}</span>
                </li>
                <li className="flex items-center justify-start space-x-2 mb-2">
                    <img src={location} alt="Email Icon" className="w-4 h-4" />
                    <span>{Location}</span>
                </li>
                <li className="flex items-center justify-start space-x-2 mb-2">
                    <div className='w-4 h-4 bg-green-400 rounded-full'></div>
                    <span>{Availability}</span>
                </li>
            </ul>
            <Link to='/shoemaker-profile'>
                <button className="bg-buttonBlue hover:bg-blue-500 text-white font-bold py-2 px-10 rounded mt-4">
                    Connect
                </button>
            </Link>
        </div>
    );
};

export default ShoeMakerCard;
