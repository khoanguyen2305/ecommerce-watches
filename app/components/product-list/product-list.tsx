import Link from "next/link";
import Image from "next/image";
import WatchProduct from "@/public/product/watch-product.jpg"
import { Button } from "@/components/ui/button";

export default function ProductList () {
    const products = ["", "", ""];
    return (
        <div id="product" className="max-w-7xl mx-auto py-2 md:px-8 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {products.map((product, index) => (
                    <Link href="/product/123" key={index}>
                        <Image src={WatchProduct} alt="img" width={1000} height={1000} className="max-w-[17rem] h-72 object-center rounded-lg"/>

                        <div className="mt-4">
                            <h2 className="font-semibold tẽt-lg">Các sản phẩm tốt nhất</h2>
                            <p className="font-medium tẽt-sm mt-2">$ 1.200</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}