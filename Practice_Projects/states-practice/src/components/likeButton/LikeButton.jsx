import { useState } from "react";

function LikeBtn() {
    const [isLike, setisLike] = useState(false)

    function clicked(){
        setisLike(!isLike)
    }
  return (
    <>
      <p onClick={clicked}>
        <i className={isLike ? "fa-solid fa-heart text-blue-600" : "fa-regular fa-heart"}></i>

      </p>
    </>
  );
}
export default LikeBtn;
