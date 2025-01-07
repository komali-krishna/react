import Foodcard from "./Foodcard";
import { useEffect, useState } from "react";
import reslist from "../src/utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../src/utils/useOnline";


const Body = () => {

    const [listRestaurants , setlistRestaurants] = useState(null);
    const [filteredrestaurant , setfilteredrestaurant] = useState([]);
    const [searchtext,setsearchtext] = useState();

   //console.log(listRestaurants);

     useEffect(() => {
      fetchdata(); 
     },[]);
    
     const fetchdata =  async () => {

     const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     
     const json =  await data.json()
     //console.log(json);
     setlistRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setfilteredrestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }
      
  
     const onlinestatus = useOnline ();
     if(onlinestatus === false ) 
      return (
       <h1>your page is offline</h1>
    )
    
     if(listRestaurants===null) {
      return <Shimmer/>
     }

    return(
      <div className="body">
        <div className="filter">
         
        <div className="search-container">
          <input type="text"placeholder="search restaurant" className="search" 
          value={searchtext} onChange={(e) => {
           setsearchtext(e.target.value)
          }}/>
          <button  className ="sea" onClick={() => {
           const filteredres = listRestaurants.filter((res) => 
              res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
            setfilteredrestaurant(filteredres);
          }}>
            Search
            </button>
          </div> 
                  
          <button className = "top" onClick={() => {
                const filteredlist = listRestaurants.filter(
                    (res)=> res.info.avgRating>4.3);
                    //console.log(filteredlist);
                    setfilteredrestaurant(filteredlist);
            }}>
                Top rated restaurants
            </button>

                    
        </div> 


        <div className="restaurant-container">
          {filteredrestaurant.map((restaurants) => (
           <Link to={"restaurants/"+restaurants.info.id}>

            <Foodcard  key={restaurants.info.id} resData={restaurants}
           /></Link>
          )
        )}
       </div>


      </div>
    )
  }
   export  default Body; 


  