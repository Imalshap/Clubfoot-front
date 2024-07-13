import React from 'react';

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex text-2xl">
            {[...Array(fullStars)].map((_, i) => (
                <span key={i} className="text-[#FFB800]">★</span>
            ))}
            {halfStar && <span className="text-[#FFB800]">★</span>}
            {[...Array(emptyStars)].map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
            ))}
        </div>
    );
};

const RatingSummary = () => {
    const rating = 4.5;
    const totalRatings = 348;
    const ratingsBreakdown = [50, 30, 15, 10, 5]; // Example data

    return (
        <div className="p-4 w-full flex flex-col bg-white">
            <div className='flex flex-col md:flex-row w-full md:w-2/3 mb-4'>
                <div className="flex flex-col items-center w-full md:w-32 mb-4 md:mb-0 md:mr-8">
                    <span className="text-4xl font-bold">{rating}</span>
                    <StarRating rating={rating} />
                    <span className="text-gray-600 ml-2">{totalRatings} Ratings</span>
                </div>
                <div className=' w-[3px] h-5/6 bg-gray-700'></div>
                <div className="space-y-2 w-full">
                    {ratingsBreakdown.map((count, index) => (
                        <div key={index} className="flex items-center">
                            <StarRating rating={5 - index} />
                            <div className="flex-1 bg-gray-200 h-2 mx-2">
                                <div className="bg-lightGreyText h-2 rounded-full" style={{ width: `${count}%` }}></div>
                            </div>
                            <span className="text-gray-600">{count}%</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-gray-300 mt-4 pt-4">
                {reviews.map((review, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex items-center">
                            <StarRating rating={review.rating} />
                            <span className="ml-2 text-xl font-mplus_1p font-bold">{review.author}</span>
                        </div>
                        <p className="text-gray-600 w-full md:w-3/5 mt-2 text-start rounded-md shadow-custom-medium px-4 py-2">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const reviews = [
    { author: 'Jane D.', rating: 4, comment: 'These shoes have made a huge difference in my child\'s mobility!' },
    { author: 'Kayne.', rating: 4, comment: ',These shoes have made a huge difference in my child\'s mobility!' },
];

export default RatingSummary;
