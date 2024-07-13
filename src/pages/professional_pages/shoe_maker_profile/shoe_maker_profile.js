import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ShoemakerProfileCard from "./Shoemaker_profile_card";
import profile_pic from '../../../assets/professionals/shoemaker_profile.jpeg';
import specializations from '../../../assets/professionals/doctors/profile/spcializations.png';
import qualifications from '../../../assets/professionals/doctors/profile/qualifications.png';
import special from '../../../assets/professionals/doctors/profile/special.png';
import Footer from "../../../components/footer/footer";
import RatingSummary from "../doctor_profile/rating_summary";

const ShoeMakerProfile = () => {
    return (
            <div className="mt-16 md:mt-24">
                <div className="flex justify-center">
                    <div className="w-5/6">
                        <div className="flex flex-row items-center">
                            <Link to='/professionals'>
                                <div className="relative md:absolute ml-0 md:-ml-16 md:-mt-6  bg-[#E8E8E8] rounded-full p-3 w-12 h-12 flex justify-center items-center">
                                    <IoIosArrowBack size={28} />
                                </div>
                            </Link>
                            <p className="text-start text-3xl md:4xl lg:text-4xl ml-5 md:ml-0 text-lightGreyText font-bold font-mplus_1p">
                                Meet Your Shoe Maker
                            </p>
                        </div>
                        <p className="text-center md:text-start text-lightGreyText text-lg md:text-xl py-3">Welcome to our shoe maker profiles section, where you can learn more about the skilled professionals dedicated to providing exceptional care for clubfoot treatment.</p>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-center px-10">
                    <div>
                        <div className="">
                            <ShoemakerProfileCard
                                profilePic={profile_pic}
                                Gender='Male'
                                Name='Walter White'
                                Role='Custom Orthotics'
                                Location='Colombo'
                            />
                        </div>
                    </div>
                    <div className="ml-0 md:ml-10 mt-20 md:mt-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                        <div className="grid col-span-3 shadow-custom-medium rounded-xl h-56 md:h-auto">
                            <div className="flex flex-row font-mplus_1p justify-start space-x-2 items-top px-6 py-2">
                                <img src={specializations} alt="specialization" className="w-6 h-6" />
                                <p className="text-base">Experience and Expertise</p>
                            </div>
                            <div></div>
                        </div>
                        <div className="grid col-span-3 shadow-custom-medium h-56 md:h-auto rounded-xl">
                            <div className="flex flex-row font-mplus_1p justify-start space-x-2 items-top px-6 py-2">
                                <img src={qualifications} alt="specialization" className="w-6 h-6" />
                                <p className="text-base">Reputation and Reviews</p>
                            </div>
                            <div></div>
                        </div>
                        <div className="grid col-span-4 shadow-custom-medium h-56 mb-20 md:mb-0 md:h-auto rounded-xl">
                            <div className="flex flex-row font-mplus_1p justify-start space-x-2 items-top px-6 py-2">
                                <img src={special} alt="specialization" className="w-6 h-6" />
                                <p className="text-base">Customer's Reviews</p>
                            </div>
                            <div className="w-full">
                                <RatingSummary />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
    );
}

export default ShoeMakerProfile;