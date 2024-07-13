import React from 'react';
import Card from './bracing_card';
import shedule from '../../assets/guidance/card_image.png';

const BracingShedule = () => {
    const cardData = [
        {
            image: shedule,
            title: "First 3 Months",
            description: "Wear the brace for 23 hours a day. This is the most critical period to ensure the correction holds."
        },
        {
            image: shedule,
            title: "After 3 Months",
            description: "Wear the brace during night-time and nap-time (12-14 hours a day) until your child is 4-5 years old."
        }
    ];

    return (
        <div id="our-services" className="flex flex-col justify-center items-center">
            <div className='flex flex-col w-full justify-center items-center'>
                <div className="w-3/4 mt-10">
                    <h1 className="font-mplus_1p text-3xl md:text-4xl my-5 font-bold text-lightGreyText">The Bracing Schedule</h1>
                </div>
                <div className="flex flex-col mt-10 md:mt-16 md:flex-row justify-center items-center md:space-x-12 space-y-4 md:space-y-0">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BracingShedule;
