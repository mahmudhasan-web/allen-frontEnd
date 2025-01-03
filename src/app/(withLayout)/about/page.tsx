import Image from "next/image";
import logo from "@/assests/logo.png";
import AuthBanner from "@/Components/AuthBanner/AuthBanner";

export default function Page() {
    return (
        <div className="">
            <AuthBanner text="About Us"></AuthBanner>
            <div className=" w-1/3 mx-auto my-10">
                <Image alt="Logo" src={logo} width={350} className="mx-auto" height={300}></Image>
                <div className="text-center space-y-4 text-xl font-semibold">
                    <p>Buddy’s Bodega was born in 2018 in New York City with the aspiration to curate the best menu for New Yorkers by New Yorkers.</p>
                    <p>With close ties to California, where the highest quality cannabis is cultivated, Buddy’s Bodega has become known for providing the “best of the best” in all cannabis products.</p>
                    <p>Since our inception, our mission has remained the same. Introducing the best products while educating, growing, and strengthening the cannabis community. We are sharing our love of the plant with the world.</p>
                </div>
            </div>
        </div>
    );
}