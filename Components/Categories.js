import { useState } from "react";
import Menu from "./Menu";
import Items from "./Items";


const Categories = (items) => {
    //console.log(items);
   

    return (
        <div className="accordian">
            <div className="cat"onClick={()=>items.show === false?items.setshowindex(items.index):items.setshowindex()} >
               <h1 >{items.data.title}({items.data.itemCards.length})</h1>
                <img  className ="symbol" src="https://icon-library.com/images/arrow-icon-down/arrow-icon-down-2.jpg"/>
            </div>
          { items.show && <Items  items = {items}/>}
        </div>
    )
}

export default Categories;