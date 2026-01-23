import { useState } from "react";
import RestaurantMenuItem from "./RestrauntMenuItem";

const RestaurantMenuItemCard = ({ resObj }) => {
  const [showItemCard, setShowItemCard] = useState(false);
  return (
    <div>
      <div className="w-6/12 mx-auto h-3 mt-4 bg-gray-200"></div>
      <div className="w-6/12 mx-auto my-3 flex-col">
        <div className="flex justify-between px-2 py-1 items-center bg-white ">
          <span
            className="font-bold text-black text-lg cursor-pointer"
            onClick={() => {
              setShowItemCard(!showItemCard);
            }}
          >
            {resObj.card.card.title} ({resObj.card.card.itemCards.length})
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              setShowItemCard(!showItemCard);
            }}
          >
            ⬇
          </span>
        </div>
        {showItemCard ? (
          <RestaurantMenuItem
            key={resObj.card.card.title}
            itemList={resObj.card.card.itemCards}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuItemCard;
