import { Link } from "react-router-dom";
import { star_svg, VEG_SYMBOL_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import { star_svg } from "../utils/constants";
import RestrauntMenu from "./RestrauntMenu";

const VEGSYMBOL = VEG_SYMBOL_URL;
const ResCard = (props) => {
  const { resData } = props;
  const {
    name: mealName,
    price: mealPrice,
    id: restrauntId,
  } = resData?.card?.card?.info;
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
            <span>{star_svg}</span>
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
          <Link to={"restraunts/123"}>
            <h3 className="meal-name">{mealName}</h3>{" "}
          </Link>
          <h4 className="price">₹ {mealPrice / 100}</h4>
          <h4 className="more-details-btn">More Details</h4>
        </div>
        <div className="lower-right">
          <div className="meal-wrapper">
            <div className="meal-logo">
              <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + imageId}
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

export default ResCard;
