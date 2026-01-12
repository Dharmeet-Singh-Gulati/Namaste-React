import { useEffect, useState } from "react";
import { resList } from "../utils/mockObj";
import Shimmer from "./Shimmer";
import { star_svg } from "../utils/constants";

const RestrauntMenu = (props) => {
  const { restrauntId } = props;
  const [restrauntList, setRestruntList] = useState([]);
  const [filterList, setFilterList] = useState([[]]);
  const [vegFilter, setVegFilter] = useState("Veg & Non-Veg");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let data =
      resList.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    setRestruntList(data);
    setFilterList(data);
  }

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
            let isVegFilter = () => {
              const filteredList = restrauntList.filter((restro) => {
                console.log(restro?.card?.info?.isVeg);
                return restro?.card?.info?.isVeg === 1;
              });
              setFilterList(filteredList);
              setVegFilter("Veg");
            };

            let isNoVegFilter = () => {
              setFilterList(restrauntList);
              setVegFilter("Veg & Non-Veg");
            };

            vegFilter === "Veg & Non-Veg" ? isVegFilter() : isNoVegFilter();
          }}
        >
          {vegFilter}
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
            isVeg,
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
