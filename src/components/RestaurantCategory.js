import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{

    //we are moving the control of show items to the parent so this is not needed
    //earlier it was uncontrolled component. now after the parent is controlling the state it has    become controlled component.
    // const [showItems,setShowItems]=useState(false);

    //if RestaurantCategory was controlling showItems---> uncontrolled component
    //if RestaurantCategory is not controlling showItems---> controlled component(does not have own state)


    console.log("Inside"+data);

    const handleClick=()=>{
        // setShowItems(!showItems);
        setShowIndex();
    }
    return (
    <div>
        {/* header */}
        <div className="w-6/12 bg-slate-200 mx-auto my-4 p-4 shadow-xl">
        <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
       
        </div>

        {/* if showItems is true open the accordion */}
 {showItems && <ItemList items={data.itemCards} />}
 </div>
    </div>
    )
}

export default RestaurantCategory;