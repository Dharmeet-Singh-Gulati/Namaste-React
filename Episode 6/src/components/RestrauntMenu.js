import useRestrauntMenu from "../utils/useRestrauntMenu";
import { useParams } from "react-router-dom";
import RestaurantMenuItemCard from "./RestaurantMenuItemCard";

const RestrauntMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const [restaurantList, filterList, isVegFilter, vegFilter] =
    useRestrauntMenu();
  console.log("Restaurant lits is ", restaurantList);

  if (!restaurantList.length) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <div className="text-center text-2xl font-bold py-10 ">
        Name of the Restaurant: {resId}
      </div>
      {restaurantList.map((resObj) => (
        <RestaurantMenuItemCard key={resObj.card.card.title} resObj={resObj} />
      ))}
    </>
  );
};

export default RestrauntMenu;
// restaurantList
