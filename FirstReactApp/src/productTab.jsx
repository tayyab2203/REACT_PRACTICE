import Product from "./product";
function ProductTab() {
  return (
    <div>
      <Product title="phone" price={30000}/>
      <Product title="Laptop" price={60000}/>
      <Product title="Keyboard" price={1000}/>
    </div>
  );
}
export default ProductTab
