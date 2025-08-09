import "./ProductCard.css";

function ProductCard({ image, name, price, description }) {
  return (
    <div className="productCard">
      <img src={image} alt="product-image" />
      <h3>{name}</h3>
      <h5>{price}</h5>
      <p>{description}</p>
      <button onClick={() => alert("Product successfully add to carted")}>Add to cart</button>
    </div>
  );
}
export default ProductCard;
