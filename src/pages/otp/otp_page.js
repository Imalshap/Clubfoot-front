import React, { useState } from 'react';
import EnterOtp from './enter_otp';
import Footer from '../../components/footer/footer';

const OtpPage = () => {


    return (
        <>
            <div className="flex flex-col z-50 mt-44 h-full">

                <div>
                    <p className="text-3xl md:5xl lg:text-6xl text-lightGreyText font-bold font-mplus_1p">
                        Enter OTP Code
                    </p>
                    <p className="text-lightGreyText font-mplus_1p text-lg md:text-2xl px-5 md:px-20 py-5">We have send you a 4 digit code to your email</p>
                </div>

                <EnterOtp />
            </div>
            <Footer />
        </>
    );
};

export default OtpPage;
