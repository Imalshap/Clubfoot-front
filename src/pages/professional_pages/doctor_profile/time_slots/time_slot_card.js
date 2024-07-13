import React from 'react';
import add from '../../../../assets/professionals/doctors/time_slot.png';

const TimeSlotCard = ({
    hospitalName,
    location,
    time,
    period,
    patientCount,
    fee,
    feeNote,
    noteIcon
}) => {
    return (
        <div>
            <p className='font-mplus_1p text-lightGreyText text-start py-5 text-lg font-semibold'>Saturday, 25 May 2024</p>
            <div className="flex flex-row justify-around items-center w-full p-1 lg:p-4 bg-white shadow-custom-medium rounded-2xl py-2 space-y-3 h-auto md:h-auto">
                <div className='grid grid-rows-4'>
                    <div className='row-span-1 -mt-12 md:-mt-10 ml-1 md:-ml-1'>
                        <div className='w-3 h-3 md:w-5 md:h-5 bg-green-400 rounded-full'></div>
                    </div>
                    <div className='row-span-3'>
                        <img src={add} alt='' className='w-5 h-5 sm:w-11 sm:h-11 md:w-14 md:h-14 mr-5' />
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <div className="bg-gray-600 h-[100px] md:h-[140px] -ml-1 w-[2px] rounded-2xl mr-3"></div>
                    <div className='flex flex-col justify-start items-start'>
                        <div className='flex flex-col justify-start items-start'>
                            <p className="text-left text-lightGreyText font-bold text-sm md:text-lg font-mplus_1p">{hospitalName}</p>
                            <p className="text-xs md:text-base text-lightGreyText text-left font-mplus_1p">{location}</p>
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <p className="text-left text-lightGreyText font-bold text-sm md:text-lg font-mplus_1p">{time}</p>
                            <p className="text-xs md:text-base text-lightGreyText text-left font-mplus_1p">{period}</p>
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <p className="text-left text-lightGreyText font-bold text-sm md:text-lg font-mplus_1p">{patientCount}</p>
                            <p className="text-xs md:text-base text-lightGreyText text-left font-mplus_1p">Patients</p>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col-reverse lg:flex-row'>
                    <div className='flex flex-col justify-start items-start px-3 py-2'>
                        <div className='flex flex-col justify-start items-start'>
                            <p className="text-left text-[#47DE00] font-bold text-xs md:text-sm lg:text-xl font-mplus_1p">{fee}</p>
                            <div className='flex flex-row justify-center items-start md:items-center space-x-1'>
                                <p className="text-xs md:text-base text-lightGreyText text-left font-mplus_1p">{feeNote}</p>
                                <img src={noteIcon} alt='' className='w-3 h-3 mt-[3px] md:mt-0 md:w-5 md:h-5' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <button className='bg-buttonBlue px-3 py-1 text-sm lg:px-5 lg:py-2 rounded md:rounded-md text-white lg:text-lg'>Available</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeSlotCard;
