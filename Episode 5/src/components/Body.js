import resList from "../utils/mockObj";
import ResCard from "./RestrauntCard";
import { useState } from "react";

const Body = () => {
  let [listOfRestraunts, setListOfRestraunts] = useState(resList);
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterList = listOfRestraunts.filter((resObj) => {
              return resObj.card.card.restaurant.info.avgRating > 4.5;
            });
            setListOfRestraunts(filterList);
          }}
        >
          Top reated restraunts
        </button>
      </div>
      <div className="crad-container">
        {listOfRestraunts.map((resObj) => {
          return <ResCard key={resObj.card.card.info.id} resData={resObj} />;
        })}
      </div>
    </div>
  );
};

export default Body;
