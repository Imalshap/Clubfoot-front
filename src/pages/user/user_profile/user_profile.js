import React from 'react';
import UserProfileCard from "./profile_card";
import note_icon from '../../../assets/user/note.png';
import design_img from '../../../assets/user/design.jpeg';
import special from '../../../assets/professionals/doctors/profile/special.png'
import Footer from '../../../components/footer/footer';

const UserProfile = () => {
    return (
        <>
            <div className="flex flex-col justify-center mt-32 px-4">
                <p className="text-left ml-12 md:ml-14 font-mplus_1p font-bold text-4xl md:text-5xl text-lightGreyText">Your Account</p>
                <div className='flex- flex-col w-full'>

                    <div className="grid md:grid-cols-5 gap-4 mt-2 md:mt-6">
                        <div className="col-span-3 md:col-span-2 space-y-6">
                            <UserProfileCard />
                            <div className="w-full px-8">
                                <div className="grid col-span-2 md:col-span-3 shadow-custom-medium w-full h-56 rounded-xl">
                                    <div className="flex flex-row font-mplus_1p justify-start space-x-2 items-top px-2 py-2">
                                        <img src={special} alt="specialization" className="w-6 h-6" />
                                        <p className="text-base">Doctor's Note</p>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>


                        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-custom-medium p-6 rounded-2xl">
                            <div className='col-span-1 md:col-span-2  space-x-2'>
                                <div className='flex flex-row space-x-1'>
                                    <img src={note_icon} alt='' className='w-6 h-6' />
                                    <p className='text-[#7B7B7B] text-sm md:text-2xl font-inter'>Make sure you fill these information before sharing your profile to our professionals</p>
                                </div>
                            </div>
                            <div className=' col-span-1'>
                                <div className="col-span-1">
                                    <div>
                                        <p className="font-semibold text-start font-mplus_1p text-lightGreyText text-lg ml-3 mt-2 mb-1">Medical History</p>
                                        <div className="w-full rounded-2xl border border-buttonBlue h-auto p-4">
                                            <div className='text-start py-4 px-2 text-[#A6A6A6] font-mplus_1p'>
                                                <ul className="list-disc list-grey-500  pl-4">
                                                    <li>Past medical conditions</li>
                                                    <li>Previous surgeries and treatments, especially related to clubfoot or other orthopedic issues</li>
                                                    <li>Any ongoing medical conditions or chronic illnesses</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div>
                                        <p className="font-semibold text-start font-mplus_1p text-lightGreyText text-lg ml-3 mt-2 mb-1">Current Condition</p>
                                        <div className="w-full rounded-2xl border border-buttonBlue h-auto p-4">
                                            <div className='text-start py-4 px-2 text-[#A6A6A6] font-mplus_1p'>
                                                <ul className="list-disc list-grey-500  pl-4">
                                                    <li>Detailed description of the current status of clubfoot</li>
                                                    <li>Any recent changes in condition or symptoms</li>
                                                    <li>Current treatments and therapies being used</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div>
                                        <p className="font-semibold text-start font-mplus_1p text-lightGreyText text-lg ml-3 mt-2 mb-1">Medications</p>
                                        <div className="w-full rounded-2xl border border-buttonBlue h-auto p-4">
                                            <div className='text-start py-4 px-2 text-[#A6A6A6] font-mplus_1p'>
                                                <ul className="list-disc list-grey-500  pl-4">
                                                    <li>List of current medications, including dosage and frequency</li>
                                                    <li>Any allergies to medications</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div>
                                        <p className="font-semibold text-start font-mplus_1p text-lightGreyText text-lg ml-3 mt-2 mb-1">Treatment History</p>
                                        <div className="w-full rounded-2xl border border-buttonBlue h-auto p-4">
                                            <div className='text-start py-4 px-2 text-[#A6A6A6] font-mplus_1p'>
                                                <ul className="list-disc list-grey-500  pl-4">
                                                    <li>Details of all previous treatments</li>
                                                    <li>Records of any physical therapy or other supportive treatments</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div>
                                        <p className="font-semibold text-start font-mplus_1p text-lightGreyText text-lg ml-3 mt-2 mb-1">Diagnostic Reports</p>
                                        <div className="w-full rounded-2xl border border-buttonBlue h-auto p-1">
                                            <div className='text-start py-4 px-2 text-[#A6A6A6] font-mplus_1p'>
                                                <input type="file" accept="image/*,.pdf" className='block w-full text-sm text-[#A6A6A6] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-buttonBlue file:text-white' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className="col-span-1">
                                    <div>
                                        <p className="font-semibold text-lightGreyText text-start text-base ml-3 mt-2 mb-2">Measurements</p>
                                        <div className="w-full rounded-2xl border border-buttonBlue h-auto p-4">

                                            <div className="grid grid-cols-2 gap-2">
                                                {[
                                                    { label: 'Foot Length', placeholder: 'Length' },
                                                    { label: 'Foot Width', placeholder: 'Width' },
                                                    { label: 'Heel to Ball Length', placeholder: 'Length' },
                                                    { label: 'Heel Width', placeholder: 'Width' },
                                                    { label: 'Foot Arch Length', placeholder: 'Length' },
                                                    { label: 'Instep Height', placeholder: 'Height' },
                                                    { label: 'Ball Circumference', placeholder: 'Circumference' },
                                                    { label: 'Instep Circumference', placeholder: 'Circumference' },
                                                    { label: 'Toe Box Height', placeholder: 'Height' },
                                                    { label: 'Ankle Circumference', placeholder: 'Circumference' }
                                                ].map((field, index) => (
                                                    <div key={index} className="flex flex-col">
                                                        <label className="text-sm text-center font-mplus_1p mb-1">{field.label}</label>
                                                        <input
                                                            type="text"
                                                            placeholder={field.placeholder}
                                                            className="border border-buttonBlue rounded p-1 font-mplus_1p"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 mt-10">

                                    <div className='flex flex-row justify-center items-start'>
                                        <img src={note_icon} alt='' className='w-5 h-5' />
                                        <p className='text-[#7B7B7B] text-sm font-inter'>Make sure you fill these information before sharing your profile to our professionals</p>
                                    </div>

                                    <div className="w-full rounded-2xl border border-buttonBlue h-auto mt-5 p-4">

                                        <img src={design_img} alt='' />
                                    </div>

                                </div>

                            </div>
                            <div className='col-span-1 md:col-span-2'>
                                <div className='w-full my-2 md:my-8 flex justify-center md:justify-end'>
                                    <button className=' bg-buttonBlue px-6 font-mplus_1p text-white text-lg font-bold rounded-lg py-1'>Save</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UserProfile;
