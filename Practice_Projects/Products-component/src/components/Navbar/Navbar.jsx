import "./Navbar.css";
import Free from "../../assets/Free.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
            <img src={Free} alt="logo" />
        </nav>
      </div>
    </>
  );
}
export default Navbar;
