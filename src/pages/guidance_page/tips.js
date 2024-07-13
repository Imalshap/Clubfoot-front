const Tips = () => {
    return (
        <div>
            <div className='flex flex-col w-full justify-center items-center'>
                <div className="w-3/4 mt-10">
                    <h1 className="font-mplus_1p text-3xl md:text-5xl my-5 font-bold text-lightGreyText">Tips for Success</h1>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-8">
                <div className="flex flex-col w-5/6 bg-white shadow-custom-medium rounded space-y-3 h-36 md:h-32 justify-center">
                    <div className="bg-buttonBlue absolute h-[75px] -ml-1 w-3 rounded-3xl"></div>
                    <p className="text-left text-lightGreyText font-bold text-lg md:text-2xl ml-5 font-mplus_1p">Stay Consistent</p>
                    <p className="text-sm md:text-xl text-lightGreyText text-left ml-8 font-mplus_1p">Follow the bracing schedule closely. Consistency is key to preventing relapse.</p>
                </div>

                <div className="flex flex-col w-5/6 bg-white shadow-custom-medium rounded space-y-3 h-36 md:h-32 justify-center">
                    <div className="bg-buttonBlue absolute h-[75px] -ml-1 w-3 rounded-3xl"></div>
                    <p className="text-left text-lightGreyText font-bold text-lg md:text-2xl ml-5 font-mplus_1p">Comfort is Crucial</p>
                    <p className="text-sm md:text-xl text-lightGreyText text-left ml-8 font-mplus_1p">Regularly check your child’s feet for any signs of irritation or sores. Adjust the brace if needed to ensure a comfortable fit.</p>
                </div>

                <div className="flex flex-col w-5/6 bg-white shadow-custom-medium rounded space-y-3 h-36 md:h-32 justify-center">
                    <div className="bg-buttonBlue absolute h-[75px] -ml-1 w-3 rounded-3xl"></div>
                    <p className="text-left text-lightGreyText font-bold text-lg md:text-2xl ml-5 font-mplus_1p">Skin Care</p>
                    <p className="text-sm md:text-xl text-lightGreyText text-left ml-8 font-mplus_1p">Keep your child’s feet clean and dry. Use soft, breathable socks to prevent friction.</p>
                </div>

                <div className="flex flex-col w-5/6 bg-white shadow-custom-medium rounded space-y-3 h-36 md:h-32 justify-center">
                    <div className="bg-buttonBlue absolute h-[75px] -ml-1 w-3 rounded-3xl"></div>
                    <p className="text-left text-lightGreyText font-bold text-lg md:text-2xl ml-5 font-mplus_1p">Encourage Activity</p>
                    <p className="text-sm md:text-xl text-lightGreyText text-left ml-8 font-mplus_1p">Let your child play and move around while wearing the brace. This helps them get used to it and strengthens their muscles.</p>
                </div>

                <div className="flex flex-col w-5/6 bg-white shadow-custom-medium rounded space-y-3 h-36 md:h-32 justify-center">
                    <div className="bg-buttonBlue absolute h-[75px] -ml-1 w-3 rounded-3xl"></div>
                    <p className="text-left text-lightGreyText font-bold text-lg md:text-2xl ml-5 font-mplus_1p">Regular Check-Ups</p>
                    <p className="text-sm md:text-xl text-lightGreyText text-left ml-8 font-mplus_1p">Schedule regular appointments with your orthopedic specialist to monitor progress and make any necessary adjustments.</p>
                </div>

            </div>
        </div>
    )
}

export default Tips;