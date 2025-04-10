import Hero from "./components/hero";
import ProductList from "./components/product/product-list";

export default function Home() {
  return (
    <div className="max-w-10xl mx-auto px-4 md:px-6 lg:px-8 ">
      <Hero/>
      <h2 className="w-full text-center text-2xl md:text-4xl font-semibold py-4">All Products</h2>
      <ProductList/>
    </div>
  );
}
