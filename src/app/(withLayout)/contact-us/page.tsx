import AuthBanner from "@/Components/AuthBanner/AuthBanner";
import ContactUs from "./ContactUs";

export default function Page() {
    return (
        <div>
            <AuthBanner text="Contact Us"/>
            <div className="px-3">
                <ContactUs/>
            </div>
        </div>
    );
}