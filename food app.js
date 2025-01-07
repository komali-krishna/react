import React, { Children, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contactus from "./Components/Contactus";
import Error from "./Components/Error";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
//import Grocery from "./Components/Grocery";

import { lazy,Suspense } from "react";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./src/utils/UserContext";
import appStore from "./src/utils/appStore";

const Grocery = lazy (() => import("./Components/Grocery"));



const AppLayout = () => {

  const [username,setusername] = useState();

useEffect(()=>{
   const data = {
    name: "Komali"
   }

   setusername(data.name);
},[]) 
    return(

      <Provider store={appStore}>
        <UserContext.Provider value = {{loggedinUser: username}}>
        <div className="app">
     <Header/>
     <Outlet />
     </div>
      </UserContext.Provider>
      </Provider>

    )
};

const Approuter = createBrowserRouter ([
  {
     path : "/",
     element : <AppLayout/>,
     errorElement : <Error/>,
     children : [
   {
     path: "/",
     element : <Body />
   },     
        
  {
    path : "/aboutus", 
    element : <About/>
 },
 {
     path : "/contactus",
     element : <Contactus/>
 },
 {
   path : "/grocery",
   element : <Suspense fallback={<h1>loading the page...</h1>}>
    <Grocery/>
    </Suspense>
 },  
 {
    path : "/restaurants/:resid",
    element : <Menu/>
 } ,
 {
  path : "/cart",
  element : <Cart/>
}   
     ],
     errorElement : <Error/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("food"));

root.render(<RouterProvider  router={Approuter}/>);



/* chunking-piece of code
 code splitting
 dynamic bundling
lazy loading - loading only the main component of page rather then reloading the other component page
on demand loading
*/