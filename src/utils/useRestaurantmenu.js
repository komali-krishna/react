import { useEffect, useState } from "react";


const useRestaurantmenu = (resid) =>{

 const [resinfo,setresinfo] = useState(null);   

 

useEffect(()=>{
 fetchMenu();
},[])

const fetchMenu = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.67740&lng=83.20360&restaurantId=" + resid);
    const json = await data.json(); 
    //console.log(json);
    setresinfo(json.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
};

    return resinfo;
};

export default useRestaurantmenu;



//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.727455&lng=83.29775470000001&restaurantId=