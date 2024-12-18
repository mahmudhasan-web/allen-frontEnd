'use client'
import Available from "@/Components/Available/Available";
import Banner from "@/Components/Banner/Banner";
import Brands from "@/Components/Brands/Brands";
import Experience from "@/Components/Experience/Experience";
import Featured from "@/Components/Featured/Featured";

export default function Page() {
    return (
        <div className="overflow-x-hidden">
            <Banner></Banner>
            <div>
                <Experience />
            </div>
            <div>
                <Featured />
            </div>
            <div>
                <Available />
            </div>
            <div>
                <Brands/>
            </div>
        </div>
    );
}