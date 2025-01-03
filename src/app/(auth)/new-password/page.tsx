import AuthBanner from "@/Components/AuthBanner/AuthBanner";
import NewPassword from "./NewPassword";

export default function Page() {
    return (
        <div>
            <AuthBanner text="Change your password"/>
            <div>
                <NewPassword/>
            </div>
        </div>
    );
}