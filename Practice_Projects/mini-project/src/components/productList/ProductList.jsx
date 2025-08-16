import ProductCard from "../productCard/ProductCard";
function ProductList() {
  return (
    <>
      <div className="productList flex">
        <ProductCard
          image="/laptop.jpg"
          name="Laptop"
          price={"40,000"}
          description="This is laptops card description"
        />
        <ProductCard
          image="/laptop.jpg"
          name="Mouse"
          price={"40,000"}
          description="This is laptops card description"
        />
        <ProductCard
          image="/laptop.jpg"
          name="Mobile"
          price={"40,000"}
          description="This is laptops card description"
        />
        <ProductCard
          image="/laptop.jpg"
          name="Keyboard"
          price={"40,000"}
          description="This is laptops card description"
        />
      </div>
    </>
  );
}
export default ProductList;
