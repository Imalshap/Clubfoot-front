import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ProfileCard from "./profile_card";
import profile_pic from '../../../../assets/professionals/profile.jpeg';
import TimeSlotCard from "./time_slot_card";
import Noteicon from '../../../../assets/user/note.png';
import add from '../../../../assets/professionals/doctors/time_slot.png';
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const TimeSLotList = [
    {
        hospitalName: "Borella Winsetha Medical Hospital",
        location: "Colombo",
        time: "08:30AM",
        period: "Morning",
        patientCount: "0",
        fee: "Rs 1,000.00 + Booking Fee",
        feeNote: "Channelling Fee",
        noteIcon: Noteicon,
        date: "Saturday, 25 May 2024"
    },
    {
        hospitalName: "Borella Winsetha Medical Hospital",
        location: "Colombo",
        time: "08:30AM",
        period: "Morning",
        patientCount: "0",
        fee: "Rs 1,000.00 + Booking Fee",
        feeNote: "Channelling Fee",
        noteIcon: Noteicon,
        date: "Saturday, 25 May 2024"
    },
    {
        hospitalName: "Borella Winsetha Medical Hospital",
        location: "Colombo",
        time: "08:30AM",
        period: "Morning",
        patientCount: "0",
        fee: "Rs 1,000.00 + Booking Fee",
        feeNote: "Channelling Fee",
        noteIcon: Noteicon,
        date: "Saturday, 25 May 2024"
    },
    {
        hospitalName: "Borella Winsetha Medical Hospital",
        location: "Colombo",
        time: "08:30AM",
        period: "Morning",
        patientCount: "0",
        fee: "Rs 1,000.00 + Booking Fee",
        feeNote: "Channelling Fee",
        noteIcon: Noteicon
    },
    {
        hospitalName: "Borella Winsetha Medical Hospital",
        location: "Colombo",
        time: "08:30AM",
        period: "Morning",
        patientCount: "0",
        fee: "Rs 1,000.00 + Booking Fee",
        feeNote: "Channelling Fee",
        noteIcon: Noteicon,
        date: "Saturday, 25 May 2024"
    },
    {
        hospitalName: "Borella Winsetha Medical Hospital",
        location: "Colombo",
        time: "08:30AM",
        period: "Morning",
        patientCount: "0",
        fee: "Rs 1,000.00 + Booking Fee",
        feeNote: "Channelling Fee",
        noteIcon: Noteicon,
        date: "Saturday, 25 May 2024"
    }
]

const TimeSlot = () => {
    return (
        <div className="mt-16 md:mt-24 mb-20 w-full">
            <div className="flex justify-center">
                <div className="w-5/6">
                    <div className="flex flex-row items-center">
                        <Link to='/professionals'>
                            <div className="relative md:absolute ml-0 md:-ml-16 md:-mt-6  bg-[#E8E8E8] rounded-full p-3 w-12 h-12 flex justify-center items-center">
                                <IoIosArrowBack size={28} />
                            </div>
                        </Link>
                        <p className="text-start text-3xl md:text-4xl lg:text-4xl ml-5 md:ml-0 text-lightGreyText font-bold font-mplus_1p">
                            Meet Your Care Person
                        </p>
                    </div>
                    <p className="text-center md:text-start text-lightGreyText text-lg md:text-xl py-3">Welcome to our doctor profiles section, where you can learn more about the skilled professionals dedicated to providing exceptional care for clubfoot treatment.</p>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row w-full px-4 justify-around space-x-4">
                <div className="flex flex-col items-center">
                    <ProfileCard
                        profilePic={profile_pic}
                        Gender='Male'
                        Name='Demon Salvatore'
                        Role='Pediatric Orthopedics'
                        Location='Colombo'
                    />
                    <div className="grid col-span-2 shadow-custom-medium rounded-xl w-auto mb-10 md:w-80 mt-10 h-auto">
                        <div className="flex flex-row font-mplus_1p justify-center md:justify-start space-x-2 items-top px-6 py-2">

                            <p className="text-xl font-mplus_1p text-start">Available Hospitals</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start space-y-2 p-2">
                            <div className="flex flex-row space-x-2">
                                <img src={add} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                                <p className="font-mplus_1p font-bold text-sm md:text-base">Borella Winsetha Medical Hospital</p>
                            </div>
                            <div className="flex flex-row space-x-2">
                                <img src={add} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                                <p className="font-mplus_1p font-bold text-sm md:text-base">Borella Winsetha Medical Hospital</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-3 mx-auto">

                    <div className="w-full mr-5 h-full p-3 bg-white shadow-custom-medium font-monda text-start rounded-md">
                        <p className="text-start font-mplus_1p text-lightGreyText text-base my-1" >Filter By</p>
                        <div className="flex flex-col md:flex-row w-11/12 space-x-3 justify-between items-center">


                            <div className="ml-0 md:ml-20 mb-3">
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                    Date
                                </label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Date" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                            <div className="w-full md:w-2/5 mb-3">
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Select Your Hospital</label>
                                <select
                                    id="location"
                                    name="location"
                                    className="border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded py-3 px-3"
                                    required
                                >
                                    <option value="" disabled selected>Select Location</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Gampaha">Gampaha</option>
                                    <option value="Anuradhapura">Anuradhapura</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full flex justify-center md:justify-end">
                            <button
                                className='text-white font-inter font-semibold bg-buttonBlue hover:bg-blue-900 px-8 py-1 rounded'
                            // onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    {TimeSLotList.map((slot, index) => (
                        <TimeSlotCard
                            key={index}
                            hospitalName={slot.hospitalName}
                            location={slot.location}
                            time={slot.time}
                            period={slot.period}
                            patientCount={slot.patientCount}
                            fee={slot.fee}
                            feeNote={slot.feeNote}
                            noteIcon={slot.noteIcon}
                            date={slot.date}
                        />
                    ))}
                </div>
            </div>



        </div>
    );
}

export default TimeSlot;