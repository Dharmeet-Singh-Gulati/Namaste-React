import { useState, useEffect } from "react";
import { resList } from "../utils/mockObj";

const useRestrauntMenu = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [vegFilter, setVegFilter] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = () => {
    let data =
      resList.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    setRestrauntList(data);
    setFilterList(data);
  };

  let isVegFilter = () => {
    if (vegFilter === false) {
      let filteredList = filterList.filter((restro) => {
        return restro?.card?.info?.isVeg === 1;
      });

      setFilterList(filteredList);
    } else {
      setFilterList(restrauntList);
    }
    setVegFilter(!vegFilter);
  };

  return [restrauntList, filterList, isVegFilter, vegFilter];
};

export default useRestrauntMenu;

// fix BODY and Restraunt and add Online and Offline Feature
