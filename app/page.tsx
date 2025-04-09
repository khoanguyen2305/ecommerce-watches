import Hero from "./components/hero";
import ProductList from "./components/product-list/product-list";

export default function Home() {
  return (
    <div className="max-w-10xl mx-auto px-4 md:px-6 lg:px-8">
      <Hero/>
      <ProductList/>
    </div>
  );
}
