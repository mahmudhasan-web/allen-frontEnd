import AuthBanner from "@/Components/AuthBanner/AuthBanner";
import ForgetPassword from "./ForgotPassword";

export default function Page() {
    return (
        <div>
            <AuthBanner text="Forget Password"></AuthBanner>
            <ForgetPassword />
        </div>
    );
}