import React from 'react';

const Card = ({ image, title, description }) => {
    return (
        <div className="flex flex-col justify-between max-w-[350px] mx-4 md:mx-auto h-auto md:h-80 bg-white rounded-lg shadow-custom-medium overflow-hidden">
            <div className="p-6">
                <h2 className="text-center font-mplus_1p text-3xl text-lightGreyText font-bold my-4">{title}</h2>
                <div className="flex justify-center">
                    <img src={image} alt={title} className="h-16 w-16 md:h-24 md:w-24" />
                </div>
                <p className="mt-4 text-center font-mplus_1p text-black">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
