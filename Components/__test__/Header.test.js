import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../src/utils/appStore";
import "@testing-library/jest-dom";

it("Should load the login button",()=>{

    render(
        <BrowserRouter>
         <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
       
); 
 const loginButton = screen.getByRole("button");
 expect(loginButton).toBeInTheDocument();
    
});

it("Should change the login button to logout",()=>{

    render(
        <BrowserRouter>
         <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
       
); 
 const loginButton = screen.getByRole("button");
 fireEvent.click(loginButton);

 const logoutButton = screen.getByRole("button");
 expect(logoutButton).toBeInTheDocument();
    
});