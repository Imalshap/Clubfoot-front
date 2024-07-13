import ChangePasswordForm from "./change_password_form";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

const ChangePassword = () => {


    return (
        <>
            <div className="flex flex-col z-50 mt-44 h-full">

                <div>
                    <p className="text-3xl md:5xl lg:text-6xl text-lightGreyText font-bold font-mplus_1p">
                        Change Password
                    </p>
                    <p className="text-lightGreyText text-lg md:text-2xl px-5 md:px-20 py-5">Please enter a new password for your account. Make sure your password is strong and secure.</p>
                </div>

                <ChangePasswordForm />

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

export default ChangePassword;
