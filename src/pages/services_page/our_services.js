import Card from "./our_services_card";
import assessment from '../../assets/home/assessment.png';
import tailored_sol from '../../assets/home/tailored_sol.png';
import accessories from '../../assets/home/accessories.png';
import guidance from '../../assets/home/guidance.png';

const OurServices = () => {
    return (
        <div id="our-services" className="flex flex-col justify-center items-center">
            <div className=" w-3/4 mt-10">
                <h1 className="font-mplus_1p text-3xl md:text-[40px] my-5 font-bold text-lightGreyText">Our Services</h1>
                <h2 className="font-mplus_1p text-lg md:text-3xl my-2 font-bold text-lightGreyText">Comprehensive Care from Consultation to Customization</h2>
                <p className="font-mplus_1p text-sm md:text-2xl text-black">At our facility, we understand the unique needs of those seeking clubfoot treatment. Our comprehensive services ensure that every patient receives the highest standard of care, tailored to their individual needs. From initial consultations to the creation of customized braces, we are dedicated to supporting our patients every step of the way.</p>
            </div>

            <div>
                <h1 className="font-mplus_1p text-3xl md:text-4xl my-6 font-bold text-lightGreyText">Medical Consultations</h1>
                <div className="p-4 flex flex-col space-x-0 md:space-x-8 space-y-4 md:space-y-0 md:flex-row">
                    <Card
                        image={assessment}
                        title="Personalized Assessments"
                        description="Our experienced doctors provide thorough evaluations to understand the specific requirements of each patient. This personalized approach ensures that every treatment plan is tailored to achieve the best possible outcomes."
                        buttonText="Visit"
                    />
                    <Card
                        image={guidance}
                        title="Expert Guidance"
                        description="Receive expert advice and recommendations from leading specialists in clubfoot treatment. Our doctors stay up-to-date with the latest advancements in the field to provide cutting-edge care."
                        buttonText="Visit"
                    />
                </div>
            </div>

            <div>
            <h1 className="font-mplus_1p text-3xl md:text-4xl my-5 font-bold text-lightGreyText">Custom Brace Fitting</h1>
                <div className="p-4 flex flex-col space-x-0 md:space-x-8 space-y-4 md:space-y-0 md:flex-row">
                    <Card
                        image={tailored_sol}
                        title="Tailored Solutions"
                        description="Our skilled shoemakers work closely with medical professionals to design and craft braces that are tailored to the unique anatomy and needs of each patient. This ensures optimal fit, comfort, and effectiveness."
                        buttonText="Visit"
                    />
                    <Card
                        image={accessories}
                        title="Accessories"
                        description="We use only the highest quality materials to create durable and effective braces. Our commitment to quality means you can trust our products to provide the support you need."
                        buttonText="Visit"
                    />
                </div>
            </div>
        </div>
    )
}

export default OurServices;