import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import shoe from '../../assets/accessories/shoe.jpeg';
import visa from '../../assets/professionals/shoemaker/visa.png';
import master from '../../assets/professionals/shoemaker/master.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RatingSummary from "./ratings";
import Footer from "../../components/footer/footer";

const SingleAccessorie = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i) {
            return (
                <div className="w-auto border border-black">
                    <img src={shoe} alt={`Thumbnail ${i + 1}`} className="h-5 w-9" />
                </div>
            );
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="mt-10 md:mt-24 mb-20 flex flex-col justify-center items-center">
            <div className="w-5/6 shadow-custom-medium rounded-xl flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row py-8 px-2 md:p-8 relative">
                <Link to='/accessories' className="absolute top-0 left-0 mt-4 ml-4">
                    <div className="bg-[#E8E8E8] rounded-full p-3 w-10 h-10  md:w-14 md:h-14 flex justify-center items-center">
                        <IoIosArrowBack size={28} />
                    </div>
                </Link>
                <div className="w-full justify-center md:w-1/3 my-10 shadow-custom-medium h-56 md:h-auto md:shadow-none rounded-2xl md:rounded-none p-0 md:p-6">
                    <Slider {...settings}>
                        <div className="flex justify-center">
                            <img src={shoe} alt="ComfortFit Clubfoot Shoe" className="w-32 h-32 md:w-48 md:h-48 mb-4" />
                        </div>
                        <div className="flex justify-center">
                            <img src={shoe} alt="ComfortFit Clubfoot Shoe" className="w-32 h-32 md:w-48 md:h-48 mb-4" />
                        </div>
                        <div className="flex justify-center">
                            <img src={shoe} alt="ComfortFit Clubfoot Shoe" className="w-32 h-32 md:w-48 md:h-48 mb-4" />
                        </div>
                        <div className="flex justify-center">
                            <img src={shoe} alt="ComfortFit Clubfoot Shoe" className="w-32 h-32 md:w-48 md:h-48 mb-4" />
                        </div>
                    </Slider>
                </div>

                {isMobile ? (
                    <div className="w-full flex justify-end">
                        <button className="bg-buttonBlue text-white px-6 py-2 rounded my-1">Buy Now</button>
                    </div>
                ) : null}

                <div className="w-full md:w-2/3 flex flex-col font-mplus_1p justify-start items-start mt-5 md:mt-0 p-2 md:p-4">
                    <h1 className="text-lg md:text-[26px] text-lightGreyText font-bold text-center md:text-start mb-4">ComfortFit Clubfoot Shoe Model A</h1>
                    <p className="text-base md:text-xl text-left text-gray-500 mb-4">
                        Designed for children with clubfoot, the ComfortFit Clubfoot Shoe Model A provides optimal support and comfort. Made with high-quality leather and a durable sole, these shoes ensure long-lasting wear and stability.
                    </p>
                    <p className="text-sm md:text-lg text-blue-600 font-bold mb-4">Rs 1,500.00</p>
                    <div className="flex w-full flex-row justify-start items-center mb-4">
                        <p className="text-sm md:text-lg font-bold mr-4">Payment Options:</p>
                        <div className='flex flex-row justify-start items-center my-3'>
                            <img src={visa} alt='visa' className='w-8 h-auto mr-3' />
                            <img src={master} alt='visa' className='w-8 h-auto' />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="text-sm md:text-lg font-bold">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" className="border ml-2 p-1 w-16" />
                    </div>
                    <div className="mb-4 flex flex-col md:flex-row justify-center items-center">
                        <span className="text-sm md:text-lg mr-0 font-bold text-left md:mr-3">Sizes Available:</span>
                        <div className="flex flex-row space-x-2 mt-2">
                            <button className="border p-1 w-8 md:w-10">5</button>
                            <button className="border p-1 w-8 md:w-10">6</button>
                            <button className="border p-1 w-8 md:w-10">7</button>
                            <button className="border p-1 w-8 md:w-10">8</button>
                            <button className="border p-1 w-8 md:w-10">9</button>
                        </div>
                    </div>
                    <div className="mb-4 flex flex-col md:flex-row items-center">
                        <span className="text-sm md:text-lg font-bold mr-0 md:mr-4">Available colors:</span>
                        <div className="flex space-x-2 mt-2">
                            <button className="w-7 h-7 rounded-full bg-red-500"></button>
                            <button className="w-7 h-7 rounded-full bg-blue-500"></button>
                            <button className="w-7 h-7 rounded-full bg-black"></button>
                        </div>
                    </div>
                    {!isMobile ? (
                        <button className="bg-buttonBlue text-white px-6 py-2 rounded mt-2">Buy Now</button>
                    ) : null}
                </div>
                <div className="md:w-2/3 p-4 flex flex-col items-start text-left justify-start">
                    <h2 className="text-base md:text-xl font-bold mb-2">Shoe Maker Details:</h2>
                    <div className='text-start ml-5 text-black font-mplus_1p'>
                        <ul className="list-disc list-grey-600 ">
                            <li className="my-2">Crafted by ABC Orthopedic Shoes, with over 20 years of experience in creating specialized footwear for children.</li>
                        </ul>
                    </div>
                    <h2 className="text-base md:text-xl font-bold mb-2">Availability:</h2>
                    <div className='text-start ml-5 text-black font-mplus_1p'>
                        <ul className="list-disc list-grey-600 ">
                            <li className="my-2">In stock</li>
                            <li className="my-2">Estimated delivery: 3-5 business days</li>
                        </ul>
                    </div>
                    <h2 className="text-base md:text-xl font-bold mb-2">Return and Exchange Policy:</h2>
                    <div className='text-start ml-5 text-black font-mplus_1p'>
                        <ul className="list-disc list-grey-600 ">
                            <li className="my-2">30-day return policy for unused shoes.</li>
                            <li className="my-2"><a href="#" className="text-blue-500">Return Instructions</a></li>
                        </ul>
                    </div>
                    <h2 className="text-base md:text-xl font-bold mb-2">Additional Accessories:</h2>
                    <div className='text-start ml-5 text-black font-mplus_1p'>
                        <ul className="list-disc list-grey-600 ">
                            <li className="my-2">Comes with extra straps and insoles.</li>
                            <li className="my-2">Recommended accessories: Orthopedic insoles, protective shoe bags.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-5/6 mt-5">
                <p className="font-mplus_1p ml-5 text-start font-bold text-lg text-black">Ratings & Reviews:</p>
            </div>

            <div className="w-5/6 mt-2 flex flex-col items-start justify-start shadow-custom-medium rounded-xl">
                <RatingSummary />
            </div>

            <div className="w-5/6 mt-5">
                <p className="font-mplus_1p ml-5 text-start font-bold text-lg text-black">Usage Instructions:</p>
            </div>

            <div className="w-5/6 mt-2 flex flex-col items-start justify-start shadow-custom-medium rounded-xl">
                <div className='text-start py-4 px-2 text-black font-mplus_1p'>
                    <ul className="list-disc list-grey-600 pl-10">
                        <li className="my-2">Ensure proper fitting by following the size chart.</li>
                        <li>Clean with a damp cloth and mild soap.</li>
                        <li className="my-2">Suitable for use with foot abduction braces.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SingleAccessorie;
