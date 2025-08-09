import "./Footer.css"
function Footer({ text, year }) {
  return (
    <>
    <div className="footer">
      <h4>{text}</h4>
      <p> {year}</p>
    </div>
    </>
  );
}
export default Footer;
