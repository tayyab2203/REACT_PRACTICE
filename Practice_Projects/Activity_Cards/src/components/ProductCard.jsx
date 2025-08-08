import Price from "./price";
function ProductCards({title, idx}) {
    let oldPrice =["48,000", "54,000", "59,000", "64,000"]
    let newPrice =["45,000", "52,000", "57,000", "62,000"]

    let description = [["This is HP eliteBook 840.", "This laptop is not good for todays work."], ["This is HP eliteBook 840 G2.", "This is a laptop i am currently using. "], ["This is HP eliteBook 840 G5", "This is also a very good laptop but limited working performed"], ["This is HP eliteBook 840 G7", "Same, this laptop is perfectly fine and working very fast."]]
    let style = {
        border: "2px solid white",
        margin: "15px",
        borderRadius: "19px",
        width: "250px",
        height: "210px"
    }
  return (
      <>
      <div className="product" style={style}>
        <h2>{title}</h2>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
      </div>
    </>
  );
}
export default ProductCards;
