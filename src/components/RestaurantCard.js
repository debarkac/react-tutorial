import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const{resData}=props;
    console.log(resData)
    console.log(props)
    const {name,cuisines,avgRating,cloudinaryImageId}=resData?.info
    return(
        <div className="restaurant-card m-4 p-4 w-[200px] bg-gray-200 hover:bg-gray-400 rounded-md flex flex-col justify-between min-h-[400px]">
            <img className="res-logo" alt="res-logo" src={CDN_URL +
          cloudinaryImageId} />
            <h3 className="font-bold py-3">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
        </div>
    )
}

export default RestaurantCard