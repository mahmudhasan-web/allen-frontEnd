import ProductBanner from "@/Components/ProductBanner/ProductBanner";
import Product from "./Product";

export default function Page() {
    return (
        <div className="mt-20 ">
            <ProductBanner/>
            <div className="container px-3">
            <Product />
            </div>
        </div>
    );
}