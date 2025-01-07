import { useDispatch } from "react-redux"
import { addItem } from "../src/utils/cartSlice";

const Items = ({items}) => {

const dispatch = useDispatch();

    const addhadle = (items) => {
         dispatch(addItem(items))
    };
    console.log(items);
    return(
        <div>
        {
            items.data?.itemCards.map((items) => {
               return <div>
                <li className="menu-list">
<div className="menu-meals">
<h1>{items.card.info.name} -
{items.card.info.price ? items.card.info.price/100 : items.card.info.defaultPrice/100 }/-</h1>
<h2>{items.card.info.description}</h2>
<h1> <span className="star">★</span>{items.card.info.ratings.aggregatedRating.rating} - ({items.card.info.ratings.aggregatedRating.ratingCountV2})</h1>
</div>
<div class="menu-img">
<img  className ="image"src= 
{"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+items.card.info.imageId}/>

<button className="btn" onClick={ () => addhadle(items)}>+add</button>
</div>
</li>
</div>
            })
        }
    </div>
    )
}


export default Items;

