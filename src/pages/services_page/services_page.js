import React, { useEffect } from 'react';
import clubfoot from '../../assets/home/clubfoot.png';
import aboutus_2 from '../../assets/home/about_us.png';
import logo from '../../assets/logo/logo.png';
import OurServices from './our_services';
import Footer from '../../components/footer/footer';

const Services = () => {
    useEffect(() => {
        const ourServicesElement = document.getElementById('our-services');
        if (ourServicesElement) {
            ourServicesElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div>
            <div className="mt-10 md:mt-20 flex flex-col h-full">
                <div className="flex flex-col-reverse md:flex-row px-10 lg:px-20 justify-between items-center">
                    <div className="px-5 md:px-16 w-full md:w-1/2 flex flex-col justify-center items-center md:justify-start md:items-start">
                        <p className="font-mplus_1p text-lightGreyText text-3xl md:text-5xl font-bold md:text-left">
                            Revolutionizing Clubfoot Treatment
                        </p>
                        <p className="font-mplus_1p text-lightGreyText text-lg py-3 md:py-5 md:text-xl md:text-left">
                            Connect with specialists, customize braces, and manage your treatment effortlessly.
                        </p>
                        <div>
                            <button
                                className="w-32 bg-buttonBlue font-monda hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <img src={clubfoot} className='w-56 md:w-3/4 h-auto' alt="Clubfoot" />
                    </div>
                </div>

                <div className='w-full h-7'></div>

                <div className="flex flex-col md:flex-row px-10 lg:px-20 justify-between items-center">

                    <div className='w-full my-5 md:my-0 md:w-1/2 flex justify-center md:justify-start'>
                        <img src={aboutus_2} className='w-56 lg:w-3/5 h-auto' alt="Clubfoot" />
                    </div>

                    <div className="px-5 md:px-16 w-full lg:w-1/2 flex flex-col justify-center items-center md:justify-end md:items-end">
                        <p className="font-mplus_1p text-lightGreyText text-3xl md:text-[40px] font-bold md:text-right">
                            About Us
                        </p>
                        <p className="font-mplus_1p text-lg text-lightGreyText py-3 md:py-5 lg:text-xl md:text-right">
                            With years of experience and a dedicated team of professionals, we have established ourselves as leaders in clubfoot treatment. Our mission is to provide exceptional care that is accessible, effective, and compassionate. We are committed to continuous improvement and innovation in our techniques and services to ensure the best outcomes for our patients.
                        </p>
                    </div>

                </div>

            </div>
            <div id="our-services">
                <OurServices />
            </div>

            <div className='flex flex-col w-full justify-center items-center'>
                <div className="w-3/4 mt-10">
                    <h1 className="font-mplus_1p text-3xl md:text-5xl my-5 font-bold text-lightGreyText">Contact Us</h1>
                    <p className="font-mplus_1p text-sm md:text-xl text-black"> If you have any questions about our services or would like to schedule an appointment, please don't hesitate to contact us. Our friendly and knowledgeable staff are here to assist you.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Services;
