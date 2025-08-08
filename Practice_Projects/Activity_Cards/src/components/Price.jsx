function Price({oldPrice, newPrice}) {

    let oldStyle = {
        textDecorationLine: "line-through",
        color: "black"
    }
    let newStyle = {
        fontWeight: "bold",
        color: "black"
    }
    let styles = {
        backgroundColor: "yellow",
        height: "30px",
        borderBottomLeftRadius: "18px",
        borderBottomRightRadius: "18px"
    }
  return(
   <>
   <div className="prices" style={styles}>
    <span style={oldStyle}>{oldPrice}</span>
    &nbsp; &nbsp; &nbsp;
    <span style={newStyle}>{newPrice}</span>
   </div>
  </>
  );
}
export default Price;
