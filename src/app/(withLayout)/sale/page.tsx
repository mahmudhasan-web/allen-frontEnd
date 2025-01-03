import ProductBanner from "@/Components/ProductBanner/ProductBanner";
import SellProducts from "./SellProducts";

export default function Page() {
    return (
        <div className="mt-20 ">
            <ProductBanner />
            {/* <Product /> */}
            <div className="container px-3">
                <h1 className="text-3xl text-center font-bold">On Sale</h1>
                <SellProducts />
            </div>
        </div>
    );
}