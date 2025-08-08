import ProductCards from "./ProductCard";

function ProductTab() {
  let style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItem: "center",
  };
  return (
    <div style={style}>
      
      <ProductCards title="HP EliteBook" idx={0} />
      <ProductCards title="HP EliteBook G2" idx={1} />
      <ProductCards title="HP EliteBook G5" idx={2} />
      <ProductCards title="HP EliteBook G7" idx={3} />
    </div>
  );
}
export default ProductTab;
