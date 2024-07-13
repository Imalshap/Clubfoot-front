import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ image, title, description, buttonText, linkTo }) => {

    const navigate = useNavigate();

    const NavigatePage = () => {
        navigate(linkTo);
    }

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
            <h2 className="text-center font-mplus_1p text-2xl font-bold mb-4">{title}</h2>
                <div className="flex justify-center">
                    <img src={image} alt={title} className="h-16 w-16" />
                </div>
                
                <p className="mt-4 text-center text-xl font-mplus_1p text-black">
                    {description}
                </p>
                <div className="mt-6 flex justify-center">
                    <button onClick={NavigatePage} className="bg-buttonBlue text-white font-bold py-2 font-monda px-10 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
