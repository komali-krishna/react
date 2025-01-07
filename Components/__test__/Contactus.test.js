import { render , screen} from "@testing-library/react";
import Contactus from "../Contactus";
import "@testing-library/jest-dom";

describe("contact us page test cases",()=>{
    it("should load the component", ()=>{
        render(< Contactus/>)
       
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
       });
       
       it("should load button", ()=>{
           render(< Contactus/>)
          
           const button = screen.getByRole("button");
           expect(button).toBeInTheDocument();
          });
       
          it("should load input name", ()=>{
           render(< Contactus/>)
          
           const inputName = screen.getByPlaceholderText("name");
           expect(inputName).toBeInTheDocument();
          });
});

