import resList from "../utils/mockObj";
import ResCard from "./RestrauntCard";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="crad-container">
        {resList.map((resObj) => {
          return <ResCard key={resObj.card.card.info.id} resData={resObj} />;
        })}
      </div>
    </div>
  );
};

export default Body;
