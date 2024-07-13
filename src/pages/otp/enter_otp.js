import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const EnterOtp = () => {
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length >= 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    return (
        <div className="relative flex flex-col justify-center overflow-hidden bg-white py-4 md:py-6">
            <div className="relative bg-white px-6 pt-5 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">


                    <div>
                        <form action="" method="post">
                            <div className="flex flex-col space-y-8">
                                <p className=' font-mplus_1p text-sm font-light '>OTP Code</p>
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <div className="w-14 h-14 md:w-16 md:h-16" key={index}>
                                            <input
                                                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                type="text"
                                                maxLength="1"
                                                ref={(el) => (inputRefs.current[index] = el)}
                                                onChange={(e) => handleChange(e, index)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col space-y-5">
                                    <div className="flex flex-col space-y-5 font-inter text-sm md:text-xl">
                                        <button
                                            type="submit"
                                            className="w-full bg-buttonBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Enter
                                        </button>

                                        <button
                                            className="w-full bg-buttonBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Send Code Again
                                        </button>
                                    </div>

                                    <div className="flex flex-row p-4 justify-center items-center">
                                        <Link to="/forgot-password">
                                            <p className="text-buttonBlue ml-2 underline">Go Back</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterOtp;
