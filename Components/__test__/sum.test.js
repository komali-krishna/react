import { sum } from "../sum";

test("calculate two variables", ()=>{
    const result = sum(3,5);

    //Asertion
    expect(result).toBe(8);
});