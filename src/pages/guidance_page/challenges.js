import React from 'react';
import ChallengeCard from './challenges_card';
import challenge_1 from '../../assets/guidance/challenge_1.png';
import challenge_2 from '../../assets/guidance/challenge_2.png';
import challenge_3 from '../../assets/guidance/challenge_3.png';

const OvercomingChallenges = () => {
    const challenges = [
        {
            icon: challenge_1,
            title: "Resistance to the Brace",
            description: "It’s normal for children to resist the brace at first. Be patient and consistent. Use positive reinforcement and distractions to help them adjust.",
            additionalClasses: 'h-full w-full mt-0 md:mt-20'
        },
        {
            icon: challenge_2,
            title: "Managing Discomfort",
            description: "Ensure the brace isn’t too tight and that the bar is the right length. If discomfort continues, consult your doctor.",
            additionalClasses: ''
        },
        {
            icon: challenge_3,
            title: "Travel and Social Events",
            description: "Plan ahead for trips and social activities. Always bring the brace and ensure it’s used during sleep times as required.",
            additionalClasses: 'h-full w-full mt-0 md:mt-20'
        }
    ];

    return (
        <div className="flex flex-col mt-10 md:mt-20 items-center">
            <h1 className="font-mplus_1p text-3xl md:text-5xl my-5 font-bold text-lightGreyText">Overcoming Challenges</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
                {challenges.map((challenge, index) => (
                    <div key={index} className={challenge.additionalClasses}>
                        <ChallengeCard
                            icon={challenge.icon}
                            title={challenge.title}
                            description={challenge.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OvercomingChallenges;
