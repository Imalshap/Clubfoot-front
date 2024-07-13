import guidance_1 from '../../assets/guidance/guidance_1.png';
import guidance_2 from '../../assets/guidance/guidance_2.png';
import logo from '../../assets/logo/logo.png';
import BracingShedule from './bracing_shedule';
import Tips from './tips';
import Support from './support_resources';
import OvercomingChallenges from './challenges';
import Footer from '../../components/footer/footer';

const Guidance = () => {

    return (
        <div>
            <div className="mt-16 md:mt-20 flex flex-col h-full">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <div className="px-5 md:pl-32 md:pr-5 w-full md:w-4/5 flex flex-col justify-center items-center md:justify-start md:items-start">
                        <p className="font-mplus_1p text-lightGreyText text-3xl md:text-4xl lg:text-5xl font-bold md:text-left">
                            Welcome to Your Clubfoot Bracing Journey
                        </p>
                        <p className="font-mplus_1p text-lightGreyText text-lg py-3 md:py-5 md:text-lg lg:text-xl md:text-left">
                            Congratulations on taking the important step towards correcting clubfoot! This guide will help you navigate the bracing process with ease and confidence, ensuring your child’s feet stay in the correct position and grow healthily.
                        </p>

                    </div>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <img src={guidance_1} className='w-56 h-auto md:w-1/2 md:h-1/2' alt="Clubfoot" />
                    </div>
                </div>

                <div className='w-full h-7'></div>

                <div className="flex flex-col md:flex-row justify-between items-center">

                    <div className='my-5 md:my-0 w-full md:w-1/2 flex justify-center '>
                        <img src={guidance_2} className='w-56 h-auto md:w-1/2 md:h-1/2' alt="Clubfoot" />
                    </div>

                    <div className="px-5 md:pr-32 md:pl-5 w-full md:w-4/5  flex flex-col justify-center items-center md:justify-end md:items-end">
                        <p className="font-mplus_1p text-lightGreyText text-3xl md:text-4xl lg:text-5xl font-bold md:text-right">
                            What is Clubfoot Bracing?
                        </p>
                        <p className="font-mplus_1p text-lg text-lightGreyText py-3 md:py-5 md:text-lg lg:text-xl md:text-right">
                            Clubfoot bracing is the next crucial phase after initial treatment, such as casting or surgery. The brace, also known as a foot abduction brace or Denis Browne splint, keeps your child’s feet in the right position to prevent the clubfoot from returning.
                        </p>
                    </div>

                </div>

                <BracingShedule />

                <Tips />

                <OvercomingChallenges />

                <Support />

            </div>

            <div className='flex flex-col w-full justify-center items-center mb-5'>
                <div className="w-3/4 mt-10">
                    <h1 className="font-mplus_1p text-3xl md:text-5xl my-5 font-bold text-lightGreyText">Contact Us</h1>
                    <p className="font-mplus_1p text-sm md:text-xl text-black"> If you have any questions about our services or would like to schedule an appointment, please don't hesitate to contact us. Our friendly and knowledgeable staff are here to assist you.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Guidance;
