import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ProfileCard from "./profile_card";
import profile_pic from '../../../assets/professionals/profile.jpeg';
import specializations from '../../../assets/professionals/doctors/profile/spcializations.png';
import qualifications from '../../../assets/professionals/doctors/profile/qualifications.png';
import registration from '../../../assets/professionals/doctors/profile/registration.png';
import experience from '../../../assets/professionals/doctors/profile/experience.png';
import special from '../../../assets/professionals/doctors/profile/special.png';
import RatingSummary from "./rating_summary";
import Footer from "../../../components/footer/footer";

const DoctorProfile = () => {
    return (
            <div className="mt-16 mb-10 md:mt-24">
                <div className="flex justify-center">
                    <div className="w-5/6">
                        <div className="flex flex-row items-center">
                            <Link to='/professionals'>
                                <div className="relative md:absolute ml-0 md:-ml-16 md:-mt-6  bg-[#E8E8E8] rounded-full p-3 w-12 h-12 flex justify-center items-center">
                                    <IoIosArrowBack size={28} />
                                </div>
                            </Link>
                            <p className="text-start text-3xl md:4xl lg:text-4xl ml-5 md:ml-0 text-lightGreyText font-bold font-mplus_1p">
                                Meet Your Care Person
                            </p>
                        </div>
                        <p className="text-center md:text-start text-lightGreyText text-lg md:text-xl py-3">Welcome to our doctor profiles section, where you can learn more about the skilled professionals dedicated to providing exceptional care for clubfoot treatment.</p>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-center px-10">
                    <div>
                        <div className="">
                            <ProfileCard
                                profilePic={profile_pic}
                                Gender='Male'
                                Name='Demon Salvatore'
                                Role='Pediatric Orthopedics'
                                Location='Colombo'
                            />
                        </div>
                    </div>
                    <div className="ml-0 md:ml-10 mt-20 md:mt-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                        <div className="grid col-span-2 shadow-custom-medium rounded-xl h-56 md:h-auto">
                            <div className="flex flex-row font-mplus_1p justify-start space-x-2 items-top px-6 py-2">
                                <img src={specializations} alt="specialization" className="w-6 h-6" />
                                <p className="text-base">Other Specializations</p>
                            </div>
                            <div></div>
                        </div>
                        <div className="grid col-span-2 shadow-custom-medium h-56 md:h-auto rounded-xl">
                            <div className="flex flex-row font-mplus_1p justify-start space-x-2 items-top px-6 py-2">
                                <img src={qualifications} alt="specialization" className="w-6 h-6" />
                                <p className="text-base">Qualifications</p>
                            </div>
                            <div></div>
                        </div>
                        <div className="grid col-span-2 shadow-custom-medium h-56 md:h-auto rounded-xl">
                            <div className="flex flex-row font-mplus_1p justify-start space-x-2 items-top px-6 py-2">
                                <img src={registration} alt="specialization" className="w-6 h-6" />
                                <p className="text-base">Registration</p>
                            </div>
                            <div></div>
                        </div>
                        <div className="grid col-span-2 shadow-custom-medium h-56 md:h-auto rounded-xl">
                            <div className="flex flex-row font-mplus_1p justify-start space-x-2 items-top px-6 py-2">
                                <img src={experience} alt="specialization" className="w-6 h-6" />
                                <p className="text-base">Experience</p>
                            </div>
                            <div></div>
                        </div>
                        <div className="grid col-span-2 md:col-span-4 xl:col-span-3 shadow-custom-medium h-auto rounded-xl">
                            <div className="flex flex-row font-mplus_1p justify-start space-x-2 items-top px-6 py-2">
                                <img src={special} alt="specialization" className="w-6 h-6" />
                                <p className="text-base">Patient's Review</p>
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

export default DoctorProfile;