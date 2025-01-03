import ProductBanner from "@/Components/ProductBanner/ProductBanner";
import ProductCategory from "./ProductCategory";
// import Product from "./Product";

export default function Page() {
    return (
        <div className="mt-20 ">
            <ProductBanner />
            {/* <Product /> */}
            <div className="container px-3">
            <ProductCategory />
            </div>
        </div>
    );
}