import { useContext } from "react";
import UserContext from "../src/utils/UserContext";

const Foodcard = ({resData}) => {
   //const {resData} = props;

    const {loggedinUser} = useContext(UserContext);



     return(
     <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
       <img  className="food-logo"
       alt="res-logo"
       src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
        +resData.info.cloudinaryImageId}
       />
       <h1>{resData.info.name}</h1>
       <h1>{resData.info.cuisines.join(",")}</h1>
       <h1>{resData.info.avgRating}</h1>
       <h1>{resData.info.locality}</h1>
       <h1>User:{loggedinUser}</h1> 
     </div>
     )
   };
    
   export default Foodcard;







   

   /** higher header component
    const Promotedlabel = (Foodcard) => {
      return (props) => {
        return(
        <div>
        <label>promoted</label>
        <Foodcard {...props}/>
       </div>
        )
        }
      }
      export default promotedlabel
    */