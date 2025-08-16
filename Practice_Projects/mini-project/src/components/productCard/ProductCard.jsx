import { useState } from "react";

function ProductCard({ image, name, price, description }) {
  const [isLiked, setIsLiked] = useState(false);
  function liked() {
    setIsLiked(!isLiked);
  }
  return (
    <>
      <div className="productcard bg-amber-700 m-4 p-3 rounded-2xl justify-center flex-col  border-4 border-amber-200  hover:shadow-lg hover:scale-105 transition">
        <img src={image} alt="this is product image" />
        <h3>{name}</h3>
        <h5>{price}</h5>
        <p>{description}</p>

        <p className="cursor-pointer" onClick={liked}>
          <i
            className={
              isLiked
                ? "fa-solid fa-heart text-blue-600"
                : "fa-regular fa-heart"
            }
          ></i>
        </p>
        {isLiked ? <h5>You liked: {name}</h5> : null}
      </div>
    </>
  );
}
export default ProductCard;
