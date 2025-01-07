import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../src/utils/useRestaurantmenu";
import { MENU_API } from "./Urls";
import Categories from "./Categories";

const Menu = () => {

    const {resid} = useParams();                       
     
    const resinfo = useRestaurantmenu(resid);

    const [showindex,setshowindex] = useState(null);


    if(resinfo === null) return <Shimmer/>;

    
    const category = resinfo.filter((c) => {
        //console.log("hi",c);
      return  c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });

    //console.log("c",category);
    
   return  (
        <div className="menu">
        <ul>
       {
          category.map((items,index) =>  (
          
        <Categories  data = {items.card.card} 
        show = {index === showindex ? true:false }
        setshowindex = {setshowindex}
        index = {index}
        /> 
                      
))

}
        </ul>
        </div>
    );
};

export default Menu;

