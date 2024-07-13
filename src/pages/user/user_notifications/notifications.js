import profile from '../../../assets/notifications/profile.png';
import date from '../../../assets/notifications/date.png';
import time from '../../../assets/notifications/time.png';

const UserNotifications = () => {
    return (
        <div className="mt-20 md:mt32 flex flex-col justify-center items-center">
            <div className="w-4/5 my-5">
                <p className="font-mplus_1p text-lightGreyText text-left text-xl font-bold md:text-4xl">Your Notifications</p>
            </div>
            <div className=" w-full lg:w-4/5 shadow-custom-medium flex flex-col items-start p-5 md:p-14 rounded-2xl">

                
                    <p className="text-lightGreyText font-semibold text-xl text-left ml-16">Saturday, 25 May 2024</p>
                    <div className="flex flex-col justify-center w-full items-center space-y-8">
                        <div className="flex flex-col w-full md:w-5/6 bg-white shadow-custom-medium rounded space-y-3 h-36 md:h-20 justify-center">
                            <div className="bg-buttonBlue absolute h-[50px] -ml-1 w-2 rounded-3xl"></div>
                            <div className="flex flex-row justify-between">
                                <p className="text-left text-lightGreyText ml-5 font-bold text-sm md:text-2xl font-mplus_1p">Doctor Appointment video conference</p>
                                <button className="px-5 py-2 md:px-10 md:py-3 bg-buttonBlue w-auto md:w-18 text-white font-mplus_1p rounded-xl mr-[2px] md:mr-5 text-center">Join</button>
                            </div>
                        </div>
                    </div>
                    <p className="text-lightGreyText text-left font-semibold text-xl my-5 ml-16">Saturday, 25 May 2024</p>
                    <div className="flex flex-col justify-center w-full items-center space-y-8">
                        <div className="flex flex-col w-full md:w-5/6 bg-white shadow-custom-medium rounded space-y-3 h-36 md:h-20 justify-center">
                            <div className="bg-buttonBlue absolute h-[50px] -ml-1 w-2 rounded-3xl"></div>
                            <div className="flex flex-row justify-between">
                                <p className="text-left text-lightGreyText ml-5 font-bold text-sm md:text-2xl font-mplus_1p">Shoe maker quotation</p>
                                <button className="px-5 py-2 md:px-10 md:py-3 bg-buttonBlue w-auto md:w-18 text-white font-mplus_1p rounded-xl mr-[2px] md:mr-5 text-center">Join</button>
                            </div>
                        </div>
                    </div>

                    <p className="text-lightGreyText text-left font-semibold text-xl my-5 ml-16">Saturday, 25 May 2024</p>
                    <div className="flex flex-col justify-center w-full items-center space-y-8">
                        <div className="flex flex-col w-full md:w-5/6 bg-white shadow-custom-medium rounded space-y-3 h-36 md:h-22 justify-center">
                            <div className="bg-buttonBlue absolute h-[70px] -ml-1 w-2 rounded-3xl"></div>
                            <div className="flex flex-col justify-between">
                                <p className=" text-center md:text-left text-lightGreyText ml-5 font-bold text-lg md:text-2xl font-mplus_1p">Doctor Appointment Accepted</p>
                                
                                <div className="flex flex-row w-full justify-center items-center space-x-3 md:space-x-14 mt-5 lg:ml-20">
                                    <div className="flex flex-row space-x-2">
                                        <img src={profile} alt="" className='h-4 w-4 md:w-6 md:h-6 mr-2' />
                                        <p className='font-mplus_1p text-xs md:text-base'>Walter White</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <img src={date} alt="" className='h-4 w-4 md:w-6 md:h-6 mr-2'/>
                                        <p className='font-mplus_1p text-xs md:text-base'>23/4/2023</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <img src={time} alt="" className='h-4 w-4 md:w-6 md:h-6 mr-2'/>
                                        <p className='font-mplus_1p text-xs md:text-base'>8:30AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


               
            </div>
        </div>
    );
}

export default UserNotifications;