import ResCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [fiilterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.65420&lng=77.23730&str=Burger&trackingId=30bc26f7-2fbe-70e5-a9b5-4a8aa938c89f&submitAction=ENTER&queryUniqueId=4cb869c2-ac06-e0c4-4eb9-6915a405c46b"
    );
    res = await res.json();
    setListOfRestraunts(
      (res?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards).slice(1)
    );
    setFilterList(
      (res?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards).slice(1)
    );
  }

  if (listOfRestraunts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="search">Only Search by name available</div>
      <div className="filter">
        <form
          onSubmit={(e) => {
            e.preventDefault(); // page reload stop
            let filteredList = listOfRestraunts.filter((resObj) =>
              resObj.card.card.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilterList(filteredList);
          }}
        >
          <input
            className="input-text"
            type="text"
            placeholder="Honey"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button className="search-btn" type="submit">
            Search
          </button>
        </form>

        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestraunts.filter((resObj) => {
              return resObj?.card?.card?.restaurant?.info?.avgRating > 4;
            });
            setFilterList(filteredList);
          }}
        >
          Top reated restraunts
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setFilterList(listOfRestraunts);
            setSearchText("");
            console.log("Reset Btn Called");
          }}
        >
          Reset
        </button>
      </div>
      <div className="crad-container">
        {fiilterList.map((resObj) => {
          return (
            <ResCard key={resObj?.card?.card?.info?.id} resData={resObj} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
