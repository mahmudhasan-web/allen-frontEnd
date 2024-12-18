import AuthBanner from "@/Components/AuthBanner/AuthBanner";
import SignIn from "./SignIn";

export default function Page() {
    return (
        <div>
            <AuthBanner text="MEMBER SIGN-IN"></AuthBanner>
            <SignIn></SignIn>
        </div>
    );
}