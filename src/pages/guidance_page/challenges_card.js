import React from 'react';

const ChallengeCard = ({ icon, title, description }) => {
    return (
        <div className=" flex flex-col justify-center items-center max-w-56 md:max-w-xs mx-auto h-80 md:min-h-[350px] bg-white rounded-lg shadow-custom-medium p-5">
            <div className="flex justify-center mt-3 mb-10">
                <img src={icon} alt={title} className="h-10 w-10" />
            </div>
            <h2 className="text-center font-mplus_1p text-xl md:text-2xl font-bold mb-2">{title}</h2>
            <p className="text-center font-mplus_1p text-sm md:text-base lg:text-lg text-gray-700">{description}</p>
        </div>
    );
};

export default ChallengeCard;
