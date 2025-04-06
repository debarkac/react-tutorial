import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu=()=>{
    const [resInfo,setresInfo]=useState(null);
    const {resId}=useParams();

    useEffect(()=>{
        fetchData();
    },[resId])

    const fetchData=async ()=>{
        const data=await fetch(MENU_API_URL+resId)
        const json=await data.json();
        console.log(json);
        setresInfo(json);
    }

    if(resInfo===null)
        return <Shimmer />;

    const {name,cuisines,costForTwo}=resInfo?.data.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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