import ResCard from "./RestrauntCard";
import { useEffect, useState } from "react";

const Body = () => {
  let [listOfRestraunts, setListOfRestraunts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.65420&lng=77.23730&str=Burger&trackingId=30bc26f7-2fbe-70e5-a9b5-4a8aa938c89f&submitAction=ENTER&queryUniqueId=4cb869c2-ac06-e0c4-4eb9-6915a405c46b"
    );
    res = await res.json();
    console.log(res?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
    setListOfRestraunts(
      res?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards
    );
  }

  if (listOfRestraunts.length === 0) {
    return <h1> Loading..... </h1>;
  }

  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterList = listOfRestraunts.filter((resObj) => {
              return resObj?.card?.card?.restaurant?.info?.avgRating > 4.5;
            });
            setListOfRestraunts(filterList);
          }}
        >
          Top reated restraunts
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            fetchData();
            console.log("Reset Btn Called");
          }}
        >
          Reset
        </button>
      </div>
      <div className="crad-container">
        {listOfRestraunts.map((resObj) => {
          return <ResCard key={resObj?.card?.card?.info?.id} resData={resObj} />;
        })}
      </div>
    </div>
  );
};

export default Body;
