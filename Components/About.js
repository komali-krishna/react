import User from "./User";
import Userclass from "./Userclass";
const About = () => {
    return (
      <div >
        <h1> this is about us page</h1>
        <h2>this is functional component</h2>
       <User/>

       <Userclass name={"komali"} component={"class component"}/>
      </div>
    );
}

export default About;