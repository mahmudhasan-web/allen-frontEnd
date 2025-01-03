import AuthBanner from "@/Components/AuthBanner/AuthBanner";
import ForgetPassword from "./ForgotPassword";

export default function Page() {
    return (
        <div>
            <AuthBanner text="Forget password"></AuthBanner>
            <ForgetPassword />
        </div>
    );
}