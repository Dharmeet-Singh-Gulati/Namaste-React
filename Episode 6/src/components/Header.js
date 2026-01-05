const LOGO = new URL("../../assets/logo.jpg", import.meta.url);
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO.href} />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
