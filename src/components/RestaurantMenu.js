import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo,setresInfo]=useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  console.log("Res Info");
  console.log(resInfo);
  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log("Item" + itemCards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    // <div>
    // <h1>{name}</h1>
    // <p>{cuisines.join(", ")}</p>
    // <p>{costForTwo}</p>
    // <h1>Menu</h1>
    // <ul>
    //     {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price}</li>)}
    // </ul>
    // </div>

    <div className="text-center">
      <h1 className="font-bold m-4 p-4">{name}</h1>
      <p className="m-4 p-4">
        {cuisines.join(", ")}-{costForTwo}
      </p>
      {/* buildindg accordions */}
      {/* for each category we will build accordion */}
      {categories.map((category,index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index===showIndex?true:false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
