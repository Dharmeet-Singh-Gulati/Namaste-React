import React from "react";
import ReactDOM from "react-dom/client";
import "./assignment.css";
import resList from "./utils/mockObj";

const LOGO = new URL("./assets/logo.jpg", import.meta.url);
const VEGSYMBOL = new URL("./assets/veg_symbol.png", import.meta.url);

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

const ResCard = (props) => {
  const { resData } = props;
  const { name: mealName, price: mealPrice } = resData.card.card.info;
  const { name: restroName, avgRating } = resData?.card?.card?.restaurant?.info;
  const { minDeliveryTime, maxDeliveryTime } =
    resData?.card?.card?.restaurant?.info?.sla;
  const { imageId } = resData?.card?.card?.info;

  return (
    <div className="res-card-container">
      <div className="upper-section">
        <div className="upper-left">
          <h4 className="res-name">By {restroName}</h4>
          <div className="rating-eta">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width="16"
                height="16"
              >
                <path
                  d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"
                  fill="#7c7a7a"
                />
              </svg>
            </span>
            <h4 className="rating">{avgRating}</h4>
            <h4 className="eta">
              {minDeliveryTime} - {maxDeliveryTime} MINS
            </h4>
          </div>
        </div>
        <div className="upper-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              fill="#424141"
            ></path>
          </svg>
        </div>
      </div>
      <div className="separator">
        <pre> ..................................................</pre>
      </div>
      <div className="lower-section">
        <div className="lower-left">
          <img src={VEGSYMBOL}></img>
          <h3 className="meal-name">{mealName}</h3>
          <h4 className="price">₹ {mealPrice / 100}</h4>
          <h4 className="more-details-btn">More Details</h4>
        </div>
        <div className="lower-right">
          <div className="meal-wrapper">
            <div className="meal-logo">
              <img
                className="res-logo"
                alt="res-logo"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  imageId
                }
              ></img>

              <h2 className="add-btn">Add</h2>
            </div>
          </div>
          <h5 className="customisable-banner">Customisable</h5>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="crad-container">
        {resList.map((resObj) => {
          return <ResCard key={resObj.card.card.info.id}  resData={resObj} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
