import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ProfileCard from "../profile_card";
import profile_pic from '../../../../assets/professionals/profile.jpeg';
import AppointmentCard from "./appointment_card";
import RequestForm from "./request_form";

const Appointment = () => {
    return (
        <div className="mt-32 mb-10 w-full">
            <div className="flex justify-center">
                <div className="w-5/6">
                    <div className="flex flex-row items-center">
                        <p className=" text-center md:text-start text-3xl md:4xl lg:text-5xl ml-5 md:ml-0 text-lightGreyText font-bold font-mplus_1p">
                        Place Your Appointment
                        </p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col mt-5 lg:flex-row w-full px-4 justify-around space-x-4">
                <div className="flex flex-col space-y-3">
                    <ProfileCard
                        profilePic={profile_pic}
                        Gender='Male'
                        Name='Demon Salvatore'
                        Role='Pediatric Orthopedics'
                        Location='Colombo'
                    />
                    <AppointmentCard
                    Location='Colombo'
                    Session_Date='24 May 2024'
                    Session_Time='08:30 AM'
                    Appointment_no='1'
                    Hospital='Borella Winsetha Medical Hospital'
                     />
                </div>
                <div className="flex flex-col mt-10 lg:mt-0 space-y-5">
                <RequestForm />
                </div>
            </div>

            


        </div>
    );
}

export default Appointment;