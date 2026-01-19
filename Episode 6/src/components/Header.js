import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const LOGO = new URL("../../assets/logo.jpg", import.meta.url);
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const isOnline = useOnline();

  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO.href} />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>Online Status: {isOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
