import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import Display from "./Display";
import { clearcart } from "../src/utils/cartSlice";


const Cart = () => {

const cartItems = useSelector((store) => store.cart.Items)
console.log(cartItems);

const dispatch = useDispatch();

const emptycart = (cartItems) => {
  dispatch(clearcart(cartItems));
}
    return(
        <div className="cartarea">
         <h1 className="cartc">_Cart Component_</h1>
         <button className="clear" onClick={() =>emptycart()}>Clear Cart</button>
         <div>
          < Display displayitems={cartItems}/>
         </div>
        </div>
    )
}

export default Cart;