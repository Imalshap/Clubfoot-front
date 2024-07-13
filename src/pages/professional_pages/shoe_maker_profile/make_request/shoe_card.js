import React from 'react';
import availability from '../../../../assets/professionals/availability.png';
import visa from '../../../../assets/professionals/shoemaker/visa.png'
import master from '../../../../assets/professionals/shoemaker/master.png'

const ShoeCard = ({ image, description, price }) => {
    return (
        <div className="flex flex-col  w-[260px] md:w-72 bg-white shadow-custom-medium transition duration-300 ease-in-out rounded-lg py-8 px-4 mx-auto max-w-md">
            <div className='flex flex-col justify-center items-center'>
                <div className='w-5 h-5 bg-green-400 rounded-full absolute -mt-[250px] -ml-[220px]  md:-mt-[250px] md:-ml-[250px]'></div>
                <img
                    src={image}
                    alt="Profile Picture"
                    className="h-32 w-32 mb-4"
                />
                <div className='w-11/12 bg-lightGreyText h-[2px] my-2 '></div>
                <div>
                    <p className='font-mplus_1p text-black text-lg text-start'>{description}</p>
                    <p className='text-buttonBlue font-bold text-start text-lg'>{price}</p>
                </div>
            </div>
            <div className='flex flex-row justify-start items-center my-3'>
                <img src={visa} alt='visa' className='w-8 h-auto mr-3' />
                <img src={master} alt='visa' className='w-8 h-auto' />
            </div>
        </div>
    );
};

export default ShoeCard;
