import safe from '../../assets/professionals/doctors/safe.png';
import pro from '../../assets/professionals/doctors/pro.png';
import trust from '../../assets/professionals/doctors/trusted.png';
import expert from '../../assets/professionals/doctors/expert.png';
import support from '../../assets/professionals/doctors/support.png';
import AccessorieCard from './accessoriesw_card';
import shoe_pic from '../../assets/accessories/shoe.jpeg';
import Footer from '../../components/footer/footer';
import { useState } from 'react';
import '../../index.css';

const Accessories = () => {

    const [isPlaceholder, setIsPlaceholder] = useState(true);
    const [location, setLocation] = useState('');

    const handleDateChange = (e) => {
        const value = e.target.value;
        setIsPlaceholder(value === "");
    };


    return (
        <>
            <div className=" mt-14 md:mt-24">
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
                    <p className="text-3xl md:text-4xl lg:text-5xl text-lightGreyText font-bold font-mplus_1p">
                        Accessories for Your Clubfoot Shoes
                    </p>
                    <div className='px-3 md:px-48'>
                        <p className="text-lightGreyText text-lg md:text-xl px-5 md:px-20 py-3">Enhance the comfort and functionality of your clubfoot shoes with our range of high-quality accessories. Each item is designed to support your journey towards better mobility and foot health.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-5 '>

                    <div className=" col-span-1 md:w-full h-full md:h-1/2 p-4 bg-white shadow-md font-monda text-start rounded-md">
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-lg font-bold text-gray-700 mb-1">Location</label>
                            <select
                                id="specialization"
                                name="specialization"
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
                            <label htmlFor="date" className="block text-lg font-bold text-gray-700 mb-1">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                placeholder='05/10/2024'
                                className={`border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md py-2 px-3 ${isPlaceholder ? 'date-placeholder' : ''}`}
                                // value={date}
                                onChange={handleDateChange}
                            />
                        </div>
                        <div>
                            <button
                                className='text-white font-inter font-semibold bg-buttonBlue hover:bg-blue-900 px-8 py-1 rounded-lg'
                            // onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    <div className='col-span-4 w-full'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
                            <AccessorieCard
                                image={shoe_pic}
                                description='ComfortFit Clubfoot Shoe Model A'
                                price='Rs 1,500.00'
                            />

                            <AccessorieCard
                                image={shoe_pic}
                                description='ComfortFit Clubfoot Shoe Model A'
                                price='Rs 1,500.00'
                            />
                            <AccessorieCard
                                image={shoe_pic}
                                description='ComfortFit Clubfoot Shoe Model A'
                                price='Rs 1,500.00'
                            />
                            <AccessorieCard
                                image={shoe_pic}
                                description='ComfortFit Clubfoot Shoe Model A'
                                price='Rs 1,500.00'
                            />
                            <AccessorieCard
                                image={shoe_pic}
                                description='ComfortFit Clubfoot Shoe Model A'
                                price='Rs 1,500.00'
                            />

                            <AccessorieCard
                                image={shoe_pic}
                                description='ComfortFit Clubfoot Shoe Model A'
                                price='Rs 1,500.00'
                            />
                            <AccessorieCard
                                image={shoe_pic}
                                description='ComfortFit Clubfoot Shoe Model A'
                                price='Rs 1,500.00'
                            />
                            <AccessorieCard
                                image={shoe_pic}
                                description='ComfortFit Clubfoot Shoe Model A'
                                price='Rs 1,500.00'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Accessories;
