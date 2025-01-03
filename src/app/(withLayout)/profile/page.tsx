import AuthBanner from "@/Components/AuthBanner/AuthBanner";
import Profile from "./Profile";

export default function Page() {
    return (
        <div>
            <AuthBanner text="Your Profile" />
            <div className="container px-3">
                <Profile />
            </div>
        </div>
    );
}