import { useEffect, useState } from "react";
import { resList } from "../utils/mockObj";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
  const [restraunt, setRestrunt] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let data =
      resList.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    console.log(data);
    setRestrunt(data);
  }

  if (restraunt.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="restraunt-menu-main-contrainer">
      {restraunt.map((restro) => {
        return <h1 className="name">Meal Name is{restro?.card?.info?.name}</h1>;
      })}
    </div>
  );
};

export default RestrauntMenu;
// name
// cusinie
// menu
