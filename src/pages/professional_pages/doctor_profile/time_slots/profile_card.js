import React from 'react';
import name from '../../../../assets/professionals/profile.png';
import role from '../../../../assets/professionals/role.png';
import location from '../../../../assets/professionals/location.png';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profilePic, Name, Role, Location, Gender }) => {
    return (
        <div className="flex flex-col items-center justify-center w-[260px] md:w-80 bg-white shadow-custom-medium transition duration-300 ease-in-out rounded-lg py-8 px-4 mx-auto max-w-md">
            <div className='w-5 h-5 bg-green-400 rounded-full absolute -mt-[250px] -ml-[220px]  md:-mt-[250px] md:-ml-[250px]'></div>
            
            <img
                src={profilePic}
                alt="Profile Picture"
                className="rounded-full h-24 w-24 mb-4"
            />
            <ul className="text-center font-mplus_1p">
                <li className="flex items-center justify-center text-sm space-x-2 mb-2">
                    <span>{Gender}</span>
                </li>
                <li className="flex items-center justify-center space-x-2 mb-2">
                    <img src={name} alt="Location Icon" className="w-4 h-4" />
                    <span>{Name}</span>
                </li>
                <li className="flex items-center text-[#7B7B7B] justify-center space-x-2 mb-2">
                    <img src={role} alt="Phone Icon" className="w-4 h-4" />
                    <span>{Role}</span>
                </li>
                <li className="flex items-center justify-center space-x-2 mb-2">
                    <img src={location} alt="Email Icon" className="w-4 h-4" />
                    <span>{Location}</span>
                </li>
            </ul>
            <Link to='/doctor-profile'>
                <button className="bg-buttonBlue hover:bg-blue-500 text-white font-bold py-2 px-10 rounded mt-4">
                    View Profile
                </button>
            </Link>
        </div>
    );
};

export default ProfileCard;
