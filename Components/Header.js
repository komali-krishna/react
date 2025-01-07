import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import useOnline from "../src/utils/useOnline";
import UserContext from "../src/utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

const [buttonname,setbutton] = useState("log in");

const onlinestatus = useOnline();

const {loggedinUser} = useContext(UserContext);

const cartItems = useSelector((store) => store.cart.Items)
console.log(cartItems);

    return(
     <div className= "header">
        <div className="logo-container">
        <img className="logo"
        src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-1536x1536.png"
          />
        </div>
        <div className="items">
        <ul>
          <li>
            Online status:{onlinestatus ? "true" : "false" };
          </li>
          <li>
            <Link to="/">Home</Link>
            </li> 
          <li>
            <Link to="/aboutus">AboutUs</Link>
            </li> 
          <li>
            <Link to="/contactus">ContactUs</Link>
            </li> 
            <li>
              <Link to ="/grocery">Grocery</Link>
            </li>
            <li>
            <Link to = "/cart"><li >Cart -({cartItems.length} ITEMS)</li></Link>
              </li>  
          <button onClick={() => {
           buttonname === "login" ? setbutton("log out") : setbutton("login");
          }}>
            {buttonname}
            </button>  
            <li>{loggedinUser}</li>
        </ul>
        </div>
     </div>
    )
  };

  export  default Header; 