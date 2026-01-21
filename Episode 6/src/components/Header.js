import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const LOGO = new URL("../../assets/logo.jpg", import.meta.url);
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const isOnline = useOnline();

  return (
    <div className="bg-pink-200 flex justify-between sticky">
      <div className="logo-container w-20 p-2 rounded-full bg-orange-400 my-1">
        <img className="logo rounded-full" src={LOGO.href} />
      </div>
      <div className="nav-items-container flex items-center ">
        <ul className="flex justify-center mr-20">
          <li className="mr-5">Online Status: {isOnline ? "🟢" : "🔴"}</li>
          <li className="mr-5">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mr-5">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="mr-5">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="mr-10">Cart</li>
          <button
            className="login-btn border-2 border-solid px-5 rounded-lg bg-pink-50 hover:bg-pink-75 ease-in transition-all duration-200 cursor-pointer"
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
