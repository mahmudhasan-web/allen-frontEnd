import AuthBanner from "@/Components/AuthBanner/AuthBanner";
import SignUp from "./SignUp";


export default function Page() {
    return (
        <div>
            <AuthBanner text="MEMBER SIGN-UP"></AuthBanner>
            <SignUp></SignUp>
        </div>
    );
}