import React, { useState } from 'react';
import safe from '../../../assets/professionals/doctors/safe.png';
import pro from '../../../assets/professionals/doctors/pro.png';
import trust from '../../../assets/professionals/doctors/trusted.png';
import expert from '../../../assets/professionals/doctors/expert.png';
import support from '../../../assets/professionals/doctors/support.png';
import profile_pic from '../../../assets/professionals/profile.jpeg';
import ShoeMakerProfile from '../../../assets/professionals/shoemaker_profile.jpeg';
import ShoeMakerCard from './shoe_maker_card';
import DoctorCard from './doctor_card';
import Footer from '../../../components/footer/footer';

const doctors = [
    {
        profilePic: profile_pic,
        Name: 'Demon Salvatore',
        Role: 'Pediatric Orthopedics',
        Location: 'Colombo',
        Availability: 'available'
    },
    {
        profilePic: profile_pic,
        Name: 'Demon Salvatore',
        Role: 'Pediatric Orthopedics',
        Location: 'Colombo',
        Availability: 'available'
    },
    {
        profilePic: profile_pic,
        Name: 'Demon Salvatore',
        Role: 'Pediatric Orthopedics',
        Location: 'Colombo',
        Availability: 'available'
    },
    {
        profilePic: profile_pic,
        Name: 'Demon Salvatore',
        Role: 'Pediatric Orthopedics',
        Location: 'Colombo',
        Availability: 'available'
    },
    {
        profilePic: profile_pic,
        Name: 'Demon Savatore',
        Role: 'Pediatric Orthopedics',
        Location: 'Gampaha',
        Availability: 'available'
    },
    {
        profilePic: profile_pic,
        Name: 'Demon Salvatore',
        Role: 'Pediatric Orthopedics',
        Location: 'Colombo',
        Availability: 'available'
    },
];

const shoe_makers = [
    {
        profilePic: ShoeMakerProfile,
        Name: 'Walter White',
        Role: 'Custom Orthotics',
        Location: 'Colombo',
        Availability: 'available'
    },
    {
        profilePic: ShoeMakerProfile,
        Name: 'Walter White',
        Role: 'Custom Orthotics',
        Location: 'Colombo',
        Availability: 'available'
    },
    {
        profilePic: ShoeMakerProfile,
        Name: 'Walter White',
        Role: 'Custom Orthotics',
        Location: 'Gampaha',
        Availability: 'available'
    },
    {
        profilePic: ShoeMakerProfile,
        Name: 'Walter White',
        Role: 'Custom Orthotics',
        Location: 'Colombo',
        Availability: 'available'
    },
    {
        profilePic: ShoeMakerProfile,
        Name: 'Walter White',
        Role: 'Custom Orthotics',
        Location: 'Colombo',
        Availability: 'available'
    },
];

const ViewProfessionals = () => {
    const [name, setName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);
    const [filteredShoemakers, setFilteredShoemakers] = useState(shoe_makers);
    const [showDoctors, setShowDoctors] = useState(true);

    const [isPlaceholder, setIsPlaceholder] = useState(true);

    const handleDateChange = (e) => {
        const value = e.target.value;
        setDate(value);
        setIsPlaceholder(value === "");
    };

    const handleSearch = () => {
        const filtered = showDoctors
            ? doctors.filter(doctor => {
                return (
                    (!name || doctor.Name.toLowerCase().includes(name.toLowerCase())) &&
                    (!specialization || doctor.Role === specialization) &&
                    (!location || doctor.Location === location)
                );
            })
            : shoe_makers.filter(shoemaker => {
                return (
                    (!name || shoemaker.Name.toLowerCase().includes(name.toLowerCase())) &&
                    (!specialization || shoemaker.Role === specialization) &&
                    (!location || shoemaker.Location === location)
                );
            });

        if (showDoctors) {
            setFilteredDoctors(filtered);
        } else {
            setFilteredShoemakers(filtered);
        }
    };

    const handleShowDoctors = () => {
        setShowDoctors(true);
        handleSearch();
    };

    const handleShowShoemakers = () => {
        setShowDoctors(false);
        handleSearch();
    };

    return (
        <>
            <div className="mt-16 md:mt-24">
                <div className="w-full flex justify-center">
                    <div className="flex flex-col md:flex-row justify-center items-center w-4/5 md:w-2/3">
                        <div className="grid grid-cols-2 md:flex md:flex-row font-inter text-xs md:text-sm justify-center items-center space-y-5 sm:space-y-3 sm:space-x-0 md:space-y-0 md:space-x-[24px]">
                            <div className="flex flex-row justify-start items-center space-x-1 md:space-x-2">
                                <img src={safe} alt="Safe Payment" className="w-5 h-5" />
                                <p className='text-left md:text-center'>Safe Payment</p>
                            </div>
                            <div className="flex flex-row justify-start items-center space-x-1 md:space-x-2">
                                <img src={pro} alt="Experienced Professionals" className="w-5 h-5" />
                                <p className='text-left md:text-center'>Experienced Professionals</p>
                            </div>
                            <div className="flex flex-row justify-start items-center space-x-1 md:space-x-2">
                                <img src={trust} alt="Trusted by Thousands" className="w-4 h-5" />
                                <p className='text-left md:text-center'>Trusted by Thousands</p>
                            </div>
                            <div className="flex flex-row justify-start items-center space-x-1 md:space-x-2">
                                <img src={expert} alt="Expert Verified" className="w-5 h-5" />
                                <p className='text-left md:text-center'>Expert Verified</p>
                            </div>
                            <div className="flex flex-row justify-start items-center space-x-1 md:space-x-2">
                                <img src={support} alt="24/7 Customer Support" className="w-4 h-5" />
                                <p className='text-left md:text-center'>24/7 Customer Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className="text-2xl md:3xl lg:text-4xl m-1 md:mx-0 xl:text-5xl text-lightGreyText font-bold font-mplus_1p">
                        Find the Right Professionals for Your Needs
                    </p>
                    <div className='px-3 xl:px-48'>
                        <p className="text-lightGreyText text-lg md:text-xl px-5 md:px-20 py-3">Looking for the right experts to address your concerns? Our platform offers a seamless experience to connect you with trusted doctors and skilled shoe makers specialized in treating clubfoot.</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center space-x-4 space-y-3 md:space-y-0 mt-3 items-center'>
                    <button
                        className={`font-inter py-2 px-10 border rounded-3xl ${showDoctors ? 'bg-buttonBlue text-white' : 'bg-white text-black border-gray-500'}`}
                        onClick={handleShowDoctors}
                    >
                        Doctor
                    </button>
                    <button
                        className={`font-inter py-2 px-10 border rounded-3xl ${!showDoctors ? 'bg-buttonBlue text-white' : 'bg-white text-black border-gray-500'}`}
                        onClick={handleShowShoemakers}
                    >
                        Shoe Maker
                    </button>
                </div>

                <div className='w-full flex flex-col md:flex-row mt-2 p-10 md:p-4'>
                    <div className="w-full md:w-1/3 mr-5 mt-10 h-full p-4 bg-white shadow-md font-monda text-start rounded-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='Name'
                                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md py-2 px-3"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
                                Specialization
                            </label>
                            <select
                                id="specialization"
                                name="specialization"
                                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md py-2 px-3"
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                                required
                            >
                                <option value="" disabled selected>Select Specialization</option>
                                <option value="Pediatric Orthopedics">Pediatric Orthopedics</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Dermatology">Dermatology</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <select
                                id="location"
                                name="location"
                                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md py-2 px-3"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            >
                                <option value="" disabled selected>Select Location</option>
                                <option value="Colombo">Colombo</option>
                                <option value="Gampaha">Gampaha</option>
                                <option value="Anuradhapura">Anuradhapura</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className={`border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md py-2 px-3 ${isPlaceholder ? 'date-placeholder' : ''
                                    }`}
                                value={date}
                                onChange={handleDateChange}
                            />
                        </div>
                        <div>
                            <button
                                className='text-white font-inter font-semibold bg-buttonBlue hover:bg-blue-900 px-8 py-1 rounded-lg'
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Doctors */}
                    {showDoctors ? (
                        <div className='w-full flex mt-10 justify-center'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                                {filteredDoctors.map((doctor, index) => (
                                    <DoctorCard
                                        key={index}
                                        profilePic={doctor.profilePic}
                                        Name={doctor.Name}
                                        Role={doctor.Role}
                                        Location={doctor.Location}
                                        Availability={doctor.Availability}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : null}

                    {/* ShoeMakers */}
                    {!showDoctors ? (
                        <div className='w-full flex mt-10 justify-center'>
                            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5'>
                                {filteredShoemakers.map((shoemaker, index) => (
                                    <ShoeMakerCard
                                        key={index}
                                        profilePic={shoemaker.profilePic}
                                        Name={shoemaker.Name}
                                        Role={shoemaker.Role}
                                        Location={shoemaker.Location}
                                        Availability={shoemaker.Availability}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ViewProfessionals;
