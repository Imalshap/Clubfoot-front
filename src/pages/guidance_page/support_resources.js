import support_1 from '../../assets/guidance/support_1.png';
import support_2 from '../../assets/guidance/support_2.png';
import support_3 from '../../assets/guidance/support_3.png';


const Support = () => {
    return (
        <div>
            <div className='flex flex-col w-full justify-center items-center'>
                <div className="w-3/4 mt-10">
                    <h1 className="font-mplus_1p text-3xl md:text-5xl my-5 font-bold text-lightGreyText">Support and Resources</h1>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-8">
                <div className="flex flex-row w-5/6 bg-white shadow-custom-medium rounded-3xl md:rounded-full h-36 md:h-32 justify-start items-center">
                    <div className='px-5 py-5 md:px-8'><img src={support_1} className='w-[80px] h-auto md:w-14 md:h-14' alt='' /></div>

                    <div className=' space-y-1'>
                        <p className="text-left text-lightGreyText font-bold text-md md:text-2xl font-mplus_1p">Your Healthcare Team</p>
                        <p className="text-xs md:text-xl text-lightGreyText text-left font-mplus_1p pr-2">Stay in touch with your child’s healthcare providers. They are your best resource for support and advice.</p>
                    </div>
                </div>

                <div className="flex flex-row w-5/6 bg-white shadow-custom-medium rounded-3xl md:rounded-full h-36 md:h-32 justify-start items-center">
                    <div className='px-5 py-5 md:px-8'><img src={support_2} className='w-[80px] h-auto md:w-14 md:h-14' alt='' /></div>

                    <div className=' space-y-1'>
                        <p className="text-left text-lightGreyText font-bold text-md md:text-2xl font-mplus_1p">Parent Support Groups</p>
                        <p className="text-xs md:text-xl text-lightGreyText text-left font-mplus_1p pr-2">Join clubs or online groups for parents of children with clubfoot. Sharing experiences and tips can be incredibly helpful.</p>
                    </div>
                </div>

                <div className="flex flex-row w-5/6 bg-white shadow-custom-medium rounded-3xl md:rounded-full h-36 md:h-32 justify-start items-center">
                    <div className='px-5 py-5 md:px-8'><img src={support_3} className='w-[80px] h-auto md:w-14 md:h-14' alt='' /></div>

                    <div className=' space-y-1'>
                        <p className="text-left text-lightGreyText font-bold text-md md:text-2xl font-mplus_1p">Educational Resources</p>
                        <p className="text-xs md:text-xl text-lightGreyText text-left font-mplus_1p pr-2">Utilize materials from your healthcare provider and reputable organizations dedicated to clubfoot treatment.</p>
                    </div>
                </div>

            </div>

            <div className='flex flex-col w-full justify-center items-center'>
                <div className="w-3/4 mt-10">
                    <p className="font-mplus_1p text-lg md:text-2xl my-5 text-[#7B7B7B]">Clubfoot bracing is a vital step in your child’s treatment journey. By following the schedule, ensuring comfort, and seeking support, you can help your child’s feet grow healthily and prevent relapse. If you have any questions or concerns, don’t hesitate to reach out to your healthcare provider.</p>
                    <p className="font-mplus_1p text-lg md:text-2xl my-5 text-lightGreyText">Together, we can ensure your child’s successful treatment and a bright future with healthy feet!</p>
                </div>
            </div>

        </div>
    )
}

export default Support;