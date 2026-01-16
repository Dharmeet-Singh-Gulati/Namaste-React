import { useState, useEffect } from "react";
import { resList } from "../utils/mockObj";

const useRestrauntMenu = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    fetchData();
  });

  let fetchData = () => {
    let data =
      resList.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    setRestrauntList(data);
    setFilterList(data);
  };

  return [restrauntList, filterList];
};

export default useRestrauntMenu;

// fix BODY and Restraunt and add Online and Offline Feature
