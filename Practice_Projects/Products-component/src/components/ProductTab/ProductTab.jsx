import ProductCard from "../ProductCard/ProductCard";
import Product1 from "../../assets/Product1.jpg";
import Product2 from "../../assets/Product2.jpg";

import "./ProductTab.css"

function ProductTab() {
  return (
    <>
    <div className="productTab">
      <ProductCard image={Product1} name="Laptop" price={45000} description="this product is very good, if you want to earn online, you need this device" />
      <ProductCard image={Product2} name="Laptop" price={49000} description="this product is very good, if you want to earn online, you need this device" />
      <ProductCard image={Product1} name="Laptop" price={45000} description="this product is very good, if you want to earn online, you need this device" />
      <ProductCard image={Product2} name="Laptop" price={49000} description="this product is very good, if you want to earn online, you need this device" />
    </div>
    </>
  );
}

export default ProductTab;
