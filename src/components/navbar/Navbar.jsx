import "./Navbar.css";
import logoPic from "../../../public/assets/logoPic.svg";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src={logoPic} alt="logo" />
          <p>LEAD School</p>
        </div>
        <div className="navElements">
          <p>Search Zip</p>
          {/* <p>Your Zip</p> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
