import clubfoot from '../../assets/home/clubfoot.png';
import aboutus_2 from '../../assets/home/about_us.png';
import Footer from '../../components/footer/footer';

const AboutUs = () => {
    return (
        <>
            <div className="mt-10 md:mt-32 flex flex-col h-full">

                <div className="flex flex-col md:flex-row px-10 lg:px-20 justify-between items-center">

                    <div className='w-full my-5 md:my-0 md:w-1/2 flex flex-col justify-center items-center md:justify-start'>
                        <p className="font-mplus_1p md:hidden block mb-5 text-lightGreyText text-3xl md:text-[40px] font-bold md:text-right">
                            About Us
                        </p>
                        <img src={aboutus_2} className='w-56 lg:w-3/5 h-auto' alt="Clubfoot" />
                    </div>

                    <div className="px-5 md:px-16 w-full lg:w-1/2 flex flex-col justify-center items-center md:justify-end md:items-end">
                        <p className="font-mplus_1p md:block hidden text-lightGreyText text-3xl md:text-[40px] font-bold md:text-right">
                            About Us
                        </p>
                        <p className="font-mplus_1p text-base text-lightGreyText py-3 md:py-5 lg:text-2xl md:text-right">
                            With years of experience and a dedicated team of professionals, we have established ourselves as leaders in clubfoot treatment. Our mission is to provide exceptional care that is accessible, effective, and compassionate. We are committed to continuous improvement and innovation in our techniques and services to ensure the best outcomes for our patients.
                        </p>
                    </div>

                </div>

                <div className='flex flex-col w-full justify-center items-center'>
                    <div className="w-3/4 mt-10">
                        <h1 className="font-mplus_1p text-3xl md:text-5xl my-5 font-bold text-lightGreyText">Contact Us</h1>
                        <p className="font-mplus_1p text-sm md:text-xl text-black"> If you have any questions about our services or would like to schedule an appointment, please don't hesitate to contact us. Our friendly and knowledgeable staff are here to assist you.</p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default AboutUs;