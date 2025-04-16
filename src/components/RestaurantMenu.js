import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
    // const [resInfo,setresInfo]=useState(null);
    const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId);

    if(resInfo===null)
        return <Shimmer />;

    console.log("This is")
    console.log(resInfo)
    const {name,cuisines,costForTwo}=resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <h1>Menu</h1>
        <ul>
            {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price}</li>)}
        </ul>
        </div>
    )
}

export default RestaurantMenu;