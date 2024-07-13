import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ShoemakerProfileCard from "../Shoemaker_profile_card";
import profile_pic from '../../../../assets/professionals/shoemaker_profile.jpeg';
import chat_icon from '../../../../assets/professionals/shoemaker/chat.png';
import RequestForm from "./request_form";
import ShoeCard from "./shoe_card";
import shoe_pic from '../../../../assets/professionals/shoemaker/shoe.jpeg';

const MakeRequest = () => {
    return (
        <div className="mt-16 mb-20 md:mt-24">
            <div className="flex justify-center">
                <div className="w-5/6">
                    <div className="flex flex-row items-center">
                        <Link to='/shoemaker-profile'>
                            <div className="relative md:absolute ml-0 md:-ml-16 md:-mt-6  bg-[#E8E8E8] rounded-full p-3 w-12 h-12 flex justify-center items-center">
                                <IoIosArrowBack size={28} />
                            </div>
                        </Link>
                        <p className="text-start text-lg md:text-3xl lg:text-4xl ml-5 md:ml-0 text-lightGreyText font-bold font-mplus_1p">
                            Custom Shoe Measurement Request
                        </p>
                    </div>
                    <p className="text-center md:text-start text-lightGreyText text-lg md:text-xl py-5">To ensure your custom clubfoot shoes fit perfectly and provide the best support, please follow the instructions below to take accurate measurements of your feet. Providing detailed and precise measurements will help us create shoes tailored specifically to your needs.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center px-10">
                
                    <div className=" w-full flex justify-center">
                        <ShoemakerProfileCard
                            profilePic={profile_pic}
                            Gender='Male'
                            Name='Walter White'
                            Role='Custom Orthotics'
                            Location='Colombo'
                        />
                    </div>
                <div className="ml-0 md:ml-10 mt-6 md:mt-0 flex flex-col space-y-4 items-center md:items-start">
                    <div className="grid col-span-3 shadow-custom-medium h-auto rounded-xl">
                        <Link to='/shoemaker-request/chat'>
                            <div className="flex flex-row w-64 font-mplus_1p justify-around items-center space-x-2 items-top px-6 py-2">
                                <p className="text-lg text-start font-mplus_1p text-[#7B7B7B]">Chat with your shoe maker</p>
                                <img src={chat_icon} alt="" className="w-10 h-8" />
                            </div>
                        </Link>
                        <div></div>
                    </div>
                    <RequestForm />
                </div>
            </div>

            <div className="flex flex-col justify-center px-3 md:px-10 mt-20">
                <div className="w-full flex flex-col justify-center md:w-5/6">
                    <p className=" text-center md:text-start text-3xl md:text-3xl lg:text-4xl text-lightGreyText font-bold font-mplus_1p">
                        Looking for a quick purchase?
                    </p>
                    <p className="text-center md:text-start text-lightGreyText text-lg md:text-xl py-3">These Clubfoot Shoe Models offer the best comfort and support for kids with clubfoot. These shoes provide stability and long-lasting wear because they are made of premium leather and have a sturdy sole.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
                    <ShoeCard
                        image={shoe_pic}
                        description='ComfortFit Clubfoot Shoe Model A'
                        price='Rs 1,500.00'
                    />

                    <ShoeCard
                        image={shoe_pic}
                        description='ComfortFit Clubfoot Shoe Model A'
                        price='Rs 1,500.00'
                    />
                    <ShoeCard
                        image={shoe_pic}
                        description='ComfortFit Clubfoot Shoe Model A'
                        price='Rs 1,500.00'
                    />
                    <ShoeCard
                        image={shoe_pic}
                        description='ComfortFit Clubfoot Shoe Model A'
                        price='Rs 1,500.00'
                    />
                </div>
            </div>
        </div>
    );
}

export default MakeRequest;