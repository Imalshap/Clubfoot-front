import { Link } from 'react-router-dom';
import ForgotPasswordForm from './forgot_password_form';
import Footer from '../../components/footer/footer';

const ForgotPassword = () => {
    return (
        <>
            <div className="flex flex-col z-50 mt-44 h-full">

                <div>
                    <p className="text-3xl md:5xl lg:text-6xl text-lightGreyText font-bold font-mplus_1p">
                        Forgot your password?
                    </p>
                    <p className="text-lightGreyText text-lg md:text-2xl px-5 md:px-20 py-5">Enter your email address below and we’ll send you a link to reset your password</p>
                </div>

                <ForgotPasswordForm />

                <div className="flex flex-row p-4 md:p-10 justify-center items-center">
                    <Link to="/login">
                        <p className="text-buttonBlue ml-2 underline">Go Back</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ForgotPassword;
