import React from 'react';

const Card = ({ title, description, buttonText, onClick }) => {
    return (
        <div className="flex flex-col items-center mb-5 md:mb-0 h-64 w-[350px] justify-center bg-white p-4 rounded-xl shadow-custom-medium">
            <h2 className="text-3xl font-mplus_1p font-bold text-black mb-3">{title}</h2>
            <p className="font-mplus_1p text-black mb-5">{description}</p>
            <button
                className="bg-buttonBlue hover:bg-blue-600 text-white font-bold py-2 px-8 rounded"
                onClick={onClick} // Handle onClick event from parent component
            >
                {buttonText}
            </button>
        </div>
    );
};

export default Card;
