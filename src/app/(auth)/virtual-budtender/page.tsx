import AuthBanner from "@/Components/AuthBanner/AuthBanner";
import VirtualBudtender from "./VirtualBudtender";

export default function Page() {
    return (
        <div>
            <AuthBanner text="VIRTUAL BUDTENDER" />
            <div className="container my-6">
                <VirtualBudtender />
            </div>
        </div>
    );
}