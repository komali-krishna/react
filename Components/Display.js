import { useDispatch } from "react-redux";
import { removeItem } from "../src/utils/cartSlice";

const Display = ({displayitems}) => {
    console.log(displayitems);


  const dispatch = useDispatch();

  const deletecart = (displayitems) => {
    dispatch(removeItem(displayitems))
  }

    return (
        <div>
            {
                displayitems.map((displayitems) => {
                 return (
                    <div className="menu-list">
               
<div className="menu-meals">
<h1>{displayitems.card.info.name} -
{displayitems.card.info.price ? displayitems.card.info.price/100 : displayitems.card.info.defaultPrice/100 }/-</h1>
<h2>{displayitems.card.info.description}</h2>
<h1> <span className="star">★</span>{displayitems.card.info.ratings.aggregatedRating.rating} - ({displayitems.card.info.ratings.aggregatedRating.ratingCountV2})</h1>
</div>
<div class="menu-img">
<img  className ="image"src= 
{"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+displayitems.card.info.imageId}/>
<button className="delete" onClick={() => deletecart()}>remove</button>
</div>
</div>
                )

                
    
                })
            }
            </div>
    )
}

export default Display;