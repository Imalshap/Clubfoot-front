import ContactForm from "./footerform";
import facebook from '../../assets/footer/facebook.png'
import instagram from '../../assets/footer/instagram.png'
import email from '../../assets/footer/email.png'
import phone from '../../assets/footer/phone.png'
import location from '../../assets/footer/location.png'
import twitter from '../../assets/footer/twitter.png'
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="flex flex-col bottom-0 mt-20 w-full">
            <div className="flex flex-col md:flex-row bg-[#E7FFE7] text-white p-6">
                <div className="flex flex-col items-center text-black space-y-6 w-full col-span-1 mr-10">
                    <div className="flex items-center space-x-3 bg-white w-72 p-5 rounded-2xl">
                        <div className="bg-[#E7FFE7] p-4 rounded-full">
                            <img src={phone} alt="Phone icon" className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="font-bold text-start text-[#555555] text-xl">Telephone number</p>
                            <p className="text-[#8B8B8B] font-inter text-sm font-bold">+971 4 123 4567</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-white w-72 p-5 rounded-2xl">
                        <div className="bg-[#E7FFE7] p-4 rounded-full">
                            <img src={email} alt="Email icon" className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="font-bold text-[#555555] text-xl">Email address</p>
                            <a href="mailto:info@makemeright.com" className="text-[#8B8B8B] font-inter text-sm font-bold">
                                info@makemeright.com
                            </a>
                        </div>

                    </div>
                    <div className="flex items-center space-x-3 w-72 p-5 rounded-2xl">
                        <div className="flex w-full flex-row justify-center space-x-5">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="Facebook" className="w-10 h-10" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" className="w-10 h-10" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram" className="w-10 h-10" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex md:block hidden col-span-2 w-full">
                    <ContactForm />
                </div>
            </div>
            <div className="flex flex-col w-full bg-[#E7FFE7]">
                <div className="hidden md:flex mt-10 justify-center md:justify-end pr-0 md:pr-10">
                    <ul className="flex flex-col md:flex-row space-x-2 md:space-x-6 text-black">
                        <li className="text-black"><Link to="/">Home</Link></li>
                        <li className="text-black"><Link to="/about">About Us</Link></li>
                        <li className="text-black"><Link to="/services">Services</Link></li>
                        <li className="text-black"><Link to="/contact_us">Contact Us</Link></li>
                        <li className="text-black"><Link to="/professionals">Professionals</Link></li>
                        <li className="text-black"><Link to="/accessories">Accessories</Link></li>
                        <li className="text-black"><Link to="/guidance">Guidance</Link></li>
                    </ul>
                </div>
                <div className="w-full h-[2px] bg-blue-700 my-5"></div>
                <div className="flex flex-row font-inter justify-center text-white mt-1 h-10 bg-lightGreyText items-center">
                    <p className="text-[9px] md:text-sm font-bold">Rights Reserved: </p>
                    <p className="text-[9px] md:text-sm font-extralight">"© [Year] Clubfoot Bracing Project. All rights reserved."</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
