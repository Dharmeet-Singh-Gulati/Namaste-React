import Shimmer from "./Shimmer";
import { star_svg } from "../utils/constants";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestrauntMenu = (props) => {
  const { restrauntId } = props;
  const [restrauntList, filterList, isVegFilter, vegFilter] =
    useRestrauntMenu();

  if (restrauntList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="recommended-menu">
      <div className="recommended-headinng-container">
        <h2 className="recommended-text">Recommended</h2>
        <button
          className="veg-filter"
          onClick={() => {
            isVegFilter();
          }}
        >
          {vegFilter ? "Veg" : "Veg & Non Veg"}
        </button>
      </div>
      <div className="restraunt-menu-main-contrainer-body">
        {filterList.map((restro) => {
          const {
            name,
            id,
            description,
            finalPrice,
            price: defaultPrice,
          } = restro?.card?.info;
          const { rating } = restro?.card?.info?.ratings?.aggregatedRating;
          const priceDecide = () => {
            if (finalPrice === null || finalPrice === undefined) {
              return <h4>Rs {defaultPrice}</h4>;
            } else {
              return (
                <h4>
                  <strike>{defaultPrice}</strike>
                  {"  "}Rs {finalPrice}
                </h4>
              );
            }
          };
          return (
            <div className="restraunt-menu-main-contrainer" key={id}>
              <div className="left">
                <h4 className="restro-menu-meal-name">{name}</h4>
                {priceDecide()}
                <h4>
                  {star_svg}
                  {"  "}
                  {rating}
                </h4>
                <h4>{description}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestrauntMenu;
