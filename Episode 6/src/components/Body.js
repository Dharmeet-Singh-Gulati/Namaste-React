import ResCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import useBodyLogic from "../utils/useBodyLogic";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [
    listOfRestraunts,
    filterList,
    topRatedRestraunts,
    reset,
    searchText,
    search,
    searchTextUpdate,
  ] = useBodyLogic();

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <>
        {console.log("Me called")}
        <h1>You are Offline</h1>
      </>
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
            search(e);
          }}
        >
          <input
            className="input-text"
            type="text"
            placeholder="Search anything Crispy ... "
            value={searchText}
            onChange={(e) => searchTextUpdate(e.target.value)}
          />

          <button className="search-btn" type="submit">
            Search
          </button>
        </form>

        <button
          className="filter-btn"
          onClick={() => {
            topRatedRestraunts();
          }}
        >
          Top reated restraunts
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
      <div className="crad-container">
        {filterList.map((resObj) => {
          return (
            <ResCard key={resObj?.card?.card?.info?.id} resData={resObj} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
