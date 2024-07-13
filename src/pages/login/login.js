import LoginForm from './loginform';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';

const Login = () => {

    return (
        <>
            <div className="flex flex-col z-50 mt-20 md:mt-28 h-full">

                <div>
                    <p className="text-3xl md:5xl lg:text-6xl text-lightGreyText font-bold font-mplus_1p">
                        Welcome Back!
                    </p>
                    <p className="text-lightGreyText text-lg md:text-2xl px-5 md:px-20 py-5">Welcome back to our platform dedicated to providing comprehensive care for clubfoot treatment. Please log in to your account to access personalized services and connect with our healthcare professionals.</p>
                </div>

                <LoginForm />

                <div className="flex flex-row p-4 md:p-10 justify-center items-center">
                    <p className="text-[#575757] font-semibold">Don't have an account? </p>
                    <Link to="/register">
                        <p className="text-buttonBlue ml-2 underline">Register</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
