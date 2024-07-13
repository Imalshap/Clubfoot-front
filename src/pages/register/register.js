import React, { useState } from 'react';
import Card from "./register_card";
import RegistrationForm from "./registerform";
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';

const Register = () => {
    const [showRegistration, setShowRegistration] = useState(false);

    const handleCardNext = () => {
        setShowRegistration(true);
    };

    const handleFormBack = () => {
        setShowRegistration(false);
    };

    return (
        <>
            <div className="flex flex-col z-50 mt-20 md:mt-28 h-full">

                <div>
                    <p className="text-3xl md:5xl lg:text-6xl text-lightGreyText font-bold font-mplus_1p">
                        Let’s set your account
                    </p>
                    <p className="text-lightGreyText text-lg md:text-2xl px-5 md:px-20 py-5">Join our community of individuals dedicated to improving clubfoot care by creating your account today. Registration is quick, easy, and free!</p>
                </div>

                {!showRegistration ? (
                    <div className="w-5/6 mx-auto flex flex-col md:flex-row items-center justify-around">
                        <Card
                            title="Are You a Doctor?"
                            description="Join a network of dedicated professionals. Share your expertise, connect with patients, and provide top-notch care. Your knowledge can change lives."
                            buttonText="Next"
                            onClick={handleCardNext}
                        />
                        <Card
                            title="Are You a Patient?"
                            description="Get personalized care and support. Connect with leading doctors, find custom-made shoes, and access valuable resources for your clubfoot journey."
                            buttonText="Next"
                            onClick={handleCardNext}
                        />
                        <Card
                            title="Are You a Shoemaker?"
                            description="Showcase your craftsmanship and help patients find the perfect fit. Collaborate with doctors and patients to create specialized footwear solutions."
                            buttonText="Next"
                            onClick={handleCardNext}
                        />
                    </div>
                ) : null}

                {showRegistration ? <RegistrationForm onBack={handleFormBack} /> : null}


                <div className="flex flex-row p-4 md:p-10 justify-center items-center">
                    <p className="text-[#575757] font-semibold">Already have an account? </p>
                    <Link to="/login">
                        <p className="text-buttonBlue ml-2 underline">Sign in</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
